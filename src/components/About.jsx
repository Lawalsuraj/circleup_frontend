import React from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaPaintBrush, 
  FaMobileAlt,
  FaShieldAlt,
  FaRocket,
  FaHeart,
  FaGithub,
  FaGlobe,
  FaUsers,
  FaComment,
  FaImage,
  FaBell
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "User Profiles",
      description: "Create and customize your profile with photos, bio, and personal information",
      color: "bg-blue-500"
    },
    {
      icon: <FaComment className="text-3xl" />,
      title: "Social Feed",
      description: "Share thoughts, images, and engage with posts through likes and comments",
      color: "bg-green-500"
    },
    {
      icon: <FaImage className="text-3xl" />,
      title: "Image Sharing",
      description: "Upload and share multiple images with Cloudinary integration",
      color: "bg-purple-500"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Like System",
      description: "Interactive like system with real-time updates",
      color: "bg-red-500"
    },
    {
      icon: <FaBell className="text-3xl" />,
      title: "Follow System",
      description: "Follow other users and see their posts in your feed",
      color: "bg-yellow-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure Auth",
      description: "JWT authentication with HTTP-only cookies for maximum security",
      color: "bg-indigo-500"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "UI library for building interactive interfaces" },
        { name: "React Router", description: "Client-side routing for SPA navigation" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for styling" },
        { name: "DaisyUI", description: "Component library for Tailwind CSS" },
        { name: "React Icons", description: "Icon library for React applications" },
        { name: "Zustand", description: "State management library" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "JavaScript runtime environment" },
        { name: "Express", description: "Web framework for building REST APIs" },
        { name: "MongoDB", description: "NoSQL database for storing application data" },
        { name: "Mongoose", description: "ODM for MongoDB and Node.js" },
        { name: "JWT", description: "JSON Web Tokens for authentication" },
        { name: "Cloudinary", description: "Cloud-based image and video management" }
      ]
    },
    {
      category: "Architecture",
      items: [
        { name: "REST API", description: "Architectural style for web services" },
        { name: "MVC Pattern", description: "Model-View-Controller design pattern" },
        { name: "JWT Auth", description: "Token-based authentication system" },
        { name: "HTTP Cookies", description: "Secure, HTTP-only cookies for sessions" },
        { name: "Axios", description: "Promise-based HTTP client for API calls" },
        { name: "Multer", description: "Middleware for handling file uploads" }
      ]
    }
  ];

  const projectStats = [
    { label: "Frontend Components", value: "25+", icon: <FaCode /> },
    { label: "API Endpoints", value: "15+", icon: <FaServer /> },
    { label: "Database Collections", value: "5", icon: <FaDatabase /> },
    { label: "Security Features", value: "8", icon: <FaShieldAlt /> }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 to-base-300">
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16">
        <div className="hero-content text-center max-w-4xl">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-6">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-20 h-20">
                  <span className="text-3xl">CU</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-primary">CircleUP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A Modern Full-Stack Social Media Application
            </p>
            <p className="text-lg opacity-80 mb-8">
              CircleUP is a feature-rich social media platform built with modern web technologies. 
              It demonstrates full-stack development skills with a focus on user experience, 
              security, and scalability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/yourusername/circleup" target="_blank" rel="noopener noreferrer" className="btn btn-primary gap-2">
                <FaGithub /> View on GitHub
              </a>
              <Link to="/" className="btn btn-outline gap-2">
                <FaGlobe /> Visit Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Everything you need for a modern social media experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="card-body">
                  <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Built with modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    {index === 0 && <FaPaintBrush className="text-2xl text-blue-500" />}
                    {index === 1 && <FaServer className="text-2xl text-green-500" />}
                    {index === 2 && <FaDatabase className="text-2xl text-purple-500" />}
                    <h3 className="card-title text-2xl">{stack.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {stack.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="badge badge-primary badge-outline mt-1">✓</div>
                        <div>
                          <span className="font-semibold">{item.name}:</span>
                          <span className="text-sm opacity-70 ml-2">{item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Overview</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive full-stack application with attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <div className="text-primary mb-3">{stat.icon}</div>
                  <div className="stat-value text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="stat-desc text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Goals */}
      <div className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6 justify-center">Project Goals & Learning Outcomes</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaRocket className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full-Stack Proficiency</h3>
                    <p>Demonstrated ability to build complete applications from database design to UI implementation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaShieldAlt className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Security Implementation</h3>
                    <p>Implemented secure authentication with JWT, HTTP-only cookies, and password hashing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaMobileAlt className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                    <p>Created mobile-first, responsive interfaces that work seamlessly across all devices</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaDatabase className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                    <p>Designed efficient MongoDB schemas with proper relationships and indexing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the features and functionality of this full-stack social media application
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register" className="btn btn-primary btn-lg gap-2">
              <FaRocket /> Get Started
            </Link>
            <Link to="/" className="btn btn-outline btn-lg gap-2">
              <FaGlobe /> Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="link link-hover">
            <FaGlobe className="text-2xl" />
          </a>
        </div> 
        <div>
          <p className="font-semibold">
            CircleUP - Full Stack Social Media Application
          </p> 
          <p>Built with React, Node.js, Express, MongoDB & Tailwind CSS</p>
          <p className="text-sm opacity-70 mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default About;