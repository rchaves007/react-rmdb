import Cast from './Cast';
import Crew from './Crew';

type Movie = {
	actors: Cast[];
	backdrop_path: string;
	budget: number;
	directors: Crew[];
	id: string;
	imdb_id: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	revenue: number;
	runtime: number;
	title: string;
	vote_average: number;
	vote_count: number;
};

export default Movie;
