import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';
import Button from './Button/Button';
import Grid from './Grid/Grid';
import HeroImage from './HeroImage/HeroImage';
import SearchBar from './SearchBar/SearchBar';
import Spinner from './Spinner/Spinner';
import Thumb from './Thumb/Thumb';

const Home: React.FC = () => {
	const { movies, loading, error, searchTerm, setSearchTerm, setSearchMore } = useHomeFetch();

	if (error) return <div>Something went wrong ...</div>;

	const hero = movies.results[0];
	return (
		<>
			{!searchTerm && hero && (
				<HeroImage
					title={hero.original_title}
					text={hero.overview}
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${hero.backdrop_path}`}
				/>
			)}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
				{movies.results.map((movie) => (
					<Thumb
						clickable
						image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
						movieId={movie.id}
						key={movie.id}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{movies.page < movies.total_pages && !loading && (
				<Button text='More Results' callback={() => setSearchMore(true)} />
			)}
		</>
	);
};

export default Home;
