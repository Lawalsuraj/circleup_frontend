import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../utils/API";
import PostCard from "../components/PostCard";
import { useAuthStore } from "../store/AuthStore";
import { FaAngleLeft } from "react-icons/fa";

const PostDetails = () => {
  const { id } = useParams();
  const { user } = useAuthStore();
  const navigate = useNavigate();


  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  // FETCH POST

  useEffect(() => {
    const fetchPost = async () => {
      const res = await API.get(`/api/posts/${id}`);
      setPost(res.data);
    };

    fetchPost();
  }, [id]);

  // FETCH COMMENTS (Separate Collection)

  const fetchComments = async () => {
      const res = await API.get(`/api/post/comment/${id}`);
      setComments(res.data.data);
      // console.log(res.data.data)

    };

  useEffect(() => {
    

    fetchComments();
  }, [id]);

  // ADD COMMENT
  
  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    try {
      setLoading(true);

      const res = await API.post(`api/post/comment/${id}`, {
         content:commentText
      });

      setComments(() => [res.data ]); 
      setCommentText("");
      fetchComments();
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (!post) return <p className="text-center mt-10">Loading post...</p>;

  return (
    <div className="flex justify-center px-3 py-6">

            <div className="flex  absolute left-0">
                <button 
                  onClick={()=> navigate(-1)} 
                  className="btn flex items-center gap-2" >
                  <FaAngleLeft />
                  Back
                </button>
            </div>

      <div className="w-full max-w-2xl">


        {/* POST */}
        <PostCard post={post} />

        {/* COMMENTS BOX */}
        <div className="mt-8 bg-base-200 p-5 rounded-xl shadow-lg">

          <h2 className="text-xl font-bold mb-4">Comments</h2>

          {/* Add Comment Input */}
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              placeholder="Write a comment..."
              className="input input-bordered w-full"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />

            <button
              onClick={handleAddComment}
              className="btn btn-primary shrink-0"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post"}
            </button>
          </div>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((c) => (
                <div
                  key={c._id}
                  className="p-4 bg-base-100 rounded-lg shadow-sm border border-base-300"
                >
                  <div className="flex gap-2">
                      <img   
                      src={c.userId?.profilePic || "default.jpg"}
                      className="h-10 w-10 rounded-full object-cover"
                      alt="profilePic" />
                      <div>
                          <span className="bold capitalize">{c.userId ? c.userId.name : " "}</span>
                          <p className="text-xs text-gray-500 mt-1">
                             {new Date(c.createdAt).toLocaleString()}
                           </p>
                      </div>
                      
                  </div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm mt-1 ml-12">{c.content}</p>

                  
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostDetails;
