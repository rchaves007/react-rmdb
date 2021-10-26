import { Link } from 'react-router-dom';
import { Content, Wrapper } from './BreadCrumb.styles';

type PropsType = {
	movieTitle: string;
};
const BreadCrumb: React.FC<PropsType> = ({ movieTitle }) => {
	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<span>Home</span>
				</Link>
				<span>|</span>
				<span>{movieTitle}</span>
			</Content>
		</Wrapper>
	);
};

export default BreadCrumb;
