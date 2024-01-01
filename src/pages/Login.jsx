import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="min-w-lg w-[500px] border border-lightWhite rounded p-5">
        <form className="space-y-6">
          <div>
            {/* header */}
            <h1 className="text-2xl font-bold uppercase">Welcome Back 👋</h1>
            <h3 className="font-light">Please fill your information</h3>
          </div>
          {/* content input */}
          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="customInput"
            />
          </div>
          {/* Password */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              className="customInput"
            />
          </div>
          <div className="flex flex-col gap-y-5 md:gap-0 md:flex-row justify-between items-center">
            {/* submit btn */}
            <button className="px-5 py-2 self-start primaryBtn">Login</button>
            {/* to register */}
            <p>
              Don't have an account?{" "}
              <span className="cursor-pointer font-light underline text-darkGray hover:font-semibold">
                Register Now
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
