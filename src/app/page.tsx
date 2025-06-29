export default function Home() {
  return (
    <main>
        {/* esta é a página inicial */}
      <section>
        <h1>Imagem bonita de capa</h1>
        <p>Uma imagem de destaque será exibida aqui futuramente.</p>
      </section>
      <section>
        <label htmlFor="search">Pesquisa com filtros:</label>
        <input id="search" type="text" placeholder="Digite para pesquisar..." />
      </section>
      <section>
        <h2>Imóveis Relevantes</h2>
        <p>Lista de imóveis relevantes será exibida aqui.</p>
      </section>
    </main>
  )
}