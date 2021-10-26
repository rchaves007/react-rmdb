import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Content, RMDBLogoImg, TMDBLogoImg, Wrapper } from './Header.styles';

const Header: React.FC = () => {
	const { state } = useContext(Context);

	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<RMDBLogoImg src={RMDBLogo} alt='rmdb-logo' />
				</Link>
				{state.isLoggedIn ? (
					<span>Logged in as: {state.username}</span>
				) : (
					<Link to='/login'>
						<span>Log in</span>
					</Link>
				)}
				<TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
			</Content>
		</Wrapper>
	);
};

export default Header;
