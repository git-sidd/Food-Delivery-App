import React from 'react'
import { Link } from 'react-router-dom'

export default function MyOrders() {
  return (
    <div  className="flex flex-col items-center justify-centerborder-[2px] md:w-[50%] w-[80%] h-[500px] md:object-contain my-5 mx-auto bg-gray-700 bg-opacity-30">
           <h1 className='font-mono font-bold text-xl text-center my-3'> No Orders Yet !!</h1>
           <button className='hover:bg-red-400 bg-red-500 rounded p-1 m-1 '><Link to="/"> Back to Home</Link></button>
    </div>
  )
}
