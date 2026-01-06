import { FaUsers, FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/Hero.jpg"

const Hero = () => {
  return (
    <section className="bg-base-200 py-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 gap-10">
        
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold flex justify-center lg:justify-start items-center gap-2">
            <FaUsers className="text-primary" />
            <span>Welcome to CircleUp</span>
          </h1>

          <p className="py-6 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Connect with amazing people, share your thoughts, and grow your network — all in one social space built for everyone.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-primary flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            
            src={HeroImage}
            alt="CircleUp Hero"
            className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
