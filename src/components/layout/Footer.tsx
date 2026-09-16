import Link from "next/link"

// Footer: al igual que el Navbar, vive en el layout raíz.
// Requisito del ejercicio: debe tener dos botones de navegación,
// uno hacia /products y otro hacia /categories.
export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      {/* flex-col en mobile, flex-row en pantallas medianas (md) */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-6 md:flex-row md:justify-between">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Mi Catálogo — proyecto de práctica
        </p>

        <div className="flex gap-3">
          <Link
            href="/products"
            className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
          >
            Productos
          </Link>
          <Link
            href="/categories"
            className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
          >
            Categorías
          </Link>
        </div>
      </div>
    </footer>
  )
}
