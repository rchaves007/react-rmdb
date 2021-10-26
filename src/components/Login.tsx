import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import { Context } from '../context';
import Button from './Button/Button';
import { Wrapper } from './Login.styles';

const Login: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const { setState } = useContext(Context);
	const navigate = useNavigate();

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;

		if (name === 'username') setUsername(value);
		if (name === 'password') setPassword(value);
	};

	const handleSubmit = async () => {
		setError(false);
		try {
			const requestToken = await API.getRequestToken();
			const sessionId = await API.authenticate(requestToken, username, password);

			setState({ sessionId: sessionId.session_id, username, isLoggedIn: true });
			navigate('/');
		} catch (error) {
			setError(true);
		}
	};
	return (
		<Wrapper>
			{error && <div className='error'>There was an error!</div>}
			<label>Username:</label>
			<input type='text' value={username} name='username' onChange={handleInput}></input>
			<input type='password' value={password} name='password' onChange={handleInput}></input>
			<Button text='Login' callback={handleSubmit}></Button>
		</Wrapper>
	);
};

export default Login;
