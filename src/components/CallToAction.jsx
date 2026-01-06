import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-primary text-primary-content py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Ready to join the Circle?
        </h2>
        <p className="mb-8 text-lg">
            Connect with people, share your ideas, and grow your network today.
        </p>
        <button className="btn btn-accent text-white text-lg px-8">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
