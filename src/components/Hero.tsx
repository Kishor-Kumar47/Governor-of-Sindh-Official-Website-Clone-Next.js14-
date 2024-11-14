import Image from "next/image";
import React from "react";
// 
const Hero = () => {
  return (
    <div className="flex justify-between mr-[-150px] relative h-screen h-[711px] bg-cover bg-center bg-no-repeat "
    style={{ backgroundImage: "url('/bg-img.jpg') " }}
    >       
      <div className="text-4xl mt-[90px] m-6">
        <h1 className="text-blue-900  text-6xl font-extrabold ">Governor Sindh</h1>
        <h2 className="text-blue-900">Kamran Khan Tessori</h2>
        <h2 className="text-sky-500  text-5xl font-extrabold mt-5">Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)</h2>
        <p className="mt-5 text-blue-900">Earn up to $5,000 / month</p>
        <p className="mt-5 text-blue-900">Now admissions are open in Hyderabad</p>
        <div className="flex items-center ">
            <button className="text-xl text-gray-200 font-bold mt-5 px-10 py-3 bg-blue-900 rounded"><a href="">Apply Now</a></button>

            <div className="text-blue-900 mt-5">
                <h2 className="ml-[100px] font-bold ">562,143</h2>
                <p className="text-[15px] ml-[90px]">Accepted Applications</p>
            </div>
        </div>
      </div>
      <div className="mt-7 mr-[-150px] ">
      <Image
            src="/profile.png" // Path relative to the public folder
            alt="Description of image"
            width={800} // Specify the width
            height={1} // Specify the height
          />
      </div>
    </div>
  );
};
export default Hero;
