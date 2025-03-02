import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import fondo from '../assets/plim2.jpg'
import foto1 from '../assets/20DF4527-1B46-494C-8D61-4B53CDC677B9.JPEG'
import foto2 from '../assets/IMG_0196.JPEG'
import foto3 from '../assets/IMG_0197.JPEG'
import foto4 from '../assets/e08c8d94-3048-4c68-8b09-455e3b9d0d06.JPEG'
import foto5 from '../assets/f13b3963-1acd-411b-854a-f0955fe31ffc.JPEG'

// Agrega aquí las imágenes que quieres mostrar
const imagenes = [
  foto1, foto2, foto3, foto4, foto5
];

const Galeria = () => {
  const [imagenActual, setImagenActual] = useState(null);

  const abrirImagen = (index) => {
    setImagenActual(index);
  };

  const cerrarImagen = () => {
    setImagenActual(null);
  };

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev > 0 ? prev - 1 : imagenes.length - 1));
  };

  const imagenSiguiente = () => {
    setImagenActual((prev) => (prev < imagenes.length - 1 ? prev + 1 : 0));
  };

  // Clases de tamaño definidas manualmente para cada imagen
  const tamaños = [
    "col-span-1 row-span-1", // Imagen 1
    "col-span-2 row-span-2", // Imagen 2
    "col-span-1 row-span-2", // Imagen 3
    "col-span-2 row-span-1", // Imagen 4
    "col-span-3 row-span-2", // Imagen 5
  ];

  return (
    <div className="relative w-full h-screen bg-cover bg-center text-white flex flex-col items-center justify-center py-12"
    style={{ backgroundImage: `url(${fondo})` }}
    >
    {/* Overlay oscuro para la imagen de fondo */}
    <div className="absolute inset-0 bg-black/20"></div> {/* Fondo más oscuro */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-2xl mb-4 font-[Poppins]">Fotos</h2>

      {/* Grid de imágenes con tamaños específicos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {imagenes.map((imagen, index) => (
          <div 
            key={index} 
            className={`relative group w-full h-60 sm:h-72 lg:h-96 bg-gray-700 overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-110 hover:translate-y-2 hover:shadow-xl ${tamaños[index]}`}
            onClick={() => abrirImagen(index)}
          >
            <img 
              src={imagen}
              alt={`Foto ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Ver Imagen</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de imagen en pantalla completa */}
      {imagenActual !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button onClick={cerrarImagen} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>

          <button onClick={imagenAnterior} className="absolute left-4 text-white text-3xl">
            <FaArrowLeft />
          </button>

          <img src={imagenes[imagenActual]} alt="Foto ampliada" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />

          <button onClick={imagenSiguiente} className="absolute right-4 text-white text-3xl">
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Galeria;
