import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import SearchIcon from '../../images/search-icon.svg';
import { Content, Wrapper } from './SearchBar.styles';

interface PropsTypes {
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ setSearchTerm }: PropsTypes) => {
	const [state, setState] = useState('');
	const initial = useRef(true);

	useEffect(() => {
		if (initial.current) {
			initial.current = false;
			return;
		}

		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500);

		return () => clearTimeout(timer);
	}, [setSearchTerm, state]);

	return (
		<Wrapper>
			<Content>
				<img src={SearchIcon} alt='search.icon' />
				<input type='text' placeholder='Search Movie' onChange={(e) => setState(e.currentTarget.value)} value={state} />
			</Content>
		</Wrapper>
	);
};

export default SearchBar;
