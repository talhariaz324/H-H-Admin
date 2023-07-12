import React, { Fragment, useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/index";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ApiError from "../components/ApiError";
import request from "../utils/request";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(
    "🚀 ~ file: Login.tsx:28 ~ Login ~ isLoading:",
    isLoading
  );
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
        setIsLoading(true);
        try {
          await request
            .post("/auth/login", values)
            .then((res) => {
              console.log(res.data);
              setIsLoading(false);
              // if (!res.data.user.isVerified) {
              //   setApiError("Please first verify your email");
              // }
              // else {
              localStorage.setItem("auth-token", res.data.token);
              // localStorage.setItem("login-user", JSON.stringify(res.data.user))
                navigate("/user");
            })
            .catch((err) => {
              setIsLoading(false);
              setApiError(err.response.data.msg);
            });
        } catch (error) {
          console.error(error);
          throw new Error(
            error.response.data.message || "Login failed. Please try again."
          );
        }
      },
    });

  console.log("errors:", errors);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" flex flex-col items-center justify-center px-4 py-4 mx-auto md:h-screen lg:py-0">
          <div className=" bg-white rounded-2xl shadow-2xl border mt-12 md:mt-0 sm:max-w-md xl:p-0 tabletOnly:w-[60%] mobile:w-full">
            <div className="p-6 pt-6 mx-2 my-4 space-y-6 md:space-y-6 sm:p-8">
              <div className=" font-bold text-center leading-tight tracking-tight md:text-2xl text-black">
                <h1 className="text-4xl">Login</h1>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                {apiError ? <ApiError error={apiError} /> : null}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Email
                  </label>
                  {/* <img src={user} className="h-7 absolute m-2" /> */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                    placeholder="name@company.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email !== undefined && touched.email === true ? (
                    <p className="text-red-500 text-sm ">{errors.email}</p>
                  ) : null}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Password
                  </label>
                  {/* <img src={Pass} className="h-7 absolute m-2" /> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border text-gray-900 sm:text-sm rounded-lg  block w-full p-3 pl-12 dark:placeholder-gray-400"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password !== undefined &&
                  touched.password === true ? (
                    <p className="text-red-500 text-sm ">{errors.password}</p>
                  ) : null}
                </div>

               
                <div className="flex justify-around items-center">
                  <button
                    type="submit"
                    className="border-4 rounded-3xl text-black border-black bg-gradient-to-r from-orange to-yellow px-12 py-2 text-xl font-medium flex justify-center items-center"
                  >
                    Login
                  </button>
                  {/* <Button
                    text="Go Back"
                    onClick={() => {
                      navigate("/home");
                    }}
                  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
