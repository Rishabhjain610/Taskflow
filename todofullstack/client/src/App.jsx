import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Register";
import Login from "./components/Login";
import Bg from "./components/Bg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Hero1 from "./components/Hero1";
import Features from "./components/Features";
import Todo from "./components/Todo";
const App = () => {
  return (
    <div className="min-h-auto">
      <Bg />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero1 />
              <Features />
            </div>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
