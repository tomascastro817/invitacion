import ConfirmarAsistencia from "./components/ConfirmarAsistencia";
import FechaLugar from "./components/FechaLugar";
import Header from "./components/Header";
import Galeria from "./components/Galeria";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-[Poppins]">
      {/* Sección 1: Header */}
      <section className="h-screen snap-start">
        <Header />
      </section>

      {/* Sección 2: Temporizador */}
      <section className="h-screen snap-start">
        <FechaLugar />
      </section>

      <section className="h-screen snap-start">
        <Galeria />
      </section>


      <section className="h-screen snap-start">
        <ConfirmarAsistencia />
      </section>

      
    </div>
  );
}

export default App;
