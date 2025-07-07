import Link from 'next/link'

export const metadata = {
  title: 'MAGNA • Imóveis',
  description: 'Página de listagem de imóveis MAGNA',
}

export default async function Properties() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simula um atraso de carregamento
  // TODO se der error, chamar 'throw new Error("Erro ao carregar os imóveis")'
  // TODO ajustar o roteamento para o id do imóvel correto
  const imovelId = 1
  return (
    <main className='bg-neutral-950 text-white'>
      {/* esta é a página imóveis - listar os imóveis */}
      <h1>Lista de Imóveis</h1>
      <ul>
        <li>
          <Link href={`/imoveis/${imovelId}`}>Imóvel 1</Link>
        </li>
        <li>
          <Link href={`/imoveis/${imovelId}`}>Imóvel 2</Link>
        </li>
      </ul>
    </main>
  )
}
