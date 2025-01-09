import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
//import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Checkbox } from "antd";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

const validationSchema = Yup.object().shape({
  email_id: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address format"
    )
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login({ setForgotPassword }) {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    sessionStorage.setItem(
      "token",
      "eyJhbGciOiJIUcCJ9.eyJpZCI6LsImV4cCIX0.vXRnm8q_Xht9Pa8"
    );
    try {
      navigation("/");
      window.location.reload();
    } catch (error) {
      console.log(error, "test");
    }
  };

  return (
    <div>
      <div className=" flex flex-col items-center justify-center">
        <label className="text-[2.35vw] text-center">
          Merchandise Management System
        </label>
        <Formik
          initialValues={{
            email_id: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values, {
              // setSubmitting,
              // setFieldError,
              // setAuthtoken,
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="gap-y-[2.5vw] mt-[6vw] flex-col w-full flex">
                <label className="text-[1.7vw] text-[#117283] font-bold tracking-wide text-center">
                  LOGIN
                </label>
                <div className="col-span-1 relative w-full">
                  <span className="absolute left-[1vw] bg-white rounded-full p-[0.5vw] top-1/2 transform -translate-y-1/2">
                    <MdEmail size={"1.2vw"} />
                  </span>
                  <Field
                    type="text"
                    name="email_id"
                    placeholder="Email ID "
                    className="bg-[#ecf1ea] pr-[1.5vw]  rounded-full placeholder-blue border-[#117283] text-[1.2vw] h-[3.5vw] w-[26vw] outline-none pl-[4vw]"
                  />
                  <ErrorMessage
                    name="email_id"
                    component="div"
                    className="text-red-500 text-[0.8vw] absolute left-[1vw] bottom-[-1.5vw]"
                  />
                </div>

                <div className="col-span-1 ">
                  <div className="relative flex items-center">
                    <span className="absolute left-[1vw] bg-white rounded-full p-[0.5vw] top-1/2 transform -translate-y-1/2">
                      <IoMdLock size={"1.2vw"} />
                    </span>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="bg-[#ecf1ea] pr-[3vw] rounded-full placeholder-blue border-[#117283]  text-[1.2vw] h-[3.5vw] w-[26vw] outline-none pl-[4vw]"
                    />
                    <div
                      className="absolute right-[1vw] cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEye className="text-[1.5vw] " />
                      ) : (
                        <FaEyeSlash className="text-[1.5vw] " />
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-[0.8vw] absolute left-[1vw] bottom-[-1.5vw]"
                    />
                  </div>
                </div>

                <div className="mt-[0.5vw]">
                  <button
                    type="submit"
                    className="w-[26vw] cursor-pointer flex justify-center py-[0.8vw] border border-transparent rounded-full shadow-sm text-[1.3vw] font-semibold text-white bg-gradient-to-r from-[#A2BE9A] to-[#117283]"
                  >
                    LOGIN
                  </button>
                </div>
                <div className="flex justify-between items-center w-[26vw]">
                  <div>
                    <Checkbox
                      onChange={(e) => {}}
                      className="text-[#989898] text-[1.2vw] "
                    >
                      Remember me
                    </Checkbox>
                  </div>
                  <div>
                    <p
                      className="text-[#989898] text-[1.2vw] cursor-pointer"
                      onClick={() => setForgotPassword(true)}
                    >
                      Forgot Password
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
