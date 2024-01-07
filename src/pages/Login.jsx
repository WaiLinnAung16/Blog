import React, { useState } from "react";
import { loginRoute } from "../Global/API/apiRoute";
import loginValidate from "../utils/Validation/loginValidate";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { userStore } from "../Global/API/store";

const Login = () => {
  const addUser = userStore(store=>store.addUser);
  const nav = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState();

  // Save values change in every input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Register Validation
    const { validationErrors, valid } = loginValidate(formData);
    setErrors(validationErrors);

    // If valid send data
    if (valid) {
      await axios
        .post(loginRoute, formData)
        .then((res) => {
          console.log(res?.data);
          addUser(res?.data?.data)
          Cookies.set("token", res?.data?.token);
          nav("/");
        })
        .catch((err) => toast.error(err?.response?.data?.message));
    }
  };
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="min-w-lg w-[500px] border border-lightWhite rounded p-5">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="customInput"
              onChange={handleChangeInput}
            />
            <span className="text-red-500">{errors?.email}</span>
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
            <span className="text-red-500">{errors?.password}</span>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-0 md:flex-row justify-between items-center">
            {/* submit btn */}
            <button className="px-5 py-2 self-start primaryBtn">Login</button>
            {/* to register */}
            <p>
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="cursor-pointer font-light underline text-darkGray hover:font-semibold"
              >
                Register Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
