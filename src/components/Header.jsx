import {useEffect } from "react";
import bruno from "../assets/result_IMG_01962.JPEG";
import "aos/dist/aos.css";
import { FaGift, FaMusic, FaRegSmile } from "react-icons/fa";
import AOS from "aos";
import ReproductorAudio from "./ReproductorAudio";

const Header = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  

  return (
    <div className="relative w-full h-screen">
      <header
        className="w-full h-screen bg-center relative bg-cover md:bg-contain md:"
        style={{ backgroundImage: `url(${bruno})` }}
      >
        <div className="h-full inset-0 bg-black/20 flex flex-col items-center text-white px-6 z-10">
          <div className="w-full text-center mt-10 mb-6" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4 font-[Poppins]">
              ¡Bruno cumple 1 añito! 🎉
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-[Poppins] text-white/90 leading-relaxed">
              Te invitamos a celebrar con nosotros este día tan especial.
            </p>
          </div>

          <div className="flex space-x-6 mb-10" data-aos="zoom-in">
            <FaGift className=" text-4xl md:text-5xl text-yellow-400 hover:scale-110 hover:text-yellow-500 transition-all duration-300" />
            <FaRegSmile className="text-4xl md:text-5xl text-pink-400 hover:scale-110 hover:text-pink-500 transition-all duration-300" />
            <FaMusic className="text-4xl md:text-5xl text-blue-400 hover:scale-110 hover:text-blue-500 transition-all duration-300" />
          </div>
        </div>
      <div className="absolute bottom-24 w-full flex justify-center">
        <ReproductorAudio src='/carnavalitoPlimPlim.mp3'/>
      </div>
      </header>
      
    </div>
  );
};

export default Header;
