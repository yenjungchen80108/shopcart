import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render () {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">EcommercePrac</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/product" className="nav-link">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}