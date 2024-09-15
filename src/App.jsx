import { useState } from 'react'
//import Inicio from './Inicio';
import Canaria from './canaria';
import Team from './Team';
import Contacto from './Contacto';
import canaria_icon from './assets/canaria_icon.png';
import ShuffleHero from './Inicio';
import Example from './hover_card';
import avisoft from './assets/avisoft.png'

function App() {
  // Estado para gestionar la pestaña activa
  const [activeTab, setActiveTab] = useState('home');

  // Función para renderizar el contenido de cada pestaña
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <ShuffleHero setActiveTab={setActiveTab}/>;
      case 'about':
        return <Example />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contacto />;
      default:
        return null;
    }
  };

  return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-canaria-blue border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={canaria_icon} className="h-8" alt="Canaria Logo" />
                <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CANARIA</span>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="text-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-canaria-blue dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                    Sobre Canaria
                  </button>
                </li>
                <li>
                  <button
                    className={`text-white text-[100%] leading-[100%] px-4 py-2 focus:outline-none ${
                      activeTab === 'team' ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={() => setActiveTab('team')}
                  >
                    Nuestro Equipo
                  </button>
                </li>
                <li>
                  <button
                    className={`text-white text-[100%] leading-[100%] px-4 py-2 focus:outline-none ${
                      activeTab === 'contact' ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={() => setActiveTab('contact')}
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
        {renderContent()}    
        <footer className="h-[20%] flex flex-row items-center justify-between bg-slate-500 text-white py-8 w-full">             
              <div class="mb-4 md:mb-0 flex-grow flex items-center justify-center ">
                <img className='h-40 w-40 rounded-3xl' src={avisoft} />
              </div>  
              <div className='text-center'>
                <div className='inline-block text-left'>
                Contacto<br />
                UTFSM, Campus San Joaquín<br />
                Email: canariaia239@gmail.com<br />
                Phone: +56 9 4511 2160<br /> 
                </div>     
              </div>
              <div class="text-sm flex justify-center items-center flex-col flex-grow gap-3">
                <span>Síguenos</span>
                <div className='flex justify-center items-center flex-row gap-2'>
                  {/*Instagram*/}
                  <a
                    href="https://www.instagram.com/canaria_24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-gray-200"
                    aria-label="Instagram"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> 
                  </a>
                  {/*LinkedIn*/}
                  <a
                    href="https://www.linkedin.com/company/canaria-usm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-gray-200"
                    aria-label="Instagram"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  </svg>
                  </a>
                </div>
              </div>      
        </footer>
      </div>
  );
}

export default App;

/*<div className="flex-grow overflow-y-auto flex flex-col items-center justify-center h-full"> */