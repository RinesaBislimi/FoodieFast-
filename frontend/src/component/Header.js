import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "../style/home.css";
import userIcon from "../assets/user.png";
import userLogin from "../assets/userblack.png";
import { AuthContext } from './AuthContext';

function Header() {
    const { isLoggedIn, userName, logout, setUserName } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        // Check if the new route is "Kryefaqja"
        if (location.pathname === '/') { // assuming '/' is the path for "Kryefaqja"
            // Clear the userName if navigating to Kryefaqja
            setUserName('');
        }
    }, [location.pathname, setUserName]);

    return (
        <div>
            <nav className="navbar navbar-expand-md header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        FoodieFast
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Kryefaqja
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/menu">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Oferta
                                </a>
                            </li>
                            <li className="nav-item last">
                                <a className="nav-link" href="/order">
                                    Shporta
                                </a>
                            </li>
                            <li className="nav-item last">
                                {isLoggedIn ? (
                                    <div className="user-dropdown">
                                        <div className="user-button">
                                            <img src={userLogin} alt="user" className="user-icon" />
                                            {userName}
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/profile" className="dropdown-item">Profili</Link></li>
                                            <li><button onClick={handleLogout} className="dropdown-item">Dil</button></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <a href="/login">
                                        <img src={userIcon} alt="login" />
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
