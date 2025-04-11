import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
const Footer = () => {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(168, 85, 247, 0.15)"
    >
      <footer
        className="text-gray-400 py-12 px-4 lg:px-16 
     border-purple-500"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          {/* Logo + About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Taskflow</h3>
            <p className="text-sm">
              Your ultimate task manager built for clarity, speed, and style.
              Designed with productivity and elegance in mind.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-purple-400">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-purple-400">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-purple-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-purple-500">
          © {new Date().getFullYear()} Taskflow. All rights reserved.
        </div>
      </footer>
    </SpotlightCard>
  );
};

export default Footer;
