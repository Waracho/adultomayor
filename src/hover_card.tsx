import canaria_icon from './assets/canaria_icon.png';
import mine_truck from './assets/mine_truck.jpg'
import mine_truck_2 from './assets/mine_truck_2.jpg'
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";


const Example = () => {
  return (
    <div className='flex flex-col'>
      <div className="text-white flex flex-row px-20 gap-20 w-full border-canaria-home rounded-canaria-home border-canaria-white bg-gradient-to-br bg-canaria-yellow py-12">
        <div className='basis-3/4 grid grid-cols-1 gap-2'>
          <h1 className='text-7xl font-semibold' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Contexto</h1>
          <p className="text-2xl font-semibold text-white my-4 md:my-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            El polvo en suspensión es un desafío constante 
            en la actividad minera, afectando la salud de los trabajadores 
            y las comunidades cercanas. Esto hace que las medidas de mitigación 
            sean de gran importancia, pero actualmente, estas no tienen una forma 
            simple de saber si son efectivas o no.</p>
        </div>  
        <TiltCard select_img='1' />
      </div>
        <div className="text-white flex flex-row px-20 gap-20 w-full place-content-end border-canaria-home rounded-canaria-home border-canaria-white bg-gradient-to-br bg-canaria-yellow py-12">
        <div className='basis-1/4'> 
          <TiltCard select_img='2'/>
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <h1 className='text-7xl font-semibold' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Solución</h1>
          <p className="text-2xl font-semibold text-white my-4 md:my-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            CanarIA 
            es un software basado en inteligencia artificial que ayuda a medir 
            la efectividad de medidas de mitigación para el control de polvo en 
            mineras, además de  levantar alertas, enviar notificaciones y generar 
            métricas para futuro uso de los encargados. Esto lo logra a través de la 
            detección de polvo utilizando redes neuronales.</p>
        </div>  
      </div>
      <div className='flex flex-row px-20 gap-20 w-full place-content-end border-canaria-home rounded-canaria-home border-canaria-white bg-gradient-to-br bg-canaria-yellow py-12'>
        <div className='basis-3/4 grid grid-cols-1 gap-2'>
          <h1 className='text-white text-7xl font-semibold' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
            Ve nuestro video <br/>
            Promocional
          </h1>
        </div> 
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={'https://youtube.com/embed/Ywz6RGaL2d0'}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({select_img}) => {
  //const ref = useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br bg-canaria-yellower"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        {/* Mouse pointer component 
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />*/}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {select_img === '1' && <>
          <img className='ml-6 mb-4' src={mine_truck} />
          <img className='ml-6' src={mine_truck_2} />
          </>
          }
          {select_img === '2' && <>
          <img src={canaria_icon} />
          </>
          }
        </p>
      </div>
    </motion.div>
  );
};

export default Example;