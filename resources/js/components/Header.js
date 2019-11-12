import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">Todo App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#defaultNavbar" aria-controls="defaultNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="defaultNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-new-item">Add New Item</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
