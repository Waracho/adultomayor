import React, { useState } from "react";

const Example = ({ setActiveTab }) => {
  const [isLargeText, setIsLargeText] = useState(false); // Estado para alternar el tamaño de texto

  const steps = [
    "Consulta Médica Inicial: Recomendar que la persona **consulte a un profesional de la salud** para obtener un diagnóstico preciso y un plan de tratamiento adecuado.",
    "Seguimiento y Control Médico: Explicar la importancia de seguir las indicaciones médicas, asistir a las consultas periódicas y realizar los exámenes que el profesional indique.",
    "Estilo de Vida Saludable: Mencionar cambios en la alimentación, el ejercicio, el descanso y la gestión del estrés que puedan mejorar el bienestar.",
    "Medicación y Tratamientos: Indicar que se debe **cumplir con el tratamiento médico prescrito**.",
    "Apoyo Psicológico o Grupal: Sugerir **apoyo emocional mediante terapia psicológica**.",
    "Educación sobre la Enfermedad: Recomendar la **búsqueda de información fiable sobre la enfermedad** para entender mejor los síntomas, opciones de tratamiento y pronósticos.",
    "Prevención de Complicaciones: Informar sobre **medidas preventivas**.",
    "Mantener Comunicación con el Médico: Aconsejar que se **informe al médico sobre cualquier cambio o efecto secundario** del tratamiento."
  ];

  return (
    <div className="flex flex-col p-8 w-11/12 lg:w-9/12 self-center bg-gray-100 rounded-lg shadow-lg">
      <h2 className={`text-3xl font-bold text-center mb-6 ${isLargeText ? "text-4xl" : ""}`}>
        Pasos para tu Consulta Médica
      </h2>

      <button
        onClick={() => setIsLargeText(!isLargeText)} // Alterna el tamaño de texto
        className="self-end mb-4 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 duration-200"
      >
        {isLargeText ? "Versión Estándar" : "Versión para Adulto Mayor"}
      </button>

      <ul className={`space-y-6 ${isLargeText ? "text-xl" : "text-lg"}`}>
        {steps.map((step, index) => (
          <li key={index} className="leading-relaxed">
            <strong>Paso {index + 1}:</strong>{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: isLargeText ? step.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") : step
              }}
            />
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <button
          onClick={() => setActiveTab("team")}
          className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600 duration-300 shadow-md"
        >
          Realiza tu Consulta
        </button>
      </div>
    </div>
  );
};

export default Example;
