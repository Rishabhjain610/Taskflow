import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:8989/api/v1/user/register",input)
      alert(res.data.message)
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
   
    
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-sm p-8 rounded-xl shadow-purple-500/40 shadow-md">
        <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Register for Taskflow
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={input.username}
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
            className="w-full px-4 py-2 rounded bg-transparent border border-purple-500/40 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
            className="w-full px-4 py-2 rounded bg-transparent border border-purple-500/40 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
            className="w-full px-4 py-2 rounded !bg-transparent !appearance-none border border-purple-500/40 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded text-white font-medium transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Already have an account?
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
