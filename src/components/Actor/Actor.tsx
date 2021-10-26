import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import Cast from '../../models/Cast';
import { Image, Wrapper } from './Actor.styles';

type PropsType = {
	actor: Cast;
};

const Actor: React.FC<PropsType> = ({ actor }) => {
	return (
		<Wrapper>
			<Image
				src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
				alt='actor-thumb'
			/>
			<h3>{actor.name}</h3>
			<p>{actor.character}</p>
		</Wrapper>
	);
};

export default Actor;
