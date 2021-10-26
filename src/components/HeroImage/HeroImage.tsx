import { Content, Text, Wrapper } from './HeroImage.styles';

type PropsType = {
	title: string;
	text: string;
	image: string;
};

const HeroImage: React.FC<PropsType> = ({ title, text, image }) => {
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
