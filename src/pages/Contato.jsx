import { useState } from 'react';

const Contato = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-container">
      <h1>Contato</h1>
      <p>Entre em contato conosco para agendamentos ou dúvidas.</p>
      
      {submitted ? (
        <div className="success-message" style={{
          background: '#d4edda',
          color: '#155724',
          padding: '2rem',
          borderRadius: '12px',
          textAlign: 'center',
          marginTop: '2rem',
          animation: 'fadeIn 0.5s ease'
        }}>
          <h3>Mensagem enviada com sucesso!</h3>
          <p>Agradecemos seu contato. Retornaremos em breve.</p>
        </div>
      ) : (
        <>
          <div className="contact-info">
            <p><strong>Telefone:</strong> (11) 5555-1234</p>
            <p><strong>Endereço:</strong> Rua da Saúde, 123 - Centro, São Paulo - SP</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contato;
