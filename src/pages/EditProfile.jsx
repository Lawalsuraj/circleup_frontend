import React, { useState } from 'react'
import { useAuthStore } from '../store/AuthStore';
import API from '../utils/API';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {

  const navigate = useNavigate();
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const updateHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = { name, email };
      const res = await API.put(`/api/users/update/${user._id}`, data);
      navigate('/profile')

      
    } catch (err) {
      console.log(err.response?.data || err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-8">

        <form className="space-y-4" onSubmit={updateHandler}>

          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Updating account..." : "Update"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditProfile;
