import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-300 p-12 text-center  shadow-xl shadow-cyan-50/40 w-100 h-150 opacity-70 "
      style={{
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
      }}
    >
      <h1 className="text-md font-bold mb-6">Who Are We?</h1>
      <p className=" text-sm text-gray-700  ">
        At <strong>Urban Visionary</strong>, we believe that the best way to
        predict the future is to design it. Our team of dedicated urban
        planners, architects, and designers works tirelessly to transform cities
        into sustainable, efficient, and aesthetically pleasing environments.
        <br />
        <br />
        From modern transport solutions to green city initiatives, we integrate
        cutting-edge technology with timeless architectural principles. Our goal
        is to build cities that are not just functional but also
        inspiring—places where people can thrive, connect, and dream big. Join
        us in shaping the future of urban living.
      </p>
      <Link
        to="/"
        className="mt-6 text-blue-600 font-semibold hover:opacity-[.67] z-20 "
      >
        Back to Home
      </Link>
    </div>
  );
};

export default About;
