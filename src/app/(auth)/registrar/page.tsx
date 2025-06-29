export const metadata = {
  title: 'Registrar',
  description: 'Criar conta MAGNA',
};

export default function Register() {
  return (
    <main>
      {/* esta é a página de registro */}
      <form>
        <h1>Registrar</h1>
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
        <button type="submit">Registrar</button>
      </form>
    </main>
  );
}
