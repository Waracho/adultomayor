import React from 'react';
import './Team.css';
import bobbyjpg from './assets/Bobby.jpg';

const Team = () => {
return (
	<div className="flex flex-col flex-grow w-[75%]">
		<div className="bg-yellow-500 text-4xl py-2">
			El diseño gráfico es mi pasión
		</div>
		<div className="flex flex-row">
			<div className="bg-blue-500 w-full">
			<p className="text-xl text-justify">
				Buscamos aprobar nuestro proyecto de feria 2024, ahora estamos moviéndonos para encontrar un nuevo cliente que esté por fin dispuesta a contestarnos (opcional)
			</p>
			</div>
		</div>
		<div className="container">
			{/*Container de team*/}
			<div className="box justify-center">
				<div className='custom-center'>
					<div className='bg-white rounded py-2 my-2 w-60'>
						<p className='text-black'>Bobbyneitor</p>
					</div>
				</div>
				<div className='image-container'>
					<img src={bobbyjpg} alt="Este es el bobby :3" className='custom-image' />
				</div>
				<div className='custom-center'>
					<div className='bg-white my-2 py-2 rounded w-60'>
						<p className='text-black '>Redes Sociales</p>
					</div>
				</div>
			</div>
			{/*Container de team*/}
			<div className="box justify-center">
				<div className='custom-center'>
					<div className='bg-white rounded py-2 my-2 w-60'>
						<p className='text-black'>Bobbyneitor</p>
					</div>
				</div>
				<div className='image-container'>
					<img src={bobbyjpg} alt="Este es el bobby :3" className='custom-image' />
				</div>
				<div className='custom-center'>
					<div className='bg-white my-2 py-2 rounded w-60'>
						<p className='text-black '>Redes Sociales</p>
					</div>
				</div>
			</div>
			{/*Container de team*/}
			<div className="box justify-center">
				<div className='custom-center'>
					<div className='bg-white rounded py-2 my-2 w-60'>
						<p className='text-black'>Bobbyneitor</p>
					</div>
				</div>
				<div className='image-container'>
					<img src={bobbyjpg} alt="Este es el bobby :3" className='custom-image' />
				</div>
				<div className='custom-center'>
					<div className='bg-white my-2 py-2 rounded w-60'>
						<p className='text-black '>Redes Sociales</p>
					</div>
				</div>
			</div>

			<div className="container">
				{/*Container de team*/}
				<div className="box justify-center">
					<div className='custom-center'>
						<div className='bg-white rounded py-2 my-2 w-60'>
							<p className='text-black'>Bobbyneitor</p>
						</div>
					</div>
					<div className='image-container'>
						<img src={bobbyjpg} alt="Este es el bobby :3" className='custom-image' />
					</div>
					<div className='custom-center'>
						<div className='bg-white my-2 py-2 rounded w-60'>
							<p className='text-black '>Redes Sociales</p>
						</div>
					</div>
				</div>
				{/*Container de team*/}
				<div className="box justify-center">
					<div className='custom-center'>
						<div className='bg-white rounded py-2 my-2 w-60'>
							<p className='text-black'>Bobbyneitor</p>
						</div>
					</div>
					<div className='image-container'>
						<img src={bobbyjpg} alt="Este es el bobby :3" className='custom-image' />
					</div>
					<div className='custom-center'>
						<div className='bg-white my-2 py-2 rounded w-60'>
							<p className='text-black '>Redes Sociales</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
}

export default Team;
