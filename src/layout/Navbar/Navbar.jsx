import React from 'react';
import PropTypes from 'prop-types';
import {
	Link
} from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	);
};


Navbar.propTypes = {

};


export default Navbar;
