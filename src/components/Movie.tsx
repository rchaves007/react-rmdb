import { useParams } from 'react-router';
import { useMovieFetch } from '../hooks/useMovieFetch';
import Actor from './Actor/Actor';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import Grid from './Grid/Grid';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import { Spinner } from './Spinner/Spinner.styles';

const Movie: React.FC = () => {
	const { movieId } = useParams();
	const { movie, loading, error } = useMovieFetch(movieId!);

	if (loading) return <Spinner />;
	if (error) return <div>Somethign went wrong ...</div>;

	return (
		<>
			<BreadCrumb movieTitle={movie.title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
			<Grid header='Actors'>
				{movie.actors.map((actor) => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</>
	);
};

export default Movie;
