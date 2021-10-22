import { Content, Text, Wrapper } from './HeroImage.styles';

interface PropsType {
	title: string;
	text: string;
	image: string;
}

const HeroImage = ({ title, text, image }: PropsType) => {
	return (
		<Wrapper image={image}>
			<Content>
				<Text>
					<h1>{title}</h1>
					<p>{text}</p>
				</Text>
			</Content>
		</Wrapper>
	);
};

export default HeroImage;
