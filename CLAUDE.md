# CLAUDE.md — Plantilla para proyectos web

> Copiá este archivo a la raíz de cada proyecto web nuevo.
> Editá las secciones marcadas con `<!-- PERSONALIZAR -->`.

---

## Stack tecnológico

Este proyecto usa el siguiente stack. Siempre generá código compatible con él:

- **Framework**: Next.js (App Router)
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Componentes base**: shadcn/ui (si está inicializado en el proyecto)
- **Componentes animados**: Magic UI
- **Componentes premium**: 21st Dev Magic (usar con `/ui`)
- **Gestor de paquetes**: pnpm

---

## MCPs disponibles

Tenés acceso a estos servidores MCP. Usalos siempre que corresponda, sin que el usuario lo pida explícitamente:

- **Magic UI MCP** (`magicuidesign-mcp`): para componentes animados — marquee, blur-fade, bento grid, hero sections.
- **21st Dev Magic** (`21st-dev`): para componentes premium React + Tailwind — pricing, navbar, testimonios, footers.
- **Playwright CLI**: para abrir el browser, ver la página construida y verificar que el diseño se vea bien. Usalo al terminar cada sección importante.

---

## Skill de diseño activo

Tenés cargado el skill **UI/UX Pro Max GO**. Esto significa que podés y debés:

- Elegir paletas de colores según la industria del proyecto
- Aplicar estilos visuales específicos (Glassmorphism, Brutalism, Minimalism, etc.)
- Combinar fuentes de Google Fonts de forma profesional
- Seguir reglas de UX antes de escribir cualquier componente

Nunca uses estilos genéricos. Cada proyecto debe tener una identidad visual única y deliberada.

---

## Reglas de diseño

### Tipografía
- Elegí fuentes con carácter. Evitá Inter, Roboto, Arial y system fonts genéricas.
- Combiná una fuente display para títulos con una serif o sans refinada para cuerpo.
- Siempre importá desde Google Fonts en `layout.tsx`.

### Color
- Usá CSS variables en `globals.css` para todos los colores del proyecto.
- Una paleta dominante + un acento fuerte. Evitá paletas equilibradas y tibias.
- Nunca uses gradientes púrpura sobre blanco — es la elección más genérica posible.

### Animaciones
- Priorizá soluciones CSS puras para efectos de entrada.
- Usá `animation-delay` para staggered reveals en page load.
- Para componentes React con animaciones complejas, usá Framer Motion.
- Siempre wrapeá animaciones con `@media (prefers-reduced-motion: no-preference)`.

### Layout
- Layouts inesperados. Asimetría. Superposición. Elementos que rompen la grilla.
- Espacio negativo generoso O densidad controlada — elegí uno y comprometete.
- Responsive mobile-first. Breakpoints: `sm:640px md:768px lg:1024px xl:1280px`.

### Componentes
- Todos los componentes en `/components/ui/` (shadcn) o `/components/` (propios).
- Nomenclatura: PascalCase para componentes, kebab-case para archivos.
- Siempre tipados con TypeScript. Sin `any`.

---

## Flujo de trabajo obligatorio

Seguí este orden para cada página o sección nueva:

1. **Mockup primero** — El usuario genera el mockup visualmente en [Google Stitch](https://stitch.withgoogle.com) o en Claude Design desde el browser y te lo pasa como referencia (código HTML/CSS o imagen). Esperá ese input antes de escribir código.
2. **Decisiones de diseño** — Con el mockup como referencia, elegí paleta, tipografía y estilo visual con UI/UX Pro Max GO.
3. **Construir** — Usá Magic UI para animaciones y 21st Dev para componentes estructurales.
4. **Verificar** — Abrí la página con Playwright y revisá que el diseño se vea bien.
5. **Iterar** — Si algo no se ve bien, corregí sin pedir permiso. Podés hacer 2-3 rondas.

---

## Plan Mode

Antes de empezar cualquier tarea de diseño importante, activá Plan Mode (Shift+Tab) para:
- Definir qué componentes vas a usar
- Elegir la paleta y estilo visual
- Planear la estructura de archivos
- Estimar si necesitás instalar algún componente nuevo

---

## Estructura de archivos esperada

```
├── app/
│   ├── layout.tsx          # Fuentes, metadata global
│   ├── page.tsx            # Landing principal
│   └── globals.css         # Variables CSS, estilos base
├── components/
│   ├── ui/                 # Componentes shadcn
│   └── [nombre]/           # Componentes propios del proyecto
├── public/
│   └── images/
├── lib/
│   └── utils.ts
├── .mcp.json               # Configuración de MCPs
├── tailwind.config.ts
├── tsconfig.json
└── CLAUDE.md               # Este archivo
```

---

## Configuración de MCPs (.mcp.json)

Si el proyecto no tiene `.mcp.json`, crealo con esta configuración base:

```json
{
  "mcpServers": {
    "magicuidesign-mcp": {
      "command": "npx",
      "args": ["-y", "@magicuidesign/mcp@latest"]
    }
  }
}
```

> 21st Dev se configura con `npx @21st-dev/cli@latest install claude --api-key TU_KEY`

> Stitch se usa manualmente desde el browser en [stitch.withgoogle.com](https://stitch.withgoogle.com) — no requiere MCP.

---

## Prompts de referencia

### Landing page desde cero
```
Necesito una landing page para [descripción del proyecto].
Te adjunto el mockup que generé en Stitch como referencia visual.
Tomá ese diseño como base, elegí paleta y tipografía con el skill de diseño,
y construí con Magic UI para animaciones y 21st Dev para los componentes
estructurales (hero, features, pricing, footer).
Todo en Next.js + Tailwind. Verificá con Playwright al terminar.
```

### Mejorar diseño existente
```
Abrí http://localhost:3000 con Playwright, analizá el diseño actual
e identificá los 3 problemas principales. Mejorá la sección [nombre]
usando componentes animados de Magic UI. Verificá el resultado.
```

### Componente nuevo
```
Usá /ui para crear [descripción del componente].
Asegurate que sea responsive, siga la paleta del proyecto
y use las fuentes definidas en layout.tsx.
```

---

<!-- PERSONALIZAR -->
## Contexto del proyecto

> Landing Page para Kosmo Ai, una Agencia de Inteligencia artificial especializada en el desarrollo de páginas web a medida y chatbots de inteligencia artificial que responden preguntas frecuentes 24/7, agendan reuniones y hacen recordatorios. 

- **Nombre del proyecto**: Kosmo Ai Web
- **Tipo**: Landing page
- **Industria/nicho**: Inteligencia Artificial - Automatización de procesos
- **Paleta elegida**: Negro, Dorado, Blanco y Gris
- **Estilo visual**: Minimalista premium
- **Fuentes**: Tipografía premium: Cormorant Garamond (titulares serif elegantes con itálicas) + Inter Tight (sans) + JetBrains Mono (acentos tech)
- **Notas adicionales**: —
