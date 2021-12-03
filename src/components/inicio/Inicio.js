 
import FormInicio from "./FormInicio";

const Inicio = () => {
    return (
      <div className="prymary flex h-screen">
        <div className="w-1/2 p-40 space-y-8">
          <h1 className="font-bold text-7xl">
            Test de afrontamiento del estrés
          </h1>
          <p>
            El Cuestionario de Afrontamiento del Estrés (CAE) es una medida de
            autoinforme diseñada para evaluar siete estilos básicos de
            afrontamiento: (1) focalizado en la solución del problema, (2)
            autofocalización negativa, (3) reevaluación positiva, (4) expresión
            emocional abierta, (5) evitación, (6) búsqueda de apoyo social, y
            (7) religión.
          </p>
        </div>
        <div className="w-1/2 px-20 pt-14">
          <FormInicio />
        </div>
      </div>
    );
}

export default Inicio;

