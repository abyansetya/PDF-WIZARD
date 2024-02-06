import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function registerUser() {
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3).max(10),
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "password must contain uppercase, lowercase, number, and special character"
        ),
    }),
  });

  function handleFrom(event) {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  }

  return (
    <div className="bg-[#e76a6a] font-jakarta w-full h-[100vh] flex  items-center justify-center">
      <div className="innercontainer flex flex-col h-[450px] w-[350px] border-2 border-black mt-5 rounded bg-white">
        <h1 className="text-center p-6 text-[24px] font-bold">Login</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col px-2">
          <label>Username</label>
          <input
            onChange={handleFrom}
            name="username"
            type="text"
            className={`border-black border-2 mt-2 pl-1 py-1 rounded ${
              formik.errors.username ? "border-red-500" : ""
            }`}
          />
          <p className="text-[14px] text-red-600">{formik.errors.username}</p>
          <label className="mt-2">Email</label>
          <input
            onChange={handleFrom}
            name="email"
            type="email"
            className={`border-black border-2 mt-2 pl-1 py-1 rounded ${
              formik.errors.email ? "border-red-500" : ""
            }`}
          />
          <p className="text-[14px] text-red-600">{formik.errors.email}</p>
          <label className="mt-2">Password</label>
          <input
            onChange={handleFrom}
            name="password"
            type="password"
            className={`border-black border-2 mt-2 pl-1 py-1 rounded ${
              formik.errors.password ? "border-red-500" : ""
            }`}
          />
          <p className="text-[14px] text-red-600">{formik.errors.password}</p>
          <button className="mt-4 border-2 h-[40px] mx-[20px] rounded border-none bg-[#e76a6a] text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
