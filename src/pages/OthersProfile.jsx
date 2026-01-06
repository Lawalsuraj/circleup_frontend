import React, { useEffect, useState } from "react";
import { FaUser, FaEdit, FaAngleLeft } from "react-icons/fa";
import PostCard from "../components/PostCard";
import API from "../utils/API";
import { useAuthStore } from "../store/AuthStore";
import { Link, useParams, useNavigate } from "react-router-dom";

const OthersProfile = () => {

    const { user :loggedInuser} = useAuthStore();

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  // Fetch user and posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get(`/api/user/posts/${params.id}`);
        const userRes = await API.get(`/api/users/${params.id}`);

        setUser(userRes.data.user);
        setPosts(res.data.userPosts || []);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchPosts();
  }, [params.id]);

  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">

      <div>
          <button 
            onClick={() => navigate(-1)} 
            className="btn flex items-center gap-2" >
            <FaAngleLeft />
            Back
          </button>
        </div>
      <div className="max-w-3xl mx-auto px-4">
        

        <div className="flex items-center  gap-4 mb-4">
          <div className="w-34 h-34 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-2xl overflow-hidden">
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt="avatar"
                className="w-full h-full  object-cover"
              />
            ) : (
              <FaUser />
            )}
          </div>

          <div className="flex-1 ">
            <div className="flex  gap-3 flex-col">
              <h1 className="text-2xl font-bold text-gray-900">
                {user.name || "No Name"}
              </h1>
              <span className="text-sm text-gray-500">
                {user.email || " "}
              </span>
            </div>

            <div className="flex gap-6 mt-3 text-sm text-gray-700">
              <div>
                <strong className="text-gray-900">
                  {Array.isArray(user.followers) ? user.followers.length : 0}
                </strong>
                <span className="ml-1 text-gray-500">Followers</span>
              </div>
              <div>
                <strong className="text-gray-900">
                  {Array.isArray(user.followings) ? user.followings.length : 0}
                </strong>
                <span className="ml-1 text-gray-500">Following</span>
              </div>
            </div>
          </div>

          {/* Edit Button - Note: This might be for current user, not other users */}

          {
            loggedInuser._id === user._id ? 
          <Link to={'/edit/profile'}>
            <button className="ml-auto bg-white border px-3 py-1 rounded-lg shadow-sm text-sm flex items-center gap-2">
              <FaEdit />
              Edit
            </button>
          </Link> :
           " "
          }
        </div>

        <div className="border-b mb-6"></div>

        {/* Posts list */}
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="text-gray-500 text-center">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OthersProfile;