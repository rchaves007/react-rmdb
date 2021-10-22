import { useEffect, useState } from 'react';
import API from '../API';
import { getPersistedState, setPersistedState } from '../helpers';
import Member from '../Model/Member';
import Movie from '../Model/Movie';

const initialState: Movie = {
	actors: [],
	adult: false,
	backdrop_path: '',
	belongs_to_collection: null,
	budget: 0,
	directors: [],
	genres: [],
	homepage: '',
	id: 0,
	imdb_id: '',
	original_language: '',
	original_title: '',
	overview: '',
	popularity: 0,
	poster_path: '',
	production_companies: [],
	production_countries: [],
	release_date: '',
	revenue: 0,
	runtime: 0,
	spoken_languages: [],
	status: '',
	tagline: '',
	title: '',
	video: false,
	vote_average: 0,
	vote_count: 0,
};

export const useMovieFetch = (movieId: string | undefined) => {
	const [movie, setMovie] = useState(initialState);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				setLoading(true);
				setError(false);
				const movie: Movie = await API.fetchMovie(movieId);
				const credits = await API.fetchCredits(movieId);
				const directors = credits.crew.filter((member: Member) => member.job === 'Director');

				setMovie({
					...movie,
					actors: credits.cast,
					directors,
				});
			} catch (error) {
				setError(true);
			}
			setLoading(false);
		};

		const sessionState = getPersistedState(movieId);
		if (sessionState) {
			setMovie(sessionState);
			setLoading(false);
			return;
		}
		fetchMovie();
	}, [movieId]);

	useEffect(() => {
		setPersistedState(movieId, movie);
	}, [movieId, movie]);

	return { movie, loading, error };
};
