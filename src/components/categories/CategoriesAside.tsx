import Link from "next/link"
import { products } from "@/data/products"

// Aside de /categories: en el requisito debe ir a la IZQUIERDA
// (por eso en la página el <aside> se escribe ANTES que el <section> con las tarjetas).
export default function CategoriesAside() {
  return (
    <aside className="w-full shrink-0 rounded-lg border border-black/10 p-4 md:w-64 dark:border-white/10">
      <h2 className="font-semibold">Productos destacados</h2>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-500">
        {products.slice(0, 4).map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${product.id}`}
              className="hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
