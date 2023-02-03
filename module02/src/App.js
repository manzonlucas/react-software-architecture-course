import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import styled from 'styled-components';

// styled.h1 indicates the type the given element will have and gives us a pre-styled base, from where we can add more styles inside the template literal
// this only works in the client side for now. For it to work on SSR we have to use ServerStyleSheet on server.js
const BigGreenHeading = styled.h1`
	color: green;
	font-size: 96px;
`

const App = () => {
	return (
		// removed BrowserRouter, due to the use of StaticRouter on server.js
		<>
			<BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/articles">Articles</Link></li>
			</ul>
			<Routes>
				<Route path="/" element={<Home />} ></Route>
				<Route path="/about" element={<About />} ></Route>
				<Route path="/articles" element={<Articles />} ></Route>
			</Routes>
		</>
	);
}

export default App;
