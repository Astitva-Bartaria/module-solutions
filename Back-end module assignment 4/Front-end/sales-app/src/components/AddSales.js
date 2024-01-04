import React from 'react'

export default function AddSales() {
    return (
        <div className='google-font'>
            <div>
                <h2 className='text-center h2 mt-4'>ADD SALES ENTRY</h2>
            </div>
            <div className='container mt-4 p-3 shadow-sm'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProductName" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="exampleInputProductName" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputQuantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="exampleInputQuantity" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAmount" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="exampleInputAmount" />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
