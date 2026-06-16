import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import CorpoClinico from './pages/CorpoClinico';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div id="app-wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/corpo-clinico" element={<CorpoClinico />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
