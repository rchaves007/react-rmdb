import { Wrapper } from './Button.styles';

interface PropsType {
	text: string;
	callback: () => void;
}

const Button: React.FC<PropsType> = ({ text, callback }) => {
	return (
		<Wrapper type='button' onClick={callback}>
			{text}
		</Wrapper>
	);
};

export default Button;
