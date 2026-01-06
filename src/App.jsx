import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import AuthLayout from "./layouts/Auth.layout"
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProfilePage from "./pages/Profile";

import './App.css'
import { useEffect } from "react";
import { useAuthStore } from "./store/AuthStore";
import Home from "./pages/Home";
import CreatePost from "./components/CreatePost";
import PostDetails from "./pages/PostDetails";
import EditPost from "./pages/EditPost";
import EditProfile from "./pages/EditProfile";
import OthersProfile from "./pages/OthersProfile"
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";

function App() {

 
  const user = useAuthStore((state) => state.user);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
      checkAuth();
  }, []); 

  // useEffect(() => {
  //     console.log("User from Zustand:", user);
  // }, [user]); 


  return (
   <Router>
     <Routes>
      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register/>} />
      </Route>

        {/* landing pages */}
      <Route path="/" element={<MainLayout><LandingPage /> </MainLayout>} />

      {/* Main app pages */}
      <Route element={<MainLayout />}>
     <Route element={<ProtectedRoute/>} >
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={< OthersProfile/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/create/post" element={<CreatePost/>}/>
        <Route path="/edit/post/:id" element={<EditPost/>}/>
        <Route path="/edit/profile" element={<EditProfile/>}/>

        <Route path ="/post/:id" element={<PostDetails/>}/>

      
    
      </Route>

      <Route path="/about" element={<About/>}/>
     </Route>
   </Routes>

    </Router>
  );
}

export default App;
