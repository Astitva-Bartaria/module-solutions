import React from 'react'

export default function Login() {
    return (
        <div className='google-font'>
            <div>
                <h2 className='text-center h2 mt-4'>LOGIN FORM</h2>
            </div>
            <div className='container mt-4 p-3 shadow-sm'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword" />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
