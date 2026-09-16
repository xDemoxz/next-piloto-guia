# Mi Catálogo — proyecto de práctica con Next.js

Aplicación básica hecha con **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**.
Este README documenta, paso a paso, cómo se construyeron los tres puntos clave del
ejercicio, para que puedas repetir el proceso o explicárselo a alguien más.

> Material complementario: guía en PDF con el flujo del proyecto y definiciones de
> conceptos clave (ver sección [Material de estudio](#material-de-estudio)).

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura de carpetas

```
src/
  app/                        → Rutas (App Router: cada carpeta = una URL)
    layout.tsx                → Layout raíz: Navbar + <main> + Footer
    page.tsx                  → Home ("/")
    products/
      page.tsx                → Listado de productos ("/products")
      [id]/page.tsx           → Detalle de un producto ("/products/1")
    categories/
      page.tsx                → Listado de categorías ("/categories")
  components/
    layout/
      Navbar.tsx               → Barra de navegación superior
      Footer.tsx                → Pie de página con botones a Productos/Categorías
    products/
      ProductCard.tsx           → Tarjeta de un producto
      ProductsAside.tsx         → Aside (derecha) de la página de productos
    categories/
      CategoryCard.tsx          → Tarjeta de una categoría
      CategoriesAside.tsx       → Aside (izquierda) de la página de categorías
  data/
    products.ts                → Datos "falsos" (mock) de productos
    categories.ts               → Datos "falsos" (mock) de categorías
```

**Idea clave:** las carpetas dentro de `app/` definen las URLs (routing basado en
archivos). Los componentes reutilizables (Navbar, Footer, tarjetas, asides) NO van
dentro de `app/`, sino en `components/`, para separar "rutas" de "piezas de UI".

---

## Punto 1 — Estructura de carpetas y layout general (Navbar + Footer)

**Objetivo:** que toda la app comparta un mismo Navbar arriba y Footer abajo, sin
repetir código en cada página.

1. Se creó `src/components/layout/Navbar.tsx` y `src/components/layout/Footer.tsx`
   como componentes independientes.
2. En `src/app/layout.tsx` (el **layout raíz**, obligatorio en Next.js) se importan
   y se colocan envolviendo a `children`:

   ```tsx
   <body className="min-h-full flex flex-col">
     <Navbar />
     <main className="flex flex-1 flex-col">{children}</main>
     <Footer />
   </body>
   ```

   - `children` es la página actual (Home, Productos, Categorías...). Next.js la
     inyecta automáticamente según la URL.
   - Como el layout raíz envuelve **todas** las rutas, el Navbar y el Footer
     aparecen en cualquier página sin tener que escribirlos de nuevo.
3. El **Footer** incluye los dos botones de navegación pedidos: `Productos` y
   `Categorías`, usando el componente `<Link>` de Next.js (navegación sin recargar
   la página).
4. La **Home** (`src/app/page.tsx`) muestra el mensaje de bienvenida y los mismos
   dos accesos (`Ver productos` / `Ver categorías`) en el centro de la pantalla.

📄 Archivos: [layout.tsx](src/app/layout.tsx) · [page.tsx](src/app/page.tsx) ·
[Navbar.tsx](src/components/layout/Navbar.tsx) ·
[Footer.tsx](src/components/layout/Footer.tsx)

---

## Punto 2 — Página de Productos (tarjetas + aside a la derecha)

**Objetivo:** listar productos como tarjetas y mostrar un aside informativo a la
**derecha**.

1. Los datos viven en `src/data/products.ts` (un arreglo de objetos `Product`).
   Separar los datos de la UI facilita reemplazarlos después por una API real.
2. `ProductCard.tsx` recibe **un** producto por props y solo se encarga de
   mostrarlo (nombre, categoría, precio, botón "Ver detalle").
3. `ProductsAside.tsx` es el aside: lista las categorías disponibles (solo
   informativo por ahora, sin filtrado real).
4. En `src/app/products/page.tsx` se combina todo con Flexbox:

   ```tsx
   <div className="flex flex-col md:flex-row-reverse ...">
     <ProductsAside />
     <section>{/* grid de ProductCard */}</section>
   </div>
   ```

   - `flex-row-reverse` invierte el orden visual: aunque el aside se escribe
     primero en el JSX (bueno para accesibilidad/lectores de pantalla), se
     **muestra a la derecha**.
   - En mobile (`flex-col`) todo se apila verticalmente.
5. `/products/[id]/page.tsx` es una **ruta dinámica**: `[id]` captura el segmento
   de la URL (ej. `/products/3` → `id = "3"`) y se usa para buscar el producto.

📄 Archivos: [products/page.tsx](src/app/products/page.tsx) ·
[ProductCard.tsx](src/components/products/ProductCard.tsx) ·
[ProductsAside.tsx](src/components/products/ProductsAside.tsx) ·
[products/\[id\]/page.tsx](src/app/products/%5Bid%5D/page.tsx)

---

## Punto 3 — Página de Categorías (tarjetas + aside a la izquierda)

**Objetivo:** lo mismo que Productos, pero con el aside en el lado **opuesto**.

1. Datos en `src/data/categories.ts`.
2. `CategoryCard.tsx` muestra una categoría (ícono, nombre, descripción).
3. `CategoriesAside.tsx` muestra una lista de productos destacados.
4. En `src/app/categories/page.tsx`, la diferencia con Productos es sutil pero
   importante:

   ```tsx
   <div className="flex flex-col md:flex-row ...">
     <CategoriesAside />
     <section>{/* grid de CategoryCard */}</section>
   </div>
   ```

   Aquí se usa `flex-row` (sin `-reverse`), así que el aside, al escribirse
   primero, también se **muestra primero** → queda a la **izquierda**.

   > Comparar esto con Productos es la mejor forma de entender cómo
   > `flex-row` vs `flex-row-reverse` controla el lado del aside sin duplicar
   > estructura.

📄 Archivos: [categories/page.tsx](src/app/categories/page.tsx) ·
[CategoryCard.tsx](src/components/categories/CategoryCard.tsx) ·
[CategoriesAside.tsx](src/components/categories/CategoriesAside.tsx)

---

## Tailwind CSS: qué se usó y por qué

El proyecto usa **Tailwind CSS v4** (instalado vía `@tailwindcss/postcss`, ver
[postcss.config.mjs](postcss.config.mjs) y el `@import "tailwindcss";` en
[globals.css](src/app/globals.css)). No hay `tailwind.config.js` porque Tailwind v4
se configura mayormente desde CSS (`@theme`).

Utilidades usadas en este proyecto, agrupadas por tema:

| Categoría | Clases usadas | Para qué |
|---|---|---|
| **Layout (Flexbox)** | `flex`, `flex-col`, `flex-row`, `flex-row-reverse`, `flex-1`, `shrink-0`, `items-center`, `justify-center`, `justify-between`, `gap-*` | Organizar Navbar/Footer, y el layout de dos columnas (aside + contenido) |
| **Responsive** | `sm:`, `md:`, `lg:` (mobile-first) | Ej: `flex-col md:flex-row-reverse` = apilado en mobile, en fila desde tablet/desktop |
| **Grid** | `grid`, `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3` | Cuadrícula de tarjetas de productos/categorías |
| **Espaciado** | `p-*`, `px-*`, `py-*`, `mt-*`, `mb-*`, `gap-*` | Padding y separación entre elementos |
| **Tipografía** | `text-sm`, `text-lg`, `text-xl`, `text-2xl`, `font-semibold`, `font-bold`, `uppercase`, `tracking-wide` | Jerarquía visual de títulos y textos |
| **Color** | `bg-blue-500`, `text-blue-500`, `bg-zinc-50`, `text-zinc-500`, `hover:bg-blue-600` | Colores de marca y estados hover |
| **Bordes/sombras** | `border`, `border-black/10`, `rounded`, `rounded-lg`, `shadow-sm`, `hover:shadow-md` | Tarjetas y separadores del Navbar/Footer |
| **Modo oscuro** | `dark:bg-black`, `dark:border-white/10` | Se activa automáticamente según el sistema operativo (`prefers-color-scheme`, ver `globals.css`) |
| **Otros** | `sticky top-0`, `backdrop-blur`, `w-fit`, `w-full`, `w-64` | Navbar fijo arriba con efecto vidrio; ancho fijo del aside en desktop |

**Enfoque "mobile-first":** cada clase sin prefijo aplica a *todos* los tamaños;
`md:algo` la sobreescribe desde el breakpoint `md` (≥768px) en adelante. Por eso
`flex-col md:flex-row-reverse` significa "apilado por defecto, en fila desde
tablet".

---

## Comentarios en el código

Cada archivo nuevo incluye comentarios cortos en español explicando el **por qué**
de las decisiones (no solo el qué), especialmente:
- Por qué el Navbar/Footer viven en `layout.tsx` y no en cada página.
- Por qué `ProductsAside` usa `flex-row-reverse` y `CategoriesAside` usa `flex-row`.
- Qué hace `params` como `Promise` en la ruta dinámica `[id]`.

Úsalos como guía de estudio mientras recorres el código.

## Material de estudio

Se generó un PDF (`Guia-Next-Tailwind.pdf`, entregado junto a este repo) con:
- El flujo/diagrama de cómo Next.js resuelve una URL hasta pintar la página.
- Definiciones de conceptos: App Router, Server Component, ruta dinámica,
  layout raíz, utility-first CSS (Tailwind), diseño responsivo mobile-first, etc.

## Scripts disponibles

```bash
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción
npm run start   # Servir el build de producción
npm run lint    # ESLint
```
