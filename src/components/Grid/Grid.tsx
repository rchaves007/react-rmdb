import { ReactNode } from 'react';
import { Content, Wrapper } from './Grid.styles';

type PropsType = {
	header: string;
	children: ReactNode;
};

const Grid: React.FC<PropsType> = ({ header, children }) => {
	return (
		<Wrapper>
			<h1>{header}</h1>
			<Content>{children}</Content>
		</Wrapper>
	);
};

export default Grid;
