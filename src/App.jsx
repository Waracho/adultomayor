import { useState } from 'react'
//import Inicio from './Inicio';
import Team from './Team';
import Contacto from './Contacto';
import ShuffleHero from './Inicio';
import Example from './hover_card';
import GES from './assets/GES.png'

function App() {
  // Estado para gestionar la pestaña activa
  const [activeTab, setActiveTab] = useState('home');

  // Función para renderizar el contenido de cada pestaña
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <ShuffleHero setActiveTab={setActiveTab}/>;
      case 'about':
        return <Example setActiveTab={setActiveTab}/>;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contacto setActiveTab={setActiveTab}/>;
      default:
        return null;
    }
  };

  return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={GES} className="h-8" alt="Canaria Logo" />
                <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Garantías Explícitas en Salud</span>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="text-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    className={`text-white text-[100%] leading-[100%] px-4 py-2 focus:outline-none ${
                      activeTab === 'home' ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={() => setActiveTab('home')}
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    className={`text-white text-[100%] leading-[100%] px-4 py-2 focus:outline-none ${
                      activeTab === 'about' ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={() => setActiveTab('about')}
                  >
                    Cómo activar mi GES
                  </button>
                </li>
                <li>
                  <button
                    className={`text-white text-[100%] leading-[100%] px-4 py-2 focus:outline-none ${
                      activeTab === 'team' ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={() => setActiveTab('team')}
                  >
                    Atenderme
                  </button>
                </li>
                <li>
                  <button
                    className={`text-white text-[100%] leading-[100%] px-4 py-2 focus:outline-none ${
                      activeTab === 'contact' ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={() => setActiveTab('contact')}
                  >
                    ¿Por qué debería usar GES?
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
        {renderContent()}    
        
      </div>
  );
}

export default App;

/*<div className="flex-grow overflow-y-auto flex flex-col items-center justify-center h-full"> */