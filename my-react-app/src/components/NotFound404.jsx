import React from "react";
import {NavLink} from "react-router-dom";	

const NotFound404 = () => {
    return (
		<div className="not-found">
			<h3>404</h3>
			<p>Page not found</p>
			<NavLink to="/" className="nav-active homeLink">
                <li>Retourner sur la page d’accueil</li>
            </NavLink>
		</div>
	);
};

export default NotFound404;
