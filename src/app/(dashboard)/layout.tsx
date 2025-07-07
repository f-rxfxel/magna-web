export const metadata = {
  title: {
    default: 'MAGNA',
    template: 'MAGNA • %s',
  },
  description: 'Gerencie sua conta e seus imóveis cadastrados',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Header (dashboard)</header>
      {children}
      <footer>Footer (dashboard)</footer>
    </>
  )
}
