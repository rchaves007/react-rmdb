import { useEffect, useState } from 'react';
import API from '../API';
import { getPersistedState, setPersistedState } from '../helpers';
import Crew from '../models/Crew';
import Movie from '../models/Movie';

export const useMovieFetch = (movieId: string) => {
	const [movie, setMovie] = useState({} as Movie);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				setLoading(true);
				setError(false);
				const movie: Movie = await API.fetchMovie(movieId);
				const credits = await API.fetchCredits(movieId);
				const directors = credits.crew.filter((member: Crew) => member.job === 'Director');

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
