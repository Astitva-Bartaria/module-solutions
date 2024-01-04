import React from 'react'

export default function TopSales() {
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
                            <th scope="col">Sales Id:</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sale Amount</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>SI212</td>
                            <td>Laptop</td>
                            <td>2</td>
                            <td>90000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>SI423</td>
                            <td>Mobile</td>
                            <td>5</td>
                            <td>85000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
