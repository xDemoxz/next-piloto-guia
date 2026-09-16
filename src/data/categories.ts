// Fuente de datos "falsa" (mock) de categorías.
// Cada categoría agrupa productos por el campo `category` de products.ts.
export interface Category {
  id: string
  name: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    id: "tecnologia",
    name: "Tecnología",
    description: "Gadgets y accesorios electrónicos.",
    icon: "💻"
  },
  {
    id: "hogar",
    name: "Hogar",
    description: "Artículos para hacer tu casa más cómoda.",
    icon: "🏠"
  },
  {
    id: "deportes",
    name: "Deportes",
    description: "Todo lo que necesitas para mantenerte activo.",
    icon: "🏀"
  }
]
