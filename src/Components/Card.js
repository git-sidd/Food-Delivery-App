import React from 'react'

export default function Card(props) {
    let options=props.options
    let priceOptions=Object.keys(options)
  return (
    <div className='bg-gray-700 bg-opacity-10 flex flex-col border-[1px] my-2 mx-2 p-1 w-[300px] justify-center gap-1 hover:scale-105 hover:shadow-3xl rounded-md '>
        <div className='max-h-[200px]'>
            <img alt='' src={props.img} className='h-[200px]' style={{objectFit:"contain"}}></img>
        </div>
        <div className='text-xl font-bold font-mulish'>
            <h2>{props.name}</h2>
        </div>
        <div>
            <p className=''>{props.description}</p>
        </div>
        <div className='flex gap-4'>
            <select className='shadow-xl  hover:bg-red-500 bg-red-600 rounded'>
            {
                Array.from(Array(6),(e,i)=>{
                    return <option value={i+1} key={i+1}>{i+1}</option>
                })
            }
            </select>
            <select className='shadow-xl  hover:bg-red-500 bg-red-600 rounded'>
                {
                    priceOptions.map((data)=>{
                        return(
                            <option key={data} value={data}>{data}</option>
                        )
                    })
                }
                
            </select>
            <div>
               <p>{}</p>
            </div>
        </div>
    
    
    </div>
  )
}
