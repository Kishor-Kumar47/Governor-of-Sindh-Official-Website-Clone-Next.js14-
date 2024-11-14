import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="flex justify-around my-[70px] bg-gray-200 p-[60px] h-[400px]">
      <main className="ml-[-90px]">
        <h2 className="text-[20px] font-bold mb-5 text-gray-800">
          Core Courses
        </h2>
        <p>
          <a href="">Programming Fundamentals</a>
        </p>
        <p>
          <a href="">Web2 Using NextJS</a>
        </p>
        <p>
          <a href="">Earn as You Learn</a>
        </p>
      </main>
      <main>
        <h2 className="text-[20px] font-bold mb-5 text-gray-800">
          Advanced Courses
        </h2>
        <p>
          <a href="">Web 3 and Metaverse</a>
        </p>
        <p>
          <a href="">Cloud-Native Computing</a>
        </p>
        <p>
          <a href="">Artificial Intelligence (Ai) and Deep Learning </a>
        </p>
        <p>
          <a href="">Ambient Computing and IoT</a>
        </p>
        <p>
          <a href="">Genomics and Bioinformatics</a>
        </p>
        <p>
          <a href="">Network Programmability and Automation</a>
        </p>
      </main>
      <main>
        <h2 className="text-[20px] font-bold mb-5 text-gray-800 ml-6">
          Social Links
        </h2>
        <div className="flex m-5">
          <a className="text-[30px] mx-2 text-sky-600" href="">
            <FaFacebook />
          </a>
          <a className="text-[30px] mx-2 text-red-600" href="">
            <FaYoutube />
          </a>
          <a className="text-[30px] mx-2 text-sky-600" href="">
            <AiFillTwitterCircle />
          </a>
          <a className="text-[30px] mx-2 text-pink-600" href="">
            <FaInstagram />
          </a>
          <a className=" text-[30px] mx-2 text-gray-900" href="">
            <FaTiktok />
          </a>
 
        </div>

        <a className="ml-5 text-blue-700" href="">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-blue-700 inline mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
        education@governorsindh.com
      </a>


      </main>
      

      
    </div>
  );
};

export default Footer;
