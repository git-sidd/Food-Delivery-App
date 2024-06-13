import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({email:"",password:""});
  const submitHandler = async (event) => {
  try {
    event.preventDefault();
    const response =await fetch("http://localhost:5000/api/v1/users/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({email:credentials.email,password:credentials.password}), 
    });
    const json= await response.json();
    console.log(json);
    if(json.success){
      alert("Login Successfully")
    }
    if(!json.success){
      alert("User doesn't Exists!")
    }
  } catch (error) {
    alert("Error in Storing Data in DB",error)
  }
  };
  const onChangeHandler=(event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div className=" ">
      <div className="border-[2px] md:w-[50%] w-[80%] md:object-contain my-5 mx-auto bg-gradient-to-r from-purple-500 to-pink-50">
        <form onSubmit={submitHandler} className="flex flex-col mx-10">
          <h1 className="text-2xl font-bold text-black font-serif md:my-4 mb-2 mt-4 text-center ">
             Login Form
          </h1>
         
          

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
              className="form-control bg-gray-300 "
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
              className="form-control bg-gray-300"
              id="exampleInputPassword1"
            />
          </div>
         

          <div className=" flex  gap-5">
            <button
              className="btn hover:bg-blue-400 bg-blue-600 rounded-lg font-mono font-bold  mb-3"
              type="submit"
             
            >
              Login
            </button>
            <Link
              to="/signup"
              className="btn hover:bg-red-400 bg-red-600 rounded-lg font-mono font-bold  mb-3"
              type="submit"
            >
               New user
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
