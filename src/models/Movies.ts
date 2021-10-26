import Movie from './Movie';

type Movies = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

export default Movies;
