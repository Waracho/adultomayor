import React, { useState } from 'react';

const Team = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    center: '',
    reason: '',
    date: '',
    time: ''
  });

  const centers = ['Centro 1', 'Centro 2', 'Centro 3']; // Lista de centros, personalízala según sea necesario
  const reasons = ['Consulta General', 'Urgencias', 'Control de Enfermedades', 'Otro']; // Lista de motivos

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar los datos a la API o manejar la información
  };

  return (
    <div className="flex flex-col flex-grow w-9/12 px-24 py-8 self-center">
      <h2 className="text-3xl font-bold text-center mb-6">Solicitud de Hora GES</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Número de teléfono */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Centro de atención (Dropdown) */}
        <div>
          <label htmlFor="center" className="block text-sm font-medium text-gray-700">Centro de Atención</label>
          <select
            id="center"
            name="center"
            value={formData.center}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Seleccione un centro</option>
            {centers.map((center, index) => (
              <option key={index} value={center}>{center}</option>
            ))}
          </select>
        </div>

        {/* Motivo de la visita (Dropdown) */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Motivo de la Visita</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Seleccione un motivo</option>
            {reasons.map((reason, index) => (
              <option key={index} value={reason}>{reason}</option>
            ))}
          </select>
        </div>

        {/* Fecha */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha de la Visita</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Hora */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora de la Visita</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Botón de enviar */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Solicitar Hora
          </button>
        </div>
      </form>
    </div>
  );
};

export default Team;

