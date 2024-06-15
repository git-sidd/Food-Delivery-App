import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate=useNavigate()
  const [credentials, setcredentials] = useState({name:"",username:"",email:"",password:"",address:""});
  const submitHandler = async (event) => {
  try {
    event.preventDefault();
    const response =await fetch("http://localhost:5000/api/v1/users/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({name:credentials.name,username:credentials.username,email:credentials.email,password:credentials.password,address:credentials.address}), 
    });
    const json= await response.json();
    console.log(json);
    if(json.success){
      alert("Registered Successfully")
      navigate("/login")

    }
    if(!json.success){
      alert("invalid credentials")
    }
  } catch (error) {
    alert("Enter Valid Credentials",error)
  }
  };
  const onChangeHandler=(event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
   
    <div className="">
      <div className="border-[2px] md:w-[50%] w-[80%] md:object-contain my-5 mx-auto bg-gray-700 bg-opacity-30">
        <form onSubmit={submitHandler} className="flex flex-col mx-10">
          <h1 className="text-2xl font-bold text-black font-serif md:my-4 mb-2 mt-4 text-center ">
            Sign Up Form{" "}
          </h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label font-mono font-bold ">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={onChangeHandler}
              className="form-control  "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label font-mono font-bold  ">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={onChangeHandler}
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label font-mono font-bold "
            >
              Email Id:
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChangeHandler}
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label font-mono font-bold "
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChangeHandler}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="address"
              className="form-label font-mono font-bold "
            >
              Address:
            </label>
            <input 
            type="text"
            name="address"
            value={credentials.address}
            onChange={onChangeHandler}
            className="form-control" />
          </div>

          <div className=" flex  gap-4">
            <button
              className="btn hover:bg-blue-400 bg-blue-600 rounded-lg font-mono font-bold  mb-3"
              type="submit"
             
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className="btn hover:bg-red-400 bg-red-600 rounded-lg font-mono font-bold  mb-3"
              type="submit"
            >
              Already a User
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
