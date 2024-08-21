import React from "react";

const Hero = () => {
  return (
    <section className="App relative">
      <div className="custom-container">
      <h1 className="text-xl font-bold">basokaradeniz</h1>

        <img src="public\images\pattern-rings.svg" 
        alt="" width={500} height={300} className="bg-transparent absolute left-0 top-32 z-1 overflow-hidden -ml-40 " />

        <img src="public\images\pattern-circle.svg" alt="" width={150} height={150} 
        className="bg-transparent absolute right-0 bottom-2/4 z-1 -mr-20" />

      <div className="flex gap-4">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            width={30}
            src="/images/icon-linkedin.svg"
            alt="LinkedIn"
            className="hover:opacity-80 transition duration-300"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            width={30}
            src="/images/icon-github.svg"
            alt="GitHub"
            className="hover:opacity-80 transition duration-300"
          />
        </a>
      </div>

      <img
        src="/images/cv_img_black_nobg_update.png"
        alt="Profile"
        width={400}
        height={100}
        className="bg-transparent z-10"
      />

      <h1 className="text-3xl md:text-4xl font-bold ">
        Nice to meet you! I’m <b className="border-b-2 border-emerald-400">Basak Karadeniz</b>.
      </h1>

      <p className="text-gray-400 max-w-md">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <button className="text-xl font-mono border-b-2 border-emerald-400 hover:border-emerald-600 transition duration-300">
        CONTACT ME
      </button>
      </div>
      <div className="custom-line"></div>

    </section>
  );
};

export default Hero;
