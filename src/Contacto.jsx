import React, { useState } from "react";
import { PieChart } from "@mui/x-charts";

const Contacto = ({setActiveTab}) => {
  const [gender, setGender] = useState("mujeres"); // 'mujeres' o 'hombres'
  const [dataType, setDataType] = useState("incidencia"); // 'incidencia' o 'mortalidad'
  const [selectedTumors, setSelectedTumors] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null); // Para manejar los desplegables

  const enfermedades = {
    cancer: {
      nombre: "Cáncer",
      subcategorias: [
        { id: "Cáncer cérvicouterino", descripcion: "Cáncer en el cuello uterino." },
        { id: "Cáncer de mama", descripcion: "Cáncer en los tejidos de la mama." },
        { id: "Cáncer de ovario", descripcion: "Cáncer en los ovarios." },
        { id: "Cáncer gástrico", descripcion: "Cáncer en el estómago." },
        { id: "Cáncer de próstata", descripcion: "Cáncer en la próstata." },
        { id: "Cáncer de colon", descripcion: "Cáncer en el colon." },
        { id: "Cáncer de pulmón", descripcion: "Cáncer en los pulmones." },
        { id: "Cáncer renal", descripcion: "Cáncer en los riñones." },
        { id: "Cáncer vesical", descripcion: "Cáncer en la vejiga." },
        { id: "Cáncer de testículo", descripcion: "Cáncer en los testículos." },
        { id: "Cáncer colorectal", descripcion: "Cáncer en el colon y recto." },
        { id: "Cáncer de tiroides", descripcion: "Cáncer en la glándula tiroides." }
      ]
    },
    enfermedadesRespiratorias: {
      nombre: "Enfermedades Respiratorias",
      subcategorias: [
        { id: "Infección respiratoria aguda", descripcion: "Infección respiratoria en niños menores de 5 años." },
        { id: "Neumonía adquirida en la comunidad", descripcion: "Neumonía en personas mayores de 65 años." },
        { id: "Asma bronquial", descripcion: "Enfermedad pulmonar crónica en menores de 15 años." },
        { id: "Enfermedad pulmonar obstructiva crónica", descripcion: "Trastorno pulmonar crónico." }
      ]
    },
    enfermedadesCardiacas: {
      nombre: "Enfermedades Cardíacas",
      subcategorias: [
        { id: "Cardiopatías congénitas operables", descripcion: "Trastornos cardíacos en menores de 15 años." },
        { id: "Infarto agudo del miocardio", descripcion: "Ataque cardíaco." },
        { id: "Hipertensión arterial primaria", descripcion: "Alta presión sanguínea en personas mayores de 15 años." },
        { id: "Trastornos del impulso cardíaco", descripcion: "Problemas con la conducción del impulso cardíaco." }
      ]
    },
    otras: {
      nombre: "Otras",
      subcategorias: [
        { id: "Esquizofrenia", descripcion: "Trastorno mental caracterizado por alucinaciones y delirios." },
        { id: "Disrafías espinales", descripcion: "Defectos del tubo neural que afectan la columna." },
        { id: "Displasia luxante de caderas", descripcion: "Trastorno en el que la cadera no se desarrolla correctamente." },
        { id: "Lupus eritematoso sistémico", descripcion: "Enfermedad autoinmune que afecta varios órganos." }
      ]
    }
  };

  const tumorData = {
    mujeres: {
      incidencia: [
        { id: "Mama", value: 46.2 },
        { id: "Piel no melanoma", value: 22.8 },
        { id: "Vesícula biliar y vías biliares", value: 18.7 },
        { id: "Cuello uterino", value: 15.6 },
        { id: "Estómago", value: 14.3 },
        { id: "Colon", value: 10.7 },
        { id: "Tráquea", value: 9.9 },
        { id: "Ovario", value: 6.7 },
        { id: "Linfoma no Hodgkin", value: 6.4 },
        { id: "Tiroides", value: 5.9 }
      ],
      mortalidad: [
        { id: "Mama", value: 16.6 },
        { id: "Tráquea, bronquios y pulmón", value: 13.8 },
        { id: "Vesícula biliar y vías biliares", value: 12.5 },
        { id: "Estómago", value: 12.3 },
        { id: "Colon", value: 11.0 },
        { id: "Páncreas", value: 7.8 },
        { id: "Cérvico Uterino", value: 6.8 },
        { id: "Hígado", value: 6.4 },
        { id: "Ovario", value: 4.8 },
        { id: "Leucemia", value: 4.2 }
      ]
    },
    hombres: {
      incidencia: [
        { id: "Próstata", value: 50.9 },
        { id: "Estómago", value: 29.7 },
        { id: "Piel no melanoma", value: 19.6 },
        { id: "Tráquea, bronquios y pulmón", value: 17.1 },
        { id: "Colon", value: 9.3 },
        { id: "Testículo", value: 8.0 },
        { id: "Vesícula biliar", value: 7.5 },
        { id: "Esófago", value: 6.9 },
        { id: "Riñones", value: 6.8 },
        { id: "Leucemia", value: 6.1 }
      ],
      mortalidad: [
        { id: "Estómago", value: 25.5 },
        { id: "Próstata", value: 23.5 },
        { id: "Tráquea, bronquios y pulmón", value: 20.7 },
        { id: "Colon", value: 9.7 },
        { id: "Hígado", value: 7.7 },
        { id: "Páncreas", value: 7.2 },
        { id: "Vesícula biliar", value: 5.9 },
        { id: "Riñones", value: 5.7 },
        { id: "Esófago", value: 4.3 },
        { id: "Vejiga", value: 4.2 }
      ]
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDataTypeChange = (e) => {
    setDataType(e.target.value);
  };

  const toggleCategoryExpansion = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Filtrar los datos según las selecciones
  const filteredData = tumorData[gender][dataType].filter((tumor) =>
    selectedTumors.length === 0 || selectedTumors.includes(tumor.id)
  );

  const [showGastricCancerInfo, setShowGastricCancerInfo] = useState(false);

  const handleTumorSelection = (tumorId) => {
    if (tumorId === "Cáncer gástrico") {
      setShowGastricCancerInfo(true);
    } else {
      setSelectedTumors((prevSelected) =>
        prevSelected.includes(tumorId)
          ? prevSelected.filter((id) => id !== tumorId)
          : [...prevSelected, tumorId]
      );
    }
  };

  return (
    <div className="flex flex-col items-center p-8 w-9/12 self-center">
      <h2 className="text-3xl font-bold mb-6">Enfermedades Principales Cubiertas por el GES</h2>
      <h1 className="text xl w-7/12 text-justify mb-12">El Plan de Acceso Universal de Garantías Explícitas de Chile consiste, según lo establecido por la Ley N.º 19.966 en una reglamentación en la cual cada 3 años se agregan nuevas patologías al sistema sanitario que garantiza el acceso a las acciones de promoción, protección y recuperación de la salud.</h1>
        <div className="flex flex-col mb-4 bg-gray-800 p-4 text-white w-full">
          <label className="mb-2">Categorías de Enfermedades:</label>
          {Object.keys(enfermedades).map((categoryKey) => {
            const category = enfermedades[categoryKey];
            return (
              <div key={categoryKey} className="mb-2">
                <div
                  className={`cursor-pointer font-semibold p-2 rounded transition-colors duration-300 ${
                    expandedCategory === categoryKey ? "bg-gray-500 text-white" : "hover:bg-gray-700"
                  }`}
                  onClick={() => toggleCategoryExpansion(categoryKey)}
                >
                  {category.nombre}
                </div>
                {expandedCategory === categoryKey && (
                  <div className="ml-4 mt-2 bg-gray-700 p-2 rounded">
                    {category.subcategorias.map((sub) => (
                      <div key={sub.id} className="mb-2">
                        <div
                          className="cursor-pointer text-gray-200 font-medium p-1 rounded hover:bg-gray-500 transition-colors duration-300"
                          onClick={() => handleTumorSelection(sub.id)}
                        >
                          {sub.id}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {showGastricCancerInfo && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-4 rounded shadow-md w-1/2">
      <h3 className="text-lg font-bold mb-2">Cáncer Gástrico</h3>
      <p className="text-sm text-gray-700 mb-4">
        El cáncer gástrico afecta el estómago y es una de las principales causas de muerte en varios países.
        Se presenta con síntomas como dolor abdominal, pérdida de peso y dificultad para comer.
      </p>
      <p>Entre los años 2002 y 2017, de acuerdo a cifras del Departamento de Estadísticas e Información en Salud (DEIS) del Ministerio de Salud, el cáncer gástrico provocó 76.574 hospitalizaciones y la muerte de 51.358 personas en Chile,</p>
      <p>La tasa de mortalidad en el país llega a casi 18 por cada cien mil habitantes, siendo así la más alta de América Latina, donde alcanza a 6,6.</p>
      <p className="mb-8"><strong>La tasa de mortalidad en el país llega a casi 18 por cada cien mil habitantes, siendo así la más alta de América Latina, donde alcanza a 6,6.</strong></p>
      <p className="mb-8">Si crees que puedes tener esta enfermedad, revisa los detalles de cómo activar el GES</p>
      <div className="self-end">
      <button
          onClick={() => setActiveTab('about')}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-800 duration-300 text-white rounded self-end mr-4"
        >
          Cómo activar mi GES
        </button>
        <button
          onClick={() => setShowGastricCancerInfo(false)}
          className="px-4 py-2 bg-red-500 hover:bg-red-800 duration-300 text-white rounded self-end"
        >
          Cerrar
        </button>
      </div>
      
    </div>
  </div>
)}
</div>
    
  );
};

export default Contacto;
