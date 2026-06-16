const Servicos = () => {
  const handleCardClick = (servico) => {
    alert(`Você clicou em: ${servico}. Em um sistema real, aqui abririam mais detalhes ou agendamento.`);
  };

  return (
    <div className="page-container">
      <h1>Nossos Serviços</h1>
      <p>Oferecemos uma ampla gama de serviços médicos para atender às suas necessidades.</p>
      <div className="services-grid">
        <div className="service-card" onClick={() => handleCardClick('Consultas Especializadas')}>
          <h3>Consultas Especializadas</h3>
          <p>Mais de 30 especialidades médicas à sua disposição.</p>
          <span className="learn-more" style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>Ver mais →</span>
        </div>
        <div className="service-card" onClick={() => handleCardClick('Exames de Imagem')}>
          <h3>Exames de Imagem</h3>
          <p>Ressonância, Tomografia, Ultrassom e muito mais.</p>
          <span className="learn-more" style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>Ver mais →</span>
        </div>
        <div className="service-card" onClick={() => handleCardClick('Pronto Socorro 24h')}>
          <h3>Pronto Socorro 24h</h3>
          <p>Atendimento de urgência e emergência qualificado.</p>
          <span className="learn-more" style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>Ver mais →</span>
        </div>
        <div className="service-card" onClick={() => handleCardClick('Internação e Cirurgias')}>
          <h3>Internação e Cirurgias</h3>
          <p>Centro cirúrgico moderno e acomodações confortáveis.</p>
          <span className="learn-more" style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>Ver mais →</span>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
