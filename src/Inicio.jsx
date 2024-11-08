import React from "react";
import adultomayor from './assets/ilus_adulto_mayor.png';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir a otra página
import { useEffect, useRef, useState } from "react";

const ShuffleHero = ({setActiveTab}) => {
  return (
    <section className="w-full px-8 py-32 flex items-center gap-8 max-w-6xl mx-auto self-center">
      <div className="">
        <TECarousel showControls showIndicators ride="carousel">
          <TECarouselItem
            itemID={1}
            className="relative float-left w-full"
          >
            <img src={adultomayor} className="block w-full" alt="Adulto Mayor" />
            <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white bg-black bg-opacity-75 md:block">
              <h5 className="text-xl">Cobertura del GES</h5>
              <p>Investiga más para saber sobre qué enfermedades cubre el GES.</p>
            </div>
          </TECarouselItem>
        </TECarousel>
      </div>
      <div className="">
        <button onClick={() => setActiveTab('about')} className="p-4 rounded-lg text-white bg-blue-800 hover:bg-blue-500 duration-300">Haz click aquí</button>
      </div>

    </section>
  );
};

export default ShuffleHero;
