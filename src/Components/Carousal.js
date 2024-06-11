import React from 'react'


export default function Carousal() {
  return (
<div id='carousel  '>
<div id="demo" className="carousel slide relative" data-bs-ride="carousel object-contain"  >


{/* <!-- Indicators/dots --> */}
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


{/* <!-- The slideshow/carousel --> */}
<div className="carousel-inner ">
  <div className="carousel-item active ">
    <img src="https://imgs.search.brave.com/jQPE9lQEk8_TMYq7UaanM7BMA3hdcirthtcHEpfh7cc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MzQ0OTg2L3Bob3Rv/L2hhbWJ1cmdlci1z/bGlkZXJzLWluLWEt/cm93LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1uOS1nWGIx/Q01vWmdBTXVZYlJQ/My1BN2pVRkJFVU9z/TU5WTzVaWVptc0c4/PQ" alt="Los Angeles" className="d-block w-100" style={{height:"500px",filter:"brightness(30%"}}/>
  </div>
  <div className="carousel-item">
    <img src="https://imgs.search.brave.com/oJF1awD8URQLk21TM_whQtI4L0AgNoqoNA9U13cZr34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NzA5NzAzNy9waG90/by9rdXJrdXJlLW1v/bW9zLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1FTzVuNXZ6/eTV1SVZ2RFBodUpH/ekFRcVp1UEU3TVpp/NXdTS3kzcHFDOC1V/PQ" alt="Chicago" className="d-block w-100" style={{height:"500px",filter:"brightness(30%"}}/>
  </div>
  <div className="carousel-item">
    <img src="https://imgs.search.brave.com/xqRGqpppfjRjpcD1MouMdVrmv-lxhr0Foy0q2LbktEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI1/NDE2ODI3L3Bob3Rv/L3BhbmktcHVyaS1n/b2xnYXBwZS1jaGF0/LWl0ZW0taW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXRPQ21OMjhBWEhJ/ZTNTTUJnc3pXVTZQ/TFVENnc2Q1U2cTh5/TWR3U0FLUHc9" alt="New York" className="d-block w-100"  style={{height:"500px",filter:"brightness(30%"}}/>
  </div>
  
</div>
<div className="  container-fluid absolute bottom-20  flex justify-center" style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control rounded-lg me-2 bg-slate-300 w-[600px]" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn hover:bg-blue-600 bg-blue-400 rounded-lg" type="submit">Search</button>
    </form>
  </div>


{/* <!-- Left and right controls/icons --> */}
<button className="carousel-control-prev text-black" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>

</div>
</div>
  )
}
