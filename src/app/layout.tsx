import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Mi Catálogo",
  description: "Proyecto de práctica: catálogo de productos y categorías con Next.js"
}

// Layout raíz: se ejecuta UNA sola vez y envuelve TODAS las rutas de la app.
// Aquí es donde viven el Navbar y el Footer para que se vean en cada página,
// sin tener que repetirlos en page.tsx, products/page.tsx, categories/page.tsx, etc.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* flex-col + min-h-full: el footer queda pegado abajo aunque el
          contenido de la página sea corto (efecto "sticky footer"). */}
      <body className="min-h-full flex flex-col">
        <Navbar />
        {/* flex-1: main crece para ocupar el espacio sobrante entre navbar y footer */}
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
