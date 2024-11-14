import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around bg-blue-900 items-center">
        <div className="shadow-white">
          <Image
            src="/logo-1.png" // Path relative to the public folder
            alt="Description of image"
            width={80} // Specify the width
            height={40} // Specify the height
          />
        </div>
        <div className="text-[23px] font-bold text-[#b9d8f3] ">
          <h2>Tuition Free Education Program on Latest Technologies</h2>
        </div>
        <div className="text-white">
          <ul className="flex gap-10">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#apply">Apply</a>
            </li>
            <li>
              <a href="#job">Job</a>
            </li>
            <li>
              <a href="#results">Results</a>
            </li>
            <li>
              <a href="#course">Course</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
