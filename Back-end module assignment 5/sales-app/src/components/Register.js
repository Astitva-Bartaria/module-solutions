import React, { useState } from 'react';
import axios from 'axios';
import sweetAlert from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    //sends request for registration
    const signup = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { FirstName: firstName, LastName: lastName, Email: email, Password: password }
        axios.post('http://localhost:5000/signup', requestData)
            .then(async (result) => {
                if (result.status === 201) {
                    setLoading(false);
                    await sweetAlert.fire({
                        icon: 'success',
                        title: 'User registered successfully'
                    })
                }
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                navigate('/login');
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
                <h2 className='text-center h2 mt-4'>REGISTRATION FORM</h2>
            </div>
            <div className='container mt-4 p-3 shadow-sm'>
                {loading ? <div className='row'>
                    <div className='col-md-12 mt-3 text-center'>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div> : ''}
                <form onSubmit={(e) => signup(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                        <input type="text" onChange={(ev) => setFirstName(ev.target.value)} value={firstName} className="form-control" id="exampleInputFirstName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                        <input type="text" onChange={(ev) => setLastName(ev.target.value)} value={lastName} className="form-control" id="exampleInputLastName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" onChange={(ev) => setEmail(ev.target.value)} value={email} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={(ev) => setPassword(ev.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
