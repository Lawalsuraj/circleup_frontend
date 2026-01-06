import { FaUsers, FaCamera, FaComments } from "react-icons/fa";

const FeaturesFlex = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Features of CircleUp</h2>
        
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">  
          <div className="flex-1 card shadow-lg p-6 rounded-xl mb-6 md:mb-0 hover:shadow-2xl transition flex flex-col items-center">
            <FaUsers className="text-primary text-4xl mb-4" />
            <h3 className="font-bold text-xl mb-2">Connect</h3>
            <p>Meet new people and grow your circle effortlessly.</p>
          </div>

        
          <div className="flex-1 card shadow-lg p-6 rounded-xl mb-6 md:mb-0 hover:shadow-2xl transition flex flex-col items-center">
            <FaCamera className="text-primary text-4xl mb-4" />
            <h3 className="font-bold text-xl mb-2">Share</h3>
            <p>Post updates, photos, and ideas with your friends.</p>
          </div>

    
          <div className="flex-1 card shadow-lg p-6 rounded-xl hover:shadow-2xl transition flex flex-col items-center">
            <FaComments className="text-primary text-4xl mb-4" />
            <h3 className="font-bold text-xl mb-2">Engage</h3>
            <p>Comment, like, and interact in real-time with your circle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFlex;
