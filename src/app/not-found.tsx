"use client";

export default function NotFound() {
  return (
    <main>
      {/* esta é a página 404 */}
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Voltar
      </button>
    </main>
  );
}