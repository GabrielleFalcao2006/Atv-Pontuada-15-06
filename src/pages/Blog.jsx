const Blog = () => {
  const posts = [
    {
      titulo: 'A importância da vacinação',
      data: '10/06/2026',
      resumo: 'Saiba por que manter sua carteira de vacinação em dia é crucial para a saúde pública.'
    },
    {
      titulo: 'Dicas para uma alimentação saudável',
      data: '05/06/2026',
      resumo: 'Pequenas mudanças no seu dia a dia podem trazer grandes benefícios para o seu coração.'
    },
    {
      titulo: 'Inauguramos nossa nova ala de pediatria',
      data: '01/06/2026',
      resumo: 'Um espaço lúdico e seguro para cuidar dos nossos pequenos pacientes.'
    }
  ];

  return (
    <div className="page-container">
      <h1>Blog & Novidades</h1>
      <p>Fique por dentro das últimas notícias e dicas de saúde.</p>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <article key={index} className="post-card">
            <h3>{post.titulo}</h3>
            <small>{post.data}</small>
            <p>{post.resumo}</p>
            <a href="#">Leia mais...</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
