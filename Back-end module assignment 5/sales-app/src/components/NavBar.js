import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

export default function NavBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // logic for successful logout
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/home")
    }

    // to check if user is logged in or not
    const user = useSelector(state => state.userReducer.user.Email);

    return (
        <div className='google-font'>
            <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    {user ? <span className="navbar-brand">SALES APP</span> : ''}
                    {!user ? <NavLink className="navbar-brand" to="/">SALES APP</NavLink> : ''}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {user ? <>
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
                                    <a onClick={() => logout()} className="nav-link" href="/">LOGOUT</a>
                                </li>
                            </> : ''}

                            {!user ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                                </li>
                            </> : ''}

                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
