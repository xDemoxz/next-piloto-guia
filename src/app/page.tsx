import Link from "next/link"

// Home: página de bienvenida. Su único trabajo es mandar al usuario
// hacia /products o hacia /categories mediante dos botones.
export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-zinc-50 px-4 text-center font-sans dark:bg-black">
      <div>
        <h1 className="text-2xl font-bold">Bienvenido al catálogo</h1>
        <p className="mt-2 text-zinc-500">
          Explora los productos disponibles o navega por categorías.
        </p>
      </div>

      {/* flex-col en mobile, flex-row en pantallas medianas en adelante */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/products"
          className="rounded bg-blue-500 px-6 py-2.5 text-white hover:bg-blue-600"
        >
          Ver productos
        </Link>
        <Link
          href="/categories"
          className="rounded bg-blue-500 px-6 py-2.5 text-white hover:bg-blue-600"
        >
          Ver categorías
        </Link>
      </div>
    </div>
  )
}
