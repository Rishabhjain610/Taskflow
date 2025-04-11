import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (window.scrollY > 0) {
        navbar.classList.add("bg-black", "backdrop-blur-lg");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-black", "backdrop-blur-lg");
        navbar.classList.add("bg-transparent");
      }
    };

    handleScroll(); // Initial state
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="sticky top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 shadow-md shadow-purple-500/40 px-6 py-4 flex items-center justify-between"
    >
      <Link to="/" className="text-white text-2xl font-bold tracking-wide">
        Taskflow
      </Link>

      {token ? (
        <ul className="flex items-center gap-6">
          <li>
            <span className="text-gray-200">Welcome, {username}</span>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                navigate("/");
                window.location.reload(); 
              }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-full hover:bg-red-500 transition duration-300"
            >
              <FaTrash className="text-white" /> 
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 text-white text-sm font-medium border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 text-sm font-medium bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;