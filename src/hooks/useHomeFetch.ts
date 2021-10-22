import { useEffect, useState } from 'react';
import API from '../API';
import { HOME_SESSION_STATE_NAME } from '../config';
import { getPersistedState, setPersistedState } from '../helpers';

interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface State {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

const initialState: State = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0,
};

export const useHomeFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchMore, setSearchMore] = useState(true);
	const [movies, setMovies] = useState(initialState);

	const fetchMovies = async (searchTerm = '', page = 1) => {
		try {
			setError(false);
			setLoading(true);
			const movies = await API.fetchMovies(searchTerm, page);
			setMovies((prev: any) => ({
				...movies,
				results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (!searchTerm) {
			const sessionState = getPersistedState(HOME_SESSION_STATE_NAME);
			if (sessionState) {
				setMovies(sessionState);
				return;
			}
		}
		setMovies(initialState);
		fetchMovies(searchTerm, 1);
	}, [searchTerm]);

	useEffect(() => {
		if (!searchMore) return;
		fetchMovies(searchTerm, movies.page + 1);
		setSearchMore(false);
	}, [movies.page, searchMore, searchTerm]);

	useEffect(() => {
		if (!searchTerm) setPersistedState(HOME_SESSION_STATE_NAME, movies);
	}, [searchTerm, movies]);

	return { movies, loading, error, searchTerm, setSearchTerm, setSearchMore };
};
