const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p>&copy; {currentYear} Hospital Vida & Saúde. Todos os direitos reservados.</p>
      <div className="social-links">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
