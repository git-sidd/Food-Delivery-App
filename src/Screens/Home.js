import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousal from '../Components/Carousal'

export default function Home() {
  return (
    <div className='flex flex-col relative'>
      <Navbar/>
      <Carousal/>
      <div className='flex'><Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/></div>
      <div className=' '>
          <Footer/>
      </div>
    </div>
  )
}
