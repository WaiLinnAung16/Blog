import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllBlogRoute, getUsersRoute, registerRoute } from "../Global/API/apiRoute";
import registerValidate from "../utils/Validation/registerValidate";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [existedUser, setExistedUser] = useState([]);
  const [errors, setErrors] = useState();

  // fetch all users already existed
  const fetchUsers = async () => {
    await axios
      .get(getAllBlogRoute)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Save values change in every input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit
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

    // Register Validation
    const { validationErrors, valid } = registerValidate(formData);
    setErrors(validationErrors);

    // If valid send data
    if (valid) {
      await axios
        .post(registerRoute, apiData)
        .then((res) => {
          console.log(res);
          res.status === 201 && nav("/login");
          toast.success("Successfully register your account.");
        })
        .catch((err) => toast.error(err?.response?.data?.message));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh]">
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
            <span className="text-red-500">{errors?.name}</span>
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
            <span className="text-red-500">{errors?.confirmPassword}</span>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-0 md:flex-row justify-between items-center">
            {/* submit btn */}
            <button className="px-5 py-2 self-start primaryBtn">
              Register
            </button>
            {/* to register */}
            <p>
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="cursor-pointer font-light underline text-darkGray hover:font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
