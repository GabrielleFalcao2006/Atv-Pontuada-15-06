const CorpoClinico = () => {
  const medicos = [
    { nome: 'Dra. Ana Silva', especialidade: 'Cardiologia' },
    { nome: 'Dr. Bruno Costa', especialidade: 'Pediatria' },
    { nome: 'Dra. Carla Souza', especialidade: 'Ginecologia' },
    { nome: 'Dr. Daniel Oliveira', especialidade: 'Ortopedia' },
    { nome: 'Dra. Elena Santos', especialidade: 'Neurologia' },
  ];

  return (
    <div className="page-container">
      <h1>Corpo Clínico</h1>
      <p>Conheça nossa equipe de especialistas altamente qualificados.</p>
      <ul className="doctor-list">
        {medicos.map((medico, index) => (
          <li key={index}>
            <strong>{medico.nome}</strong> - {medico.especialidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CorpoClinico;
