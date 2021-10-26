import Cast from './Cast';
import Crew from './Crew';

type Credits = {
	id: number;
	cast: Cast[];
	crew: Crew[];
};

export default Credits;
