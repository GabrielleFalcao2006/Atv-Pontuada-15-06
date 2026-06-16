import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <h1>Vida & Saúde</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
          <li><NavLink to="/servicos">Serviços</NavLink></li>
          <li><NavLink to="/corpo-clinico">Corpo Clínico</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contato">Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
