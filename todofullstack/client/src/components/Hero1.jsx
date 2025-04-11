import React from "react";
import { Link } from "react-router-dom";
const Hero1 = () => {
  return (
    <div>
      <section className=" lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
              Manage your tasks effortlessly with
              <strong className="text-purple-500"> Taskflow</strong>
            </h1>

            <p className="text-base text-gray-300 sm:text-lg/relaxed">
              Boost productivity, stay organized, and never miss a deadline
              again with our sleek and simple Todo manager.
            </p>

            <div className="flex justify-center gap-6 pt-4">
              <Link
                to="/signup"
                className="inline-block rounded border border-purple-600 bg-purple-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-purple-700"
              >
                Get Started
              </Link>

              <Link
                to="/"
                className="inline-block rounded border border-gray-600 px-6 py-3 font-medium text-gray-300 shadow-sm transition hover:bg-gray-700 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
