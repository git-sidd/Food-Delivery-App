import React from 'react'

export default function Card(props) {
    let options=props.options
    let priceOptions=Object.keys(options)
  return (
    <div className='flex flex-col border-[1px] my-2 mx-2 p-1 w-[300px] justify-center gap-1 rounded-md border-black'>
        <div className='max-h-[200px]'>
            <img alt='' src={props.img} className='h-[200px]'></img>
        </div>
        <div className='text-xl font-bold font-mulish'>
            <h2>{props.name}</h2>
        </div>
        <div>
            <p className=''>{props.description}</p>
        </div>
        <div className='flex gap-4'>
            <select className='border-2 border-black rounded  hover:bg-blue-600 bg-blue-400'>
            {
                Array.from(Array(6),(e,i)=>{
                    return <option value={i+1} key={i+1}>{i+1}</option>
                })
            }
            </select>
            <select className='border-2  hover:bg-blue-600 bg-blue-400 border-black rounded'>
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
