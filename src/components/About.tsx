import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <div className="text-center">
        <h2 className="text-[35px] items-center text-blue-900 font-bold mt-[70px] ">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h2>
        <p className="mx-5 text-[20px] text-gray-800 text-left mt-5">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>
      <div className="flex h-[300px] justify-between gap-5 m-8  ">
      <Image className="shadow-2xl rounded-xl"
            src="/card-1.jpg" // Path relative to the public folder
            alt="Description of image"
            width={800} // Specify the width
            height={200} // Specify the height
          />
      <Image className="shadow-2xl rounded-xl"
            src="/card-2.jpg" // Path relative to the public folder
            alt="Description of image"
            width={800} // Specify the width
            height={200} // Specify the height
          />
      <Image className="shadow-2xl rounded-xl"
            src="/card-3.jpg" // Path relative to the public folder
            alt="Description of image"
            width={800} // Specify the width
            height={200} // Specify the height
          />
      </div>
    </div>
  );
};

export default About;
