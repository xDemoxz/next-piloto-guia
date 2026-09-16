// Fuente de datos "falsa" (mock) de productos.
// En un proyecto real esto vendría de una base de datos o una API,
// pero para practicar estructura y componentes basta con un arreglo en memoria.
export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Teclado mecánico",
    description: "Teclado mecánico retroiluminado, switches rojos.",
    price: 89.99,
    category: "Tecnología"
  },
  {
    id: "2",
    name: "Mouse inalámbrico",
    description: "Mouse ergonómico con batería recargable.",
    price: 29.5,
    category: "Tecnología"
  },
  {
    id: "3",
    name: "Silla ergonómica",
    description: "Silla de oficina con soporte lumbar ajustable.",
    price: 149.0,
    category: "Hogar"
  },
  {
    id: "4",
    name: "Lámpara de escritorio",
    description: "Lámpara LED regulable con puerto USB.",
    price: 19.99,
    category: "Hogar"
  },
  {
    id: "5",
    name: "Audífonos Bluetooth",
    description: "Audífonos con cancelación de ruido activa.",
    price: 59.99,
    category: "Tecnología"
  },
  {
    id: "6",
    name: "Termo de acero",
    description: "Termo mantiene la temperatura por 12 horas.",
    price: 15.0,
    category: "Deportes"
  }
]
