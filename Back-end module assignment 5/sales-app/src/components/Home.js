import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className='google-font'>
            <div className='container' id='home-page-margin'>
                <img alt='logo' className='rounded mx-auto d-block' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVM3NU2GAanPnQEUVJ8XZbxTqCcQNLsh8Qfg&usqp=CAU' />
            </div>
            <div>
                <h2 className='text-center h2 mt-4'>WELCOME TO THE APPLICATION</h2>
                <p className='text-center mt-2 fw-bold fs-5'><Link to="/login"><i className="fa-solid fa-arrow-up-right-from-square"></i> Login</Link> to continue</p>
            </div>
        </div>
    )
}
