# Agenda Cultural de Ronda

Repositorio central de eventos culturales para la ciudad de Ronda. Permite añadir, editar y eliminar eventos con panel de administración, vista cronológica, vista calendario, y URLs individuales con metadatos Open Graph optimizados para WhatsApp.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, Wouter routing

## Where things live

- DB schema: `lib/db/src/schema/events.ts`
- API spec: `lib/api-spec/openapi.yaml`
- Generated hooks: `lib/api-client-react/src/generated/`
- API routes: `artifacts/api-server/src/routes/events.ts`
- Frontend pages: `artifacts/agenda-ronda/src/pages/`
  - `home.tsx` — agenda cronológica con filtros por categoría y búsqueda
  - `calendar.tsx` — vista calendario mensual
  - `event-detail.tsx` — página individual de evento con Open Graph / WhatsApp share
  - `admin.tsx` — panel de gestión (crear, editar, eliminar)
- Layout + Puente Nuevo SVG: `artifacts/agenda-ronda/src/components/`
- Theme: `artifacts/agenda-ronda/src/index.css` — fondo crema, verde oliva, Playfair Display

## Architecture decisions

- Open Graph meta tags se inyectan dinámicamente en el cliente via `useEffect` en la página de evento. Para bots/crawlers en producción (SSR/prerender) se necesitaría un servidor SSR o un prerender service.
- Las URLs de eventos usan slugs generados automáticamente desde el título, garantizando unicidad.
- El panel `/admin` no tiene autenticación (uso interno). Se puede proteger con Clerk auth si se necesita.
- Categorías: Flamenco, Música, Teatro, Exposición, Conferencia, Gastronomía, Patrimonio, Cine, Talleres, Danza.

## Product

- **Agenda pública** (`/`): lista cronológica de eventos con imagen, categoría, fecha, lugar, precio. Filtros por categoría y búsqueda por texto.
- **Calendario** (`/calendario`): vista mensual con puntos de color por categoría. Click en día muestra eventos.
- **Evento individual** (`/evento/:slug`): página de detalle completa con metadatos OG para previsualización en WhatsApp.
- **Administración** (`/admin`): tabla de todos los eventos con acciones de crear, editar, eliminar. Formulario completo con campos OG.

## User preferences

- Diseño editorial elegante: fondo crema (#FAF6EF), verde oliva (#5C6B3A), terracota
- Tipografía: Playfair Display (serif, titulares) + Inter (sans, cuerpo)
- Sin bordes redondeados (radius: 0)
- Logo: pluma de escribir antigua SVG (cultural, no geográfico) — componente `PuenteNuevo` en `puente-nuevo.tsx`
- Prioridad absoluta a experiencia móvil
- Sin emojis en la UI

## Gotchas

- Para que WhatsApp genere previsualización real, la URL debe ser pública (app desplegada). En desarrollo, la vista previa de WhatsApp no funciona.
- Los metadatos OG se inyectan client-side. Para crawlers que no ejecutan JS, necesitarías SSR o un servicio de prerender.
- Siempre ejecutar `pnpm --filter @workspace/db run push` después de cambiar el schema de DB.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
