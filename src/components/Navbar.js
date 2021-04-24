import React from 'react';
import avatar from '../imgs/ankita.jpg'
import {NavLink} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

function Navbar() {
	return (
		<div className="Navbar">
			<nav className="nav">
				<div className="profile">
					<img src={avatar} alt=""/>	
				</div>
				
				<ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/about#exp" exact activeClassName="active">
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                </ul>

				<footer className="footer">
					<p>
						@2021 Homo Sapien
					</p>
				</footer>
			</nav>
		</div>
	)
}

export default Navbar;
