import React from 'react'
import { useState, useEffect } from 'react'
import {v4 as uuidv4 } from "uuid"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import '../FMindex.css';


export default function TableForm({description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount, 
    setAmount,
    list,
    setList,
    total,
    setTotal


}) 
{
    const [isEditing, setEditing] = useState(false)


    //submit form
    const handleSubmit = (e) => {
        e.preventDefault()

    if (!description || !quantity || !price) 
    { alert("Please Fill All the Inputs")

    }else{
        const newItems = {
            id: uuidv4(),
            description: description,
            quantity: quantity,
            price: price,
            amount: amount
    
        }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setEditing(false)
    
        }
    }    

   
    //calculate ammount
   useEffect(()=> {
    const calculateAmount = (amount) => {
        setAmount(quantity * price)
    }

    calculateAmount(amount)

   }, [amount, price, quantity, setAmount])

   //calculate total amount
   useEffect (() => {
    let rows = document.querySelectorAll(".amount")
   let sum = 0

   for(let i = 0; i < rows.length; i++){
    if(rows[i].className === "amount"){
        sum += isNaN(rows[i].innerHTML)? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
    }
   }
   })
   


   //Edit function
   const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id )
    setList(list.filter((row) => row.id !== id ))
    setEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
   }


   //Delete function

   const deleteRow = (id) => setList(list.filter((row) => row.id !== id ))

   


  return (
    <>
    <form onSubmit={ handleSubmit }>
    <div className='flex flex-col md:mt-16'>
    <label htmlFor="description">Item description</label>
    <input type="text" name="description" id="description"
    placeholder="Item description" 
    value={description} 
    onChange={(e) => setDescription(e.target.value)} />
    </div>

    <div className='md:grid grid-cols-3 gap-10 '>
    <div className='flex flex-col'>
    <label htmlFor="quantity">Quantity</label>
    <input type="number" name="quantity" id="quantity"
    placeholder="Quantity" 
    value={quantity} 
    onChange={(e) => setQuantity(e.target.value)} />
    </div>

    <div className='flex flex-col'>
    <label htmlFor="price">Price</label>
    <input type="number" name="price" id="price"
    placeholder="Price" 
    value={price} 
    onChange={(e) => setPrice(e.target.value)} />
    </div>

    <div className='flex flex-col'>
    <label htmlFor="amount">Amount</label>
    <p>{amount}</p>
    </div>
    </div>

    <button type='submit' className="mb-5 bg-yellow-500 text-white
       font-bold py-2 px-8 rounded shadow border-2 border-yellow-500 
       hover:bg-transparent hover:text-yellow-500 transition-all duration-300" >
        {isEditing ? "Finish Editing" : "Add Table Item"}
    </button>


    </form>

    {/* table items */}
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
                <td className='amount'>{amount}</td>
                <td><button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className='text-red-500 font-bold text-xl'/></button></td>
                <td><button onClick={() => editRow(id)}><AiOutlineEdit className='text-gree-500 font-bol text-xl' /></button></td>    
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
