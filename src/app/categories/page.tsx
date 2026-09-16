import { categories } from "@/data/categories"
import CategoryCard from "@/components/categories/CategoryCard"
import CategoriesAside from "@/components/categories/CategoriesAside"

// Página /categories: mismo layout de dos columnas que /products,
// pero aquí el aside va a la IZQUIERDA, así que simplemente lo escribimos
// primero y usamos flex-row (sin invertir) desde md.
export default function CategoriesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-4 md:flex-row">
      <CategoriesAside />

      <section className="flex-1">
        <h1 className="mb-4 text-xl font-bold">Nuestras categorías</h1>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}
