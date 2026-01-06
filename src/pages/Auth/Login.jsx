import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../../validations/auth.schema";
import { useAuthStore } from "../../store/AuthStore";


const Login = () => {
 
  const navigate = useNavigate();

  const {login, error,loading, isLoggedIn} = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {

    const result = await login(data);
    console.log(result,isLoggedIn)

   if(result.success) navigate("/home");


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
            <FaUsers />
          </div>
          <h1 className="text-3xl font-bold mt-2">CircleUp</h1>
        </div>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}

          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-primary font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    
  );
};

export default Login;
