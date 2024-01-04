import React, { useState } from 'react';
import axios from 'axios';
import sweetAlert from 'sweetalert2';

export default function AddSales() {

    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [amount, setAmount] = useState("");

    const [loading, setLoading] = useState(false);

    // CONFIG_OBJ is used to authorize the user
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    // sends a add sale request
    const addSales = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { ProductName: productName, Quantity: quantity, Amount: amount }
        axios.post('http://localhost:5000/addSales', requestData, CONFIG_OBJ)
            .then(async (result) => {
                if (result.status === 201) {
                    setLoading(false);
                    await sweetAlert.fire({
                        icon: 'success',
                        title: 'Sale added successfully!'
                    })
                }
                setProductName("");
                setQuantity("");
                setAmount("");
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
                <h2 className='text-center h2 mt-4'>ADD SALES ENTRY</h2>
            </div>
            <div className='container mt-4 p-3 shadow-sm'>
                {loading ? <div className='row'>
                    <div className='col-md-12 mt-3 text-center'>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div> : ''}
                <form onSubmit={(e) => addSales(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProductName" className="form-label">Product Name</label>
                        <input type="text" onChange={(ev) => setProductName(ev.target.value)} value={productName} className="form-control" id="exampleInputProductName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputQuantity" className="form-label">Quantity</label>
                        <input type="number" onChange={(ev) => setQuantity(ev.target.value)} value={quantity} className="form-control" id="exampleInputQuantity" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAmount" className="form-label">Amount</label>
                        <input type="number" onChange={(ev) => setAmount(ev.target.value)} value={amount} className="form-control" id="exampleInputAmount" />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
