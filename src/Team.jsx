import React from 'react';
import bobbyjpg from './assets/Bobby.jpg';
import cralosjpg from './assets/cralos.jpg';
import camijpg from './assets/cami.jpg';
import tebanjpg from './assets/teban.jpg';
import anibaljpg from './assets/anibal.jpg';
import pipejpg from './assets/pipe.jpg';
import { Persona } from './Persona';

const Team = () => {
return (
	<div className="flex flex-col flex-grow w-full px-24">
		<div className=" text-5xl py-5">
			Conoce a nuestro equipo
		</div>
		<div className="flex flex-row">
			<div className="w-full">
				<p className="text-xl text-justify pt-2">
				Con la inspiración de feria de software y 
				en busca de resolver los problemas de mitigación 
				de polvo en minerías y constructoras del país, 
				nuestro equipo de último año de la Universidad 
				Federico Santa María forma&nbsp;
				<span className="relative inline-block">
					<span className="absolute inset-0 bg-yellow-500 -skew-y-3 z-0"></span>
					<span className="relative text-white z-10">AviSoft</span>
				</span>
				, y nuestra aplicación&nbsp;
				<span className="relative inline-block">
					<span className="absolute inset-0 bg-yellow-500 -skew-y-3 z-0"></span>
					<span className="relative text-white z-10">CanarIA</span>
				</span>
				.
				</p>
			</div>
		</div>
		<div className="flex flex-wrap justify-center py-10">
			<Persona
				nombre="Felipe Buscaglia"
				descripcion="Scrum Master - API Developer"
				link_lk="https://www.linkedin.com/in/felipe-buscaglia-vasquez/"
				link_mail="felipe.buscaglia@sansano.usm.cl"
				fotoPersona={pipejpg}
			/>
			<Persona
				nombre="Carlos Mundaca"
				descripcion="Product Owner - FullStack"
				link_lk="https://www.linkedin.com/in/cgmf/"
				link_mail="cgmf.soul@gmail.com"
				link_IG="https://www.instagram.com/el_wacho_ese/?igsh=MWNjc2YyeGx0dDVvaA%3D%3D"
				fotoPersona={cralosjpg}
            />
			<Persona
				nombre="Camila Cid"
				descripcion="IA Developer"
				link_lk="https://www.linkedin.com/in/camila-cid-allendes-6b0443238/"
				link_mail="camila.cida@sansano.usm.cl"
				fotoPersona={camijpg}
            />
			<Persona
				nombre="Anibal Plaza"
				descripcion="IA Developer"
				link_lk="https://www.linkedin.com/in/anibal-plaza-365088300/"
				link_mail="anibal.plazar@usm.cl"
				fotoPersona={anibaljpg}
            />
			<Persona
				nombre="Esteban Carrasco"
				descripcion="FullStack - AWS expert"
				link_lk="https://www.linkedin.com/in/esteban-carrasco-galdame-3920a3216/"
				link_mail="esteban.carrasco.ga@gmail.com"
				fotoPersona={tebanjpg}
            />
			
		</div>
	</div>
);
}

export default Team;
