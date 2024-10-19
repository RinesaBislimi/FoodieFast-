import React, { useState } from 'react';
import "../style/header.css";

function AdminHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="admin-header">
            <nav className="navbar navbar-expand-md admin-header-page">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item-admin">
                                <a className="nav-link-admin active" aria-current="page" href="/admin/addMenu">
                                    Shto menu
                                </a>
                            </li>
                            <li className="nav-item-admin">
                                <a className="nav-link-admin">
                                    Shto Oferta
                                </a>
                            </li>
                            <li className="nav-item-admin">
                                <a className="nav-link-admin">
                                    Porosite
                                </a>
                            </li>
                            <li className="nav-item-admin">
                                <a className="nav-link-admin">
                                    Klinetet
                                </a>
                            </li>
                            <li className="nav-item-admin">
                                <a className="nav-link-admin">
                                    Shiko Menu
                                </a>
                            </li>
                            <li className="nav-item-admin">
                                <a className="nav-link-admin">
                                    Shiko Oferta
                                </a>
                            </li>
                            <li className="nav-item-admin">
                                <a className="nav-link-admin">
                                    Dil
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AdminHeader;
