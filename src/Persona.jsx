import bobbyjpg from './assets/Bobby.jpg';
import React from 'react';

export const Persona = ({ link_lk, link_mail, link_IG, fotoPersona, nombre, descripcion }) => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-white to-gray-50 shadow-md rounded p-2 w-[340px] h-[470px] hover:scale-110 transition-transform duration-1000 m-5 mx-3'>
            <div className='flex justify-center p-3'>
                <img
                    src={fotoPersona} // Usa la imagen importada
                    alt="Bobby"
                    className="w-[280px] h-auto rounded-lg shadow-xl"
                />
            </div>
            <div className='flex flex-row justify-center'>
                <p className='font-sans font-medium text-center text-xl h-4 text-sky-400 p-1'>{nombre}</p>
                <a href={`mailto:${link_mail}`} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-500 mt-[9px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className='opacity-60 hover:opacity-100 transition-opacity duration-500'>
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                </a>
            </div>
            <p className='font-sans font-light text-center text-gray-700 py-4 px-8'>&lt;{descripcion}&gt;</p>
            <div className='flex flex-row justify-center'>
                <a href={link_lk} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" className='opacity-60 hover:opacity-100 transition-opacity duration-500'>
                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                        <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                </a>
                {link_IG && (
                    <a href={link_IG} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" className='opacity-60 hover:opacity-100 transition-opacity duration-500'>
                            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#fd5"></stop>
                                <stop offset=".328" stopColor="#ff543f"></stop>
                                <stop offset=".348" stopColor="#fc5245"></stop>
                                <stop offset=".504" stopColor="#e64771"></stop>
                                <stop offset=".643" stopColor="#d53e91"></stop>
                                <stop offset=".761" stopColor="#cc39a4"></stop>
                                <stop offset=".841" stopColor="#c837ab"></stop>
                            </radialGradient>
                            <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                            <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#4168c9"></stop>
                                <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
                            </radialGradient>
                            <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                            <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                            <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}
