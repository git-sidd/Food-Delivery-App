import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

export default function Home() {
  const [search,setsearch]=useState('')
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/v1/users/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response[0], response[1]);
    setdata(response[1]);
    setcategory(response[0]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex flex-col relative">
      <Navbar />
      {/* carousal start */}

      <div id="carousel  ">
        <div
          id="demo"
          className="carousel slide relative"
          data-bs-ride="carousel object-contain"
        >
          {/* <!-- Indicators/dots --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img
                src="https://imgs.search.brave.com/jQPE9lQEk8_TMYq7UaanM7BMA3hdcirthtcHEpfh7cc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MzQ0OTg2L3Bob3Rv/L2hhbWJ1cmdlci1z/bGlkZXJzLWluLWEt/cm93LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1uOS1nWGIx/Q01vWmdBTXVZYlJQ/My1BN2pVRkJFVU9z/TU5WTzVaWVptc0c4/PQ"
                alt=""
                className="d-block w-100"
                style={{ height: "500px", filter: "brightness(30%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://imgs.search.brave.com/oJF1awD8URQLk21TM_whQtI4L0AgNoqoNA9U13cZr34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NzA5NzAzNy9waG90/by9rdXJrdXJlLW1v/bW9zLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1FTzVuNXZ6/eTV1SVZ2RFBodUpH/ekFRcVp1UEU3TVpp/NXdTS3kzcHFDOC1V/PQ"
                alt=""
                className="d-block w-100"
                style={{ height: "500px", filter: "brightness(30%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://imgs.search.brave.com/xqRGqpppfjRjpcD1MouMdVrmv-lxhr0Foy0q2LbktEA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI1/NDE2ODI3L3Bob3Rv/L3BhbmktcHVyaS1n/b2xnYXBwZS1jaGF0/LWl0ZW0taW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXRPQ21OMjhBWEhJ/ZTNTTUJnc3pXVTZQ/TFVENnc2Q1U2cTh5/TWR3U0FLUHc9"
                alt=""
                className="d-block w-100"
                style={{ height: "500px", filter: "brightness(30%" }}
              />
            </div>
          </div>
          <div
            className="  container-fluid absolute bottom-20 md:w-full mx-auto "
            style={{ zIndex: "10" }}
          >
            <div
              className="d-flex mx-auto  
      md:w-[800px] w-full"
            >
              <input
                className="form-control rounded-lg me-2 bg-slate-300"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{
                  setsearch(e.target.value)
                }}
              />
              
            </div>
          </div>

          {/* <!-- Left and right controls/icons --> */}
          <button
            className="carousel-control-prev text-black"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      {/* carousal end */}
      <div className=" mx-auto my-5">
        {category !== [] ? (
          category.map((category) => {
            return (
              <div>
                <div
                  className="text-xl font-serif font-bold "
                  key={category._id}
                >
                  {category.CategoryName}
                </div>
                <hr></hr>
                {/* Searching  logic in filter && */}
                <div className="grid md:grid-cols-3 gap-x-8 my-3 justify-center mx-auto items-center">
                  {data !== [] ? (
                    data
                      .filter(
                        (data) => (category.CategoryName === data.CategoryName)&&(data.name.toLowerCase().includes(search.toLocaleLowerCase()))
                      )
                      .map((filteritem) => {
                        return (
                          <div key={filteritem._id}>
                            <Card
                              CategoryName={filteritem.CategoryName}
                              name={filteritem.name}
                              img={filteritem.img}
                              description={filteritem.description}
                              options={filteritem.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No Food Items to Show</div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>Category Not found</div>
        )}
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
