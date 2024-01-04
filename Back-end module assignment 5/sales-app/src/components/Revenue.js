import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Revenue() {
    const [salesData, setSalesData] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        // Fetch all sales data from the backend
        axios.get('http://localhost:5000/allSales')
            .then((response) => {
                const data = response.data;
                setSalesData(data.sales);
                setTotalRevenue(data.totalRevenue);
            })
            .catch((error) => {
                console.error('Error fetching sales data:', error);
            });
    }, []);

    const handleDeleteSale = (saleId) => {
        // Send a DELETE request to delete the sale by ID
        axios.delete(`http://localhost:5000/deleteSale/${saleId}`)
            .then((response) => {
                console.log(response.data.message);
                setSalesData(salesData.filter((sale) => sale._id !== saleId));
            })
            .catch((error) => {
                console.error('Error deleting sale:', error);
            });
    };

    return (
        <div>
            <div className='google-font'>
                <h2 className='text-center h2 mt-4' id='todaysRevenue'>TODAY'S REVENUE IS {totalRevenue}</h2>
            </div>
            <div className='container mt-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className='salesid'>Sales Id:</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sale Amount</th>
                            <th scope="col">Delete Sale</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {salesData.map((sale, index) => (
                            <tr key={sale._id}>
                                <th scope="row">{index + 1}</th>
                                <td className='salesid'>{sale._id}</td>
                                <td>{sale.ProductName}</td>
                                <td>{sale.Quantity}</td>
                                <td>{sale.Amount}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteSale(sale._id)}>
                                        <i className="far fa-trash-alt px-md-4 px-2"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
