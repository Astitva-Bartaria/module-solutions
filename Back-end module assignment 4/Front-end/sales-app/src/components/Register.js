import React from 'react'

export default function Register() {
    return (
        <div className='google-font'>
            <div>
                <h2 className='text-center h2 mt-4'>REGISTRATION FORM</h2>
            </div>
            <div className='container mt-4 p-3 shadow-sm'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
