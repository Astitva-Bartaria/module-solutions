import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TopSales() {
    const [topSales, setTopSales] = useState([]);

    useEffect(() => {
        // Fetch the top 5 sales entries from the backend
        axios.get('http://localhost:5000/top5sales')
            .then((response) => {
                const data = response.data.topSales;
                setTopSales(data);
            })
            .catch((error) => {
                console.error('Error fetching top sales data:', error);
            });
    }, []);

    return (
        <div className='google-font'>
            <div>
                <h2 className='text-center h2 mt-4'>TOP 5 SALES</h2>
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
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {topSales.map((sale, index) => (
                            <tr key={sale._id}>
                                <th scope="row">{index + 1}</th>
                                <td className='salesid'>{sale._id}</td>
                                <td>{sale.ProductName}</td>
                                <td>{sale.Quantity}</td>
                                <td>{sale.Amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}