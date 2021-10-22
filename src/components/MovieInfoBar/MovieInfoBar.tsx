import { calcTime, convertMoney } from '../../helpers';
import { Content, Wrapper } from './MovieInfoBar.styles';

interface PropsTypes {
	time: number;
	budget: number;
	revenue: number;
}

const MovieInfoBar = ({ time, budget, revenue }: PropsTypes) => {
	return (
		<Wrapper>
			<Content>
				<div className='column'>
					<p>Running Time: {calcTime(time)}</p>
				</div>
				<div className='column'>
					<p>Budget: {convertMoney(budget)}</p>
				</div>
				<div className='column'>
					<p>Revenue: {convertMoney(revenue)}</p>
				</div>
			</Content>
		</Wrapper>
	);
};

export default MovieInfoBar;
