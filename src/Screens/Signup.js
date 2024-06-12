import React from "react";

export default function Signup() {
  return (
    <div className=" ">
      <div className="border-[2px] md:w-[50%] w-[80%] md:object-contain my-5 mx-auto bg-gradient-to-r from-purple-500 to-pink-50">
        <form className="flex flex-col mx-10">
          <h1 className="text-2xl font-bold text-black font-serif md:my-4 mb-2 text-center ">Sign Up Form </h1>
          <div className="mb-3">
            <label for="name" className="form-label font-mono">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="username" className="form-label font-mono">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label font-mono">
              Email Id:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label font-mono">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label font-mono">
              Address:
            </label>
            <input type="text" className="form-control" />
          </div>

          <button
            className="btn hover:bg-blue-600 bg-blue-400 rounded-lg font-mono mb-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
