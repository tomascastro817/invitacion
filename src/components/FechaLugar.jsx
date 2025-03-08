import { useState, useEffect } from "react";
import plimplim from '../assets/fondo.webp';
import 'aos/dist/aos.css'; // Importar los estilos de AOS

const FechaLugar = () => {
  // Fecha y hora del cumpleaños (AJUSTAR AQUÍ)
  const eventDate = new Date("2025-03-29T13:00:00").getTime(); // 10 de marzo de 2025 a las 16:00 hs

  const [timeLeft, setTimeLeft] = useState(eventDate - Date.now());

  useEffect(() => {
    // Inicializamos AOS
    const interval = setInterval(() => {
      setTimeLeft(eventDate - Date.now()); // Calcula el tiempo restante
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [eventDate]);

  // Calculamos días, horas, minutos y segundos restantes
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const handleComoLlegar = () => {
    window.open("https://www.google.com.ar/maps/place/Lavalle+3477,+T4000+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8305032,-65.2547854,17z/data=!3m1!4b1!4m6!3m5!1s0x94225c92cd3f2165:0xacf94f8af5da1dd8!8m2!3d-26.8305032!4d-65.2522105!16s%2Fg%2F11kp8qvz1d?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };
  return (
    <div 
      className="relative w-full h-screen flex flex-col items-center justify-center font-[Poppins]  text-white text-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${plimplim})` }}
    >
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center py-8">
        {/* Información de la fecha y hora del evento */}
        <div 
          className="mb-8 bg-black/40 p-6 rounded-lg shadow-lg w-11/12 max-w-lg"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400"> Fecha y hora:</h2>
          <p className="text-2xl md:text-3xl font-bold">
            29 de Marzo de 2025 - 13:00 hs
          </p>
        </div>

        {/* Información del lugar */}
        <div 
          className="mb-8 bg-black/40 p-6 rounded-lg shadow-lg w-11/12 max-w-lg"
          data-aos-delay="200"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">Lugar del evento:</h2>
          <p className="text-2xl md:text-3xl font-bold">
            ¡Nos vemos en Black House, Lavalle 3477, San Miguel de Tucuman!
          </p>
          <button
              onClick={handleComoLlegar}
              className="bg-yellow-400 text-white py-3 px-8 rounded-lg font-bold text-xl mt-4 hover:bg-yellow-500 transition-all duration-300"
            >
              Cómo llegar
            </button>
        </div>

        {/* Temporizador */}
        <div 
          className="bg-black/40 w-11/12 text-white p-8 rounded-2xl shadow-2xl max-w-lg mx-auto"
        >
          <h2 className="text-2xl sm:text-2xl text-yellow-400 font-semibold mb-4">Tiempo restante:</h2>
          <div className="flex justify-center gap-2 md:gap-6 text-center">
            <div className="bg-black/40 rounded-lg p-4 w-20 h-20 flex flex-col justify-center items-center shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold">{days}</p>
              <p className="text-sm sm:text-base font-medium">Días</p>
            </div>
            <div className="bg-black/40 rounded-lg p-4 w-20 h-20 flex flex-col justify-center items-center shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold">{hours}</p>
              <p className="text-sm sm:text-base font-medium">Horas</p>
            </div>
            <div className="bg-black/40 rounded-lg p-4 w-20 h-20 flex flex-col justify-center items-center shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold">{minutes}</p>
              <p className="text-sm sm:text-base font-medium">Minutos</p>
            </div>
            <div className="bg-black/40 rounded-lg p-4 w-20 h-20 flex flex-col justify-center items-center shadow-xl">
              <p className="text-3xl sm:text-4xl font-bold">{seconds}</p>
              <p className="text-sm sm:text-base font-medium">Segundos</p>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default FechaLugar;
