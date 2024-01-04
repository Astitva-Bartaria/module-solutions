import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

// component for header
export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link className="navbar-brand col-md-2" to="/" id="headerbrandname">
                                    <img src="https://i.imgur.com/uYow5ly.png" alt="Logo" className="d-inline-block" id="headerlogo" />
                                    Vallée De Lyon
                                </Link>
                                <div className="col-md-2"></div>
                                <button className="navbar-toggler" id="nav-toggle-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon headerpadding"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <form className="d-flex col-md-6 headerpadding" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search for product, category, etc." aria-label="Search" />
                                        <button className="btn btn-warning" id="headerbtn" type="submit">Search</button>
                                    </form>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2 headerpadding">
                                        <Link to="/"><button className="btn btn-warning" id="headerloginbtn">Login</button></Link>
                                    </div>
                                    <div className="col-md-1 headerpadding">
                                        <Link to="/">
                                            <FontAwesomeIcon className="cart" id="headercartlogo" icon={faCartShopping} />
                                            {/* <i className="cart fa fa-shopping-cart" id="headercartlogo"></i> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="row">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: 'black' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: 'black' }}>All Products</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" to="/" style={{ color: 'black' }}>Women</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">All Products</Link></li>
                                    <li><Link className="dropdown-item" to="/">Dresses</Link></li>
                                    <li><Link className="dropdown-item" to="/">Pants</Link></li>
                                    <li><Link className="dropdown-item" to="/">Skirts</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" to="/" style={{ color: 'black' }}>Men</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">All Products</Link></li>
                                    <li><Link className="dropdown-item" to="/">Shirts</Link></li>
                                    <li><Link className="dropdown-item" to="/">Pants</Link></li>
                                    <li><Link className="dropdown-item" to="/">Hoodies</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: 'black' }}>Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: 'black' }}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}