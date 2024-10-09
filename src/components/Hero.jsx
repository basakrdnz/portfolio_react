import React from "react";

const Hero = () => {
  return (
    <section className="App relative">
      <div className="custom-container px-4 md:px-8 lg:px-16 py-8">
        {/* Desenler */}
        <img
          src="/images/pattern-rings.svg"
          alt=""
          width={500}
          height={300}
          className="bg-transparent absolute left-0 top-32 z-1 overflow-hidden -ml-40"
        />
        <img
          src="/images/pattern-circle.svg"
          alt=""
          width={150}
          height={150}
          className="bg-transparent absolute right-0 bottom-2/4 z-1 -mr-20"
        />
<div className="flex flex-col md:flex-row md:items-center md:justify-between container">
  {/* Başlık */}
  <h1 className="text-xl font-bold mb-4 md:mb-0">basakkaradeniz</h1>

  {/* Sosyal Medya İkonları */}
  <div className="flex gap-4 justify-center md:justify-end my-4">
    <a
      href="https://www.linkedin.com/in/basakkaradeniz/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        width={30}
        src="/images/icon-linkedin.svg"
        alt="LinkedIn"
        className="hover:opacity-80 transition duration-300"
      />
    </a>
    <a
      href="https://github.com/basakrdnz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        width={30}
        src="/images/icon-github.svg"
        alt="GitHub"
        className="hover:opacity-80 transition duration-300"
      />
    </a>
  </div>
</div>

        {/* İçerik ve Görsel */}
        <div className="flex flex-col-reverse md:flex-row-reverse justify-around items-center gap-5">
          {/* Profil Fotoğrafı */}
          <img
            src="/images/cv_img_black_nobg_update.png"
            alt="Profile"
            width={300}
            height={300}
            className="bg-transparent z-10 rounded-full md:w-1/3 lg:w-2/3"
          />

          {/* Metin ve Açıklama */}
          <div className="flex flex-col text-center md:text-left gap-8 md:max-w-xl">
            <h1 className="text-3xl md:text-6xl font-bold">
              Nice to meet you! I’m {" "} 
              <b className="border-b-4 border-emerald-500 my-6 bg-transparent">
                Basak Karadeniz
              </b>
              .
            </h1>

            <p className="text-gray-400 max-w-xl mx-auto md:mx-0 md:text-lg">
              Based in Ankara, I'm a front-end developer passionate about
              building accessible web apps that users love. With my past work
              experience, I have also worked on creating RESTful APIs, building
              databases, connecting them, and improving user experience.
            </p>

            {/* Buton (isteğe bağlı olarak aktifleştirebilirsin) */}
            {/* <button className="text-xl font-mono border-b-2 border-emerald-400 hover:border-emerald-600 transition duration-300">
              CONTACT ME
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
