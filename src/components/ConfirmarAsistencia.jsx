import { FaWhatsapp } from "react-icons/fa"; // Iconos de WhatsApp e Instagram
import fondo from '../assets/plim4.jpg'

const ConfirmarAsistencia = () => {
  const numeroWhatsAppMarta = "+5493816348945"; // Número de WhatsApp
  const numeroWhatsAppJhon = "+5493814786813"; // Número de WhatsApp
  const mensaje = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia al cumpleaños de Bruno.");

  const handleConfirmarMarta = () => {
    window.open(`https://wa.me/${numeroWhatsAppMarta}?text=${mensaje}`, "_blank");
  };
  const handleConfirmarJhon = () => {
    window.open(`https://wa.me/${numeroWhatsAppJhon}?text=${mensaje}`, "_blank");
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center bg-gray-900" style={{ backgroundImage: `url(${fondo})` }}>
      {/* Overlay oscuro para la imagen de fondo */}
      <div className="absolute inset-0 bg-black/30"></div> {/* Fondo más oscuro */}

      {/* Contenedor de la tarjeta */}
      <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-gray-800/40 p-8 rounded-lg shadow-xl">
        {/* Título con animación suave */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-2xl mb-4 font-[Poppins]">
          ¡Confirma tu asistencia!
        </h2>

        {/* Descripción */}
        <p className="text-lg sm:text-xl md:text-2xl font-[Poppins] text-white/90 leading-relaxed mb-4">
          Envíanos un mensaje por WhatsApp para confirmar que asistirás al cumpleaños. ¡Te esperamos!
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:flex-wrap">
          {/* Botón de WhatsApp - Marta */}
          <button
            onClick={handleConfirmarMarta}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full sm:text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg font-[Poppins] w-full sm:w-auto"
          >
            <FaWhatsapp className="text-2xl" />
            Confirmar por WhatsApp - Marta
          </button>

          {/* Botón de WhatsApp - Jhon */}
          <button
            onClick={handleConfirmarJhon}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full sm:text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg font-[Poppins] w-full sm:w-auto"
          >
            <FaWhatsapp className="text-2xl" />
            Confirmar por WhatsApp - Jhon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarAsistencia;
