import { notFound } from "next/navigation"
import { products } from "@/data/products"
import Link from "next/link"

interface Props {
  params: Promise<{ id: string }>
}

// Ruta dinámica: [id] captura cualquier segmento (ej: /products/3)
// y lo expone como `params.id`. En Next.js 15+ `params` es una Promise,
// por eso usamos `await`.
export default async function ProductDetail({ params }: Props) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  // notFound() renderiza la página not-found.tsx más cercana (o la genérica de Next).
  if (!product) {
    return notFound()
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 p-4">
      <span className="text-xs uppercase tracking-wide text-blue-500">
        {product.category}
      </span>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-zinc-500">{product.description}</p>
      <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
      <Link
        href="/products"
        className="w-fit rounded bg-blue-500 px-4 py-2.5 text-white hover:bg-blue-600"
      >
        Volver a productos
      </Link>
    </div>
  )
}
