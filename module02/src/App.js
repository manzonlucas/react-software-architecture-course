import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';

const App = () => {
	return (
		// removed BrowserRouter, due to the use of StaticRouter on server.js
		<>
			<h1>Server-Side Rendering Example</h1>
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
