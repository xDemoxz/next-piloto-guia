import { categories } from "@/data/categories"

// Aside de /products: en el requisito debe ir a la DERECHA.
// Es solo informativo/decorativo (sin lógica de filtrado real todavía),
// pensado para practicar el layout de dos columnas con <aside>.
export default function ProductsAside() {
  return (
    <aside className="w-full shrink-0 rounded-lg border border-black/10 p-4 md:w-64 dark:border-white/10">
      <h2 className="font-semibold">Filtrar por categoría</h2>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-500">
        {categories.map((category) => (
          <li key={category.id}>
            {category.icon} {category.name}
          </li>
        ))}
      </ul>
    </aside>
  )
}
