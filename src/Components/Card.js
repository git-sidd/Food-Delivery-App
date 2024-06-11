import React from 'react'

export default function Card() {
  return (
    <div className='flex flex-col border-[1px] my-2 mx-2 p-1 w-[300px] justify-center gap-1 rounded-md border-black'>
        <div className='max-h-[200px]'>
            <img alt='' src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D' className='h-[200px]'></img>
        </div>
        <div className='text-xl font-bold font-mulish'>
            <h2>Card Title</h2>
        </div>
        <div>
            <p className=''>this is some Imp text</p>
        </div>
        <div className='flex gap-4'>
            <select className='border-2 border-black rounded'>
            {
                Array.from(Array(6),(e,i)=>{
                    return <option value={i+1} key={i+1}>{i+1}</option>
                })
            }
            </select>
            <select className='border-2  hover:bg-blue-600 bg-blue-400 border-black rounded'>
                <option value="Half">Half</option>
                <option value="Full">Full</option>
            </select>
            <div>
               <p> Total Price </p>
            </div>
        </div>
    
    
    </div>
  )
}
