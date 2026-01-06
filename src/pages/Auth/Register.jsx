import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../validations/auth.schema";
import { useAuthStore } from "../../store/AuthStore";

const Register = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const { registerUser,setUser, loading, error } = useAuthStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("profilePic", data.image);
    

    const result = await registerUser(formData);


    if (result.success) {
      setUser(result.user)
      navigate("/home");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
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

        
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        
        <div className="flex flex-col items-center mb-4">
          <label className="cursor-pointer">
            <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-base-200 text-sm">
                  Upload
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-primary font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
