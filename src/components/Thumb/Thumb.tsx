import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles';

interface PropsType {
	movieId: number;
	image: string;
	clickable?: boolean;
}

const Thumb = ({ movieId, image, clickable }: PropsType) => {
	return (
		<div>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<Image src={image} alt='movie-thumb' />
				</Link>
			) : (
				<Image src={image} alt='movie-thumb' />
			)}
		</div>
	);
};

export default Thumb;
