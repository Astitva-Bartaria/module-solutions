import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='google-font'>
            <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">SALES APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/addsales">ADD SALES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/topsales">TOP 5 SALES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/revenue">TODAY'S TOTAL REVENUE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">LOGOUT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
