import { useState, useEffect } from "react";
import bruno from "../assets/Mi primer añito.png";
import "aos/dist/aos.css";
import { FaGift, FaMusic, FaRegSmile, FaPlay, FaPause } from "react-icons/fa";
import YouTube from "react-youtube";
import AOS from "aos"; // Importar AOS

const Header = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Opciones del reproductor de YouTube
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  // Guardar instancia del reproductor
  const onReady = (event) => {
    setPlayer(event.target);
  };

  // Reproducir / Pausar música
  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Puedes ajustar la duración y otros parámetros
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <header
        className="w-full h-screen bg-center relative"
        style={{ backgroundImage: `url(${bruno})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center text-white px-6 py-12 z-10">
          {/* Título */}
          <div
            className="w-full text-center mt-10 mb-6"
            data-aos="fade-up" // Animación para el título
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4 font-[Poppins]">
              ¡Bruno cumple 1 añito! 🎉
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-[Poppins] text-white/90 leading-relaxed">
              Te invitamos a celebrar con nosotros este día tan especial.
            </p>
          </div>

          {/* Iconos decorativos */}
          <div
            className="flex space-x-6 mb-10"
            data-aos="zoom-in" // Animación de zoom para los iconos
          >
            <FaGift className="text-5xl text-yellow-400 hover:scale-110 hover:text-yellow-500 transition-all duration-300" />
            <FaRegSmile className="text-5xl text-pink-400 hover:scale-110 hover:text-pink-500 transition-all duration-300" />
            <FaMusic className="text-5xl text-blue-400 hover:scale-110 hover:text-blue-500 transition-all duration-300" />
          </div>
        </div>
      </header>

      {/* Botón de música */}
      <div className="absolute bottom-12 w-full flex justify-center">
        <button
          onClick={togglePlay}
          className="bg-yellow-400 text-white py-3 px-8 rounded-full font-semibold text-xl shadow-lg hover:bg-yellow-500 transition-all duration-300 flex items-center gap-3 animate-pulse"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? "Pausar Música" : "Reproducir Música"}
        </button>
      </div>

      {/* Reproductor de YouTube oculto */}
      <YouTube videoId="Bya-v3tww7o" opts={opts} onReady={onReady} className="hidden" />
    </div>
  );
};

export default Header;
