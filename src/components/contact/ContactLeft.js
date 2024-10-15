import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jay Patel</h3>
        <p className="text-base text-gray-400 tracking-wide">
          Feel free to contact with me at 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">j4y.patel@uwaterloo.ca</span>
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Find me at
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/JayPrograms" target="_blank">
            <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/jay-patel-02988b217/" target="_blank">
            <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft