import type { Category } from "@/data/categories"

interface CategoryCardProps {
  category: Category
}

// Igual que ProductCard: componente "tonto" que solo pinta una categoría.
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <li className="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-6 text-center shadow-sm transition hover:shadow-md dark:border-white/10">
      <span className="text-4xl">{category.icon}</span>
      <h2 className="text-lg font-semibold">{category.name}</h2>
      <p className="text-sm text-zinc-500">{category.description}</p>
    </li>
  )
}
