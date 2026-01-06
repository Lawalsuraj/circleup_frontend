import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="card bg-base-100 shadow-md p-6">
            <FaUserCircle className="text-5xl mx-auto text-primary mb-4" />
            <p className="italic">
              “CircleUp helped me connect with like-minded developers. The
              experience is smooth and inspiring!”
            </p>
            <h4 className="mt-4 font-semibold">— Amina J.</h4>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <FaUserCircle className="text-5xl mx-auto text-primary mb-4" />
            <p className="italic">
              “It’s not just social — it’s a real dev community. I’ve met great
              friends here!”
            </p>
            <h4 className="mt-4 font-semibold">— Yusuf K.</h4>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <FaUserCircle className="text-5xl mx-auto text-primary mb-4" />
            <p className="italic">
              “CircleUp makes sharing projects fun and motivating. I love the
              design too!”
            </p>
            <h4 className="mt-4 font-semibold">— Fatima A.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
