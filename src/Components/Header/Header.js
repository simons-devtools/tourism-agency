import React, { useContext } from 'react';
import Background from '../../images/background.png';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photo } = loggedInUser;

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Background})` }} className="header">
            <img className="logo" src={Logo} alt="logo-img" />
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login">Login</Link>
                    </li>
                    <li>
                        <button onClick={() => setLoggedInUser({})}>Log out</button>
                    </li>
                    <li>
                        <img src={photo} alt=""/>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h2>Desh Tourism</h2>
                <h3>online tourism ticket booking in bangladesh</h3>
            </div>
        </div>
    );
};

export default Header;