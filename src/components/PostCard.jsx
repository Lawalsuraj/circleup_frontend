import React, { useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";



import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaUserPlus,
  FaUserCheck,
  FaEdit,
  FaTrash
} from "react-icons/fa";

import { useAuthStore } from "../store/AuthStore";
import API from "../utils/API";

const PostCard = ({ post }) => {

  const { user } = useAuthStore();

  const [likes, setLikes] = useState(post.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);

  // console.log(post)

   useEffect(() => {
       const fetchComments = async () => {
         const res = await API.get(`/api/post/comment/${post._id}`);
         setCommentsCount(res.data.data.length);
        //  console.log(res.data.data.length)
       };
   
       fetchComments();
     }, [user]);

     

  // CHECK IF USER HAS LIKED
  useEffect(() => {
    setIsLiked(post.likes?.includes(user?._id));
  }, [post.likes, user?._id]);

  // console.log(post)
  useEffect(() => {
    if (user && post.userId) {
      setIsFollowing(user.followings?.includes(post?.userId?._id));
    }
  }, [user, post.userId]);


  const navigate = useNavigate();
  const goToPost = () =>navigate(`/post/${post?._id}`)

  // HANDLE LIKE
  const handleLike = async () => {
    try {
      const res = await API.post(`/api/posts/${post._id}/like`);
      console.log(likes)
      setLikes(res.data.likes);
      setIsLiked(prev => !prev);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };


  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await API.post(`/api/users/${post.userId?._id}/unfollow`);
      } else {
        await API.post(`/api/users/${post.userId?._id}/follow`);
      }
      setIsFollowing(prev => !prev);
      
    } catch (err) {
      console.log(err.response?.data || err.message);
    }

  };

  const handleDelete = async(id)=>{

    if (!window.confirm("Are you sure you want to delete this post?")) {
    return;
  }



    try {
      await API.delete(`/api/deletePost/${id}`)

       window.dispatchEvent(new Event('refreshPosts'));
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">

    
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.userId?.profilePic || "default.jpg"}
          alt="profile"
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="flex-1">
          <p className="font-semibold cursor-pointer"><Link to={`/profile/${post.userId._id}`}>{post.userId?.name}</Link></p>
          <p className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>

        {/* FOLLOW BUTTON */}
        {user?._id !== post.userId?._id ? (
          <button
            onClick={handleFollow}
            className="text-sm px-3 py-1 btn rounded-md bg-gray-100 hover:bg-gray-200 transition"  >
            {isFollowing ? (
              <span className="flex items-center gap-1 text-green-600">
                <FaUserCheck /> Following
              </span>
            ) : (
              <span className="flex items-center gap-1 text-blue-600">
                <FaUserPlus /> Follow
              </span>
            )}
          </button> 
        ) :  (


        <div className="flex gap-2 relative left-1 bottom-3">
        <Link to={`/edit/post/${post._id}`}>
          <button className="ml-auto bg-white border px-3 py-1 rounded-lg shadow-sm text-lg cursor-pointer ">
                      <FaEdit  className="text-blue-600"/> 
          </button>
        </Link>
        <button 
          onClick={()=>handleDelete(post._id)}
          className="ml-auto bg-white text-red-600 border px-3 py-1 cursor-pointer rounded-lg shadow-sm text-lg  items-center gap-2">
              <FaTrash className="text-red-600"/>
         </button>
        </div>
        
        
        )}
      </div>

      {/* TITLE */}
      {post.title && (
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      )}

      {/* CONTENT */}
      <p className="mb-3">{post.content}</p>

      {/* IMAGE */}
      {post.images?.length > 0 && (
        <img
          src={post.images[0] || "default.jpg" }
          alt="post"
          className="rounded-lg w-full object-cover mb-3 max-h-96"
        />
      )}

      {/* FOOTER BUTTONS */}
      <div className="flex items-center gap-6 mt-2 text-gray-700">

        {/* LIKE */}
        <button
          onClick={handleLike}
          className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
        >
          {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          <span>{likes}</span>
        </button>

        {/* COMMENT */}
        <button onClick={goToPost} className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <FaComment />
        
          <span>{commentsCount}</span>
        </button>

      </div>
    </div>
  );
};

export default PostCard;