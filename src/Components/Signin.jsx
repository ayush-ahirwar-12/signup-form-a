import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { UserContext } from "../Context/Contextuser";

const Signin = () => {
  const { toggler, setToggler, user, setUser }=useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const submithandler = (data) => {
    console.log(data);

    const checker = user.find(
      (user) => user.email === data.email && user.password === data.password 
    );
    if (checker) {
      toast.success("user Already exists");
    } else {
      toast.error("user not found!");
    }
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="w-[40%] h-[100%] bg-red-200 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-bottom object-cover"
          src="https://imgs.search.brave.com/gnX-L9pOGs40eAbuP-kbvsc-JDjLi5t3lRfW5KVeSyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY2FydG9vbi1n/ZWVreS1uZXJkLWtp/ZC1pcy10eXBpbmct/bm90ZWJvb2stZW50/aHVzaWFzdGljYWxs/eV85NjMzLTEyLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
          alt="background"
        />
      </div>

      <form
        onSubmit={handleSubmit(submithandler)}
        id="form"
        className="w-[30%] h-full rounded-md  p-10"
      >
        <h1 className="text-4xl font-bold font-sans mb-20 text-black text-center">
          Welcome Back
        </h1>

        <h1 className="font-semibold mb-1 text-lg">Email</h1>

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          className="block border hover:border-orange-600 outline-0  rounded px-5 font-thin mb-5 p-2 w-[100%] text-black "
          type="email"
        />
        <h1 className="mr-10 font-semibold mb-1 text-lg">Password</h1>

        <div className="w-full rounded border hover:border-orange-600 flex justify-between items-center ">
          <input
            {...register("password", { required: true })}
            type={showPassword ? "text" : "password"}
            placeholder="*****"
            className="text-black  p-2 px-5 rounded-full w-[85%] outline-none "
          />

          <div className="text-xl mr-5" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button
          type="submit"
          className="block mt-10 mb-5 border   text-white bg-black duration-200 mx-auto  px-2 py-1 rounded-md hover:bg-white hover:text-black "
        >
          Sign In
        </button>
        <h1 className="text-black text-lg text-center">
          Doesn't Have An Account?
          <button
            type="button"
            onClick={() => setToggler(!toggler)}
            className="ml-2 font-semibold text-blue-600"
          >
            Sign Up
          </button>
        </h1>
      </form>
      {/* <img className="w-50 h-50 object-cover" src={process.env.PUBLIC_URL + '/guyy.webp'}
 alt="" /> */}
    </>
  );
};

export default Signin;
