import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBootstrap } from "./components/navbarBS";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
	return (

		<Router>
      <NavbarBootstrap></NavbarBootstrap>
			<Routes>
      <Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
} 



export default App;
