import Header from "./components/header";
import './globals.css'

export const metadata = {
  title: "MAGNA",
  description:
    "Sistema de gestão imobiliária - Encontre o imóvel dos seus sonhos",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
      {/* TODO verificar se a colocação do header está correta na estrutura de arquivos*/}
      <Header/>
        {children}</body>
    </html>
  );
}
