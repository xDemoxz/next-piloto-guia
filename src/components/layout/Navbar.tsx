import Link from "next/link"

// Navbar: se renderiza una sola vez en el layout raíz (src/app/layout.tsx)
// y aparece en TODAS las páginas porque el layout envuelve a `children`.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      {/* flex + justify-between: logo a la izquierda, links a la derecha */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold"
        >
          🛍️ Mi Catálogo
        </Link>

        {/* gap-4: separación entre los links sin usar márgenes manuales */}
        <div className="flex gap-4 text-sm">
          <Link
            href="/products"
            className="hover:underline"
          >
            Productos
          </Link>
          <Link
            href="/categories"
            className="hover:underline"
          >
            Categorías
          </Link>
        </div>
      </nav>
    </header>
  )
}
