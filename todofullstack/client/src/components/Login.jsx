import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:8989/api/v1/users/login",input)
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("username",res.data.username)
      navigate('/todo');
    } catch (error) {
      alert(error.response.data.message);
      
    }
    
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-sm p-8 rounded-xl shadow-purple-500/40 shadow-xl">
        <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">Login to Taskflow</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-purple-500/40 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-purple-500/40 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded text-white font-medium transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Don't have an account?
          <Link to="/signup" className="text-purple-400 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
