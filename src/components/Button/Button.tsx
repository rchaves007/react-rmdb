import { Wrapper } from './Button.styles';

interface PropsTypes {
	text: string;
	callback: () => void;
}

const Button = ({ text, callback }: PropsTypes) => {
	return (
		<Wrapper type='button' onClick={callback}>
			{text}
		</Wrapper>
	);
};

export default Button;
