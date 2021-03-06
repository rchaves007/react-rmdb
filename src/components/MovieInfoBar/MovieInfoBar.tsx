import { calcTime, convertMoney } from '../../helpers';
import { Content, Wrapper } from './MovieInfoBar.styles';

type PropsType = {
	time: number;
	budget: number;
	revenue: number;
};

const MovieInfoBar: React.FC<PropsType> = ({ time, budget, revenue }) => {
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
