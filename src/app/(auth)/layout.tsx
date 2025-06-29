export const metadata = {
  title: {
    default: 'MAGNA',
    template: 'MAGNA • %s',
  },
  description: 'Entrar na sua conta ou criar uma nova conta MAGNA',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Header (Atenticação)</header>
      {children}
      <footer>Footer (Atenticação)</footer>
    </>
  );
}
