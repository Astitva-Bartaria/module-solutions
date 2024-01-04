import React from "react";
import { Link } from "react-router-dom";

// component for footer
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content row">
                    <div className="footer-section col-sm-3">
                        <h5>Women</h5>
                        <ul>
                            <li><Link to="/">Dresses</Link></li>
                            <li><Link to="/">Pants</Link></li>
                            <li><Link to="/">Skirts</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section col-sm-3">
                        <h5>Men</h5>
                        <ul>
                            <li><Link to="/">Shirts</Link></li>
                            <li><Link to="/">Pants</Link></li>
                            <li><Link to="/">Hoodies</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section col-sm-3">
                        <Link to="/"><h5>Kids</h5></Link>
                    </div>
                    <div className="footer-section col-sm-3">
                        <h5>Links</h5>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="footer-line"/>
                    <div className="footer-content row">
                        <div className="footer-section col">
                            <p>Copyright &copy;Vallée De Lyon 2022-23</p>
                        </div>
                    </div>
            </footer>
        </>
    )
}