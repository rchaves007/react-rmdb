import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import UserProvider from './context';
import GlobalStyle from './GlobalStyle';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:movieId' element={<Movie />} />
					<Route path='/login' element={<Login />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
				<GlobalStyle />
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
