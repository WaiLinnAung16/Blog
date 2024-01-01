import React, { useState } from "react";
import axios from "axios";
import { registerRoute } from "../Global/API/apiRoute";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiData = {
      name: formData.name,
      email: formData.email,
      info: {
        password: formData.password,
        con_password: formData.confirmPassword,
      },
    };
    await axios
      .post(registerRoute, apiData)
      .then((res) => console.log(res?.data?.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="min-w-lg w-[500px] border border-lightWhite rounded p-5">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* header */}
            <h1 className="text-2xl font-bold uppercase">Register 📝</h1>
            <h3 className="font-light">Enter your information to register</h3>
          </div>
          {/* content input */}
          {/* Name */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="customInput"
              onChange={handleChangeInput}
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="customInput"
              onChange={handleChangeInput}
            />
          </div>
          {/* Password */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className="customInput"
              onChange={handleChangeInput}
            />
          </div>
          {/* Confirm Password */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="********"
              className="customInput"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-y-5 md:gap-0 md:flex-row justify-between items-center">
            {/* submit btn */}
            <button className="px-5 py-2 self-start primaryBtn">
              Register
            </button>
            {/* to register */}
            <p>
              Already have an account?{" "}
              <span className="cursor-pointer font-light underline text-darkGray hover:font-semibold">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
