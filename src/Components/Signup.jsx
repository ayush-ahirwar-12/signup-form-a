import { nanoid } from "nanoid/non-secure";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { UserContext } from "../Context/Contextuser";


const Signup = () => {
  const { toggler, setToggler, user, setUser } = useContext(UserContext);
  
  const [showPassword, setShowPassword] = useState(false);
  const { register,reset, handleSubmit ,formState: { errors }} = useForm();
  const checker=user.password;


  const submithandler = (data) => {
    data.id = nanoid();
    setUser([...user, data]);
    toast.success("User registered successfully!");
    reset();
  }
  console.log(user);
  useEffect(() => {
    if (errors.password) {
      toast.error(errors.password.message || "Invalid record");
    }
    
  }, [errors.password]);


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="w-[40%] h-[100%] bg-red-100  rounded-lg overflow-hidden">
        <img
          className="w-[100%] h-[100%] object-bottom object-cover relative "
          src="https://img.freepik.com/premium-photo/3d-render-cartoon-like-man-working-with-laptop_332133-4909.jpg?semt=ais_hybrid&w=740"
        />
      </div>

      <form
        onSubmit={handleSubmit(submithandler)}
        id="form"
        className="w-[30%] h-full rounded-md  p-10"
      >
        <h1 className="text-4xl font-bold font-sans mb-20 text-black text-center">
          Register Now
        </h1>
        <h1 className="mr-10 font-semibold mb-1 text-lg">Name</h1>
        <input
          {...register("name",{required:true})}
          className="block border hover:border-orange-600 outline-0  rounded px-5 font-thin mb-5 p-2 w-[100%] text-black "
          type="text"
          placeholder="Fullname"
        />
        <h1 className="font-semibold mb-1 text-lg">Email</h1>

        <input
          {...register("email",{required:true})}
          placeholder="Email"
          className="block border hover:border-orange-600 outline-0  rounded px-5 font-thin mb-5 p-2 w-[100%] text-black "
          type="email"
        />
        <h1 className="mr-10 font-semibold mb-1 text-lg">Password</h1>

        <div className="w-full rounded border hover:border-orange-600 flex justify-between items-center ">
          <input
            {...register("password",{required:true,pattern: {
    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    message:
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
  },
})}  
            type={showPassword ? "text" : "password"}
            placeholder="*****"
            className="text-black  p-2 px-5 rounded-full w-[85%] outline-none "
          />
                  {/* {errors.password && toast.error(errors.password.message)} */}

          <div className="text-xl mr-5" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button
          type="submit"
          className="block mt-10 mb-5 border   text-white bg-black duration-200 mx-auto  px-2 py-1 rounded-md hover:bg-white hover:text-black "
        >
          Sign Up
        </button>
        <h1 className="text-black text-lg text-center">
          Already have an Account?
          <button
            type="button"
            onClick={() => setToggler(!toggler)}
            className="ml-2 font-semibold text-blue-600"
          >
            SignIn
          </button>
        </h1>
      </form>

    </>
  );
};

export default Signup;
