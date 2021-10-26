import { useContext } from 'react';
import API from '../../API';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Context } from '../../context';
import NoImage from '../../images/no_image.jpg';
import Movie from '../../models/Movie';
import Rate from '../Rate/Rate';
import Thumb from '../Thumb/Thumb';
import { Content, Text, Wrapper } from './MovieInfo.styles';

type PropsType = {
	movie: Movie;
};

const MovieInfo: React.FC<PropsType> = ({ movie }) => {
	const { state } = useContext(Context);

	const handleRating = async (rating: string) => {
		const rate = await API.rateMovie(state.sessionId, movie.id, rating);
		console.log(rate);
	};

	return (
		<Wrapper backdrop={movie.backdrop_path}>
			<Content>
				<Thumb
					image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
					key={movie.id}
				/>
				<Text>
					<h1>{movie.title}</h1>
					<h3>PLOT</h3>
					<p>{movie.overview}</p>

					<div className='rating-directors'>
						<div>
							<h3>RATING</h3>
							<div className='score'>{movie.vote_average}</div>
						</div>
						<div className='director'>
							<h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
							{movie.directors.map((director) => (
								<p key={director.credit_id}> {director.name}</p>
							))}
						</div>
					</div>
					{state.isLoggedIn && (
						<div>
							<p>Rate Movie</p>
							<Rate callback={(rating) => handleRating(rating)} />
						</div>
					)}
				</Text>
			</Content>
		</Wrapper>
	);
};

export default MovieInfo;
