import React from "react";
import { FaPlus } from "react-icons/fa";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";



const Home = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <div className="flex flex-1 max-w-7xl mx-auto mt-6 gap-6 px-4 items-start justify-center">
        
        {/* Main Feed - Center */}
        <div className="flex-3 space-y-6 max-w-lg">
          <PostList/>
        </div>

        {/* Sidebar - Right */}
       
      </div>

      {/* Floating Create Post Button */}
      <button className="fixed bottom-6 right-6 btn btn-primary rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
       <Link to="/create/post">
        <FaPlus />
       </Link>
      </button>
    </div>
  );
};

export default Home;
