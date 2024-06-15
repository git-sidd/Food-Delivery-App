import React, { useState } from 'react'

export default function Card(props) {
    let options=props.options
    let priceOptions=Object.keys(options)
  
    const [Qty,setQty]=useState(1)
    const [selectedprice,setselectedPrice]=useState(options[priceOptions[0]])
    const QtyHandler=(e)=>{
       setQty(e.target.value)
    
    }
    const priceHandler=(event)=>{
        setselectedPrice(options[event.target.value])
    }
    const TotalPrice=Qty*selectedprice;
   
  return (
    <div className='bg-gray-700 bg-opacity-10 flex flex-col border-[1px] my-2 mx-2 p-1 w-[300px] justify-center gap-3  hover:shadow-2xl rounded-md '>
        <div className='max-h-[200px]'>
            <img alt='' src={props.img} className='h-[200px]' style={{objectFit:"contain"}}></img>
        </div>
        <div className='text-xl font-bold font-mulish'>
            <h2>{props.name}</h2>
        </div>
        <div className='flex gap-4'>
            <select className='shadow-xl bg-gray-700 bg-opacity-30 border-white rounded' onChange={QtyHandler}>
            {
                Array.from(Array(6),(e,i)=>{
                    return <option value={i+1} key={i+1}>{i+1}</option>
                })
            }
            </select>
            <select className='shadow-xl bg-gray-700 bg-opacity-30 border-white rounded'onChange={priceHandler}>
                {
                    priceOptions.map((data)=>{
                        return(
                            <option key={data} value={data}>{data}</option>
                        )
                    })
                }
                
            </select>
            <div>
               <p className='font-bold'>{`Total Price: ₹${TotalPrice}/-`}</p>
            </div>
        </div>
        <hr></hr>
    
    
        <div className='flex justify-between'>
          <button className='hover:bg-red-400 bg-red-500 rounded p-1 m-1'>Order Now</button>
          <button className='hover:bg-red-400 bg-red-500 rounded p-1 m-1'>Add to Cart</button>
        </div>
    </div>
  )
}
