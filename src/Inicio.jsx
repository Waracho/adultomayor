import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mineBlast from './assets/mine_blast.jpg';
import dust_detection_1 from './assets/dust_detection_1.jpg';
import dust_detection_2 from './assets/dust_detection_2.jpg';
import dust_detection_3 from './assets/dust_detection_3.jpg';
import dust_detection_4 from './assets/dust_detection_4.jpg';
import dust_detection_5 from './assets/dust_detection_5.jpg';
import mine_stats_1 from './assets/mine_stats_1.jpg';
import mine_stats_2 from './assets/mine_stats_2.jpg';
import mine_stats_3 from './assets/mine_stats_3.jpg';
import mine_stats_4 from './assets/mine_stats_4.jpg';
import mine_dust from './assets/mine_dust.jpg';
import mine_dust_2 from './assets/mine_dust_2.jpg';
import mine_dust_3 from './assets/mine_dust_3.jpg';
import mine_dust_4 from './assets/mine_dust_3.jpg';
import mine_truck from './assets/mine_truck.jpg';
import mine_faena from './assets/mine_faena.jpg'

const ShuffleHero = ({setActiveTab}) => {
  return (
    <section className="w-full px-8 py-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Pensar en grande
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Monitoreo en tiempo real
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Agiliza tu detección de polvo con un sofisticado modelo de Inteligencia 
          Artificial
        </p>
        <button onClick={() => {setActiveTab('about')}} className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Saber más
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: mineBlast,
  },
  {
    id: 2,
    src: mine_stats_1,
  },
  {
    id: 3,
    src: dust_detection_1,
  },
  {
    id: 4,
    src: dust_detection_2,
  },
  {
    id: 5,
    src: mine_stats_2,
  },
  {
    id: 6,
    src: mine_dust,
  },
  {
    id: 7,
    src: mine_truck,
  },
  {
    id: 8,
    src: mine_dust_2,
  },
  {
    id: 9,
    src: dust_detection_3,
  },
  {
    id: 10,
    src: dust_detection_4,
  },
  {
    id: 11,
    src: dust_detection_5,
  },
  {
    id: 12,
    src: mine_stats_3,
  },
  {
    id: 13,
    src: mine_stats_4,
  },
  {
    id: 14,
    src: mine_faena,
  },
  {
    id: 15,
    src: mine_dust_3,
  },
  {
    id: 16,
    src: mine_dust_4,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;