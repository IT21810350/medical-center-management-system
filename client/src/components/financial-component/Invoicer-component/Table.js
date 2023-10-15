import React from 'react'
import '../FMindex.css';

export default function Table({ list, total }) {
  return (
    <>
    <table width="100%" className="mb-10 overflow-auto">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td className="amount">{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ) )}

    </table> 

    <div>
        <h2 className='flex items-end justify-end text-gray-800 text-2xl font-bold'>Rs. {total.toLocaleString()}/=</h2>
    </div>
   

    </>
  )
}
