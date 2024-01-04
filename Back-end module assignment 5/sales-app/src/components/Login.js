import React, { useState } from 'react'
import axios from 'axios'
import sweetAlert from 'sweetalert2'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // sends a login request
    const login =  (event) => {

        event.preventDefault();

        setLoading(true);
        const requestData = { Email: email, Password: password }
        axios.post('http://localhost:5000/login', requestData)
            .then( async (result) => {
                if (result.status === 200) {
                    localStorage.setItem("token", result.data.result.token);
                    localStorage.setItem('user',JSON.stringify(result.data.result.user));
                    dispatch({type: 'LOGIN_SUCCESS', payload: result.data.result.user})
                    setLoading(false);
                    await sweetAlert.fire({
                        icon: 'success',
                        title: 'Login successful!'
                    })
                    navigate('/revenue');
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                sweetAlert.fire({
                    icon: 'error',
                    title: error.response.data.error
                })
            })
    }
    return (
        <div className='google-font'>
            <div>
                <h2 className='text-center h2 mt-4'>LOGIN FORM</h2>
            </div>
            <div className='container mt-4 p-3 shadow-sm'>
                {loading ? <div className='row'>
                    <div className='col-md-12 mt-3 text-center'>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div> : ''}
                <form onSubmit={(e) => login(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" onChange={(ev) => setEmail(ev.target.value)} value={email} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" onChange={(ev) => setPassword(ev.target.value)} value={password} className="form-control" id="exampleInputPassword" />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
