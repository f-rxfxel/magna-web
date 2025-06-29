export const metadata = {
  title: 'Entrar',
  description: 'Fazer login MAGNA',
};

export default function Enter() {
  return (
    <main>
      {/* esta é a página de entrar */}
      <form>
        <h1>Entrar</h1>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        {/* TODO usar o prop replace para a o componente Link */}
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
