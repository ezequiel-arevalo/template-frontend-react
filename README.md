# Template Frontend React

Template base para proyectos frontend modernos con **React**, enfocado en **velocidad**, **calidad de código** desde el día uno.


## 🚀 Stack incluido

| Tecnología | Icono | Descripción | Enlace |
|------------|-------|------------|-------|
| React | ⚛️ | UI declarativa y componible | [react.dev](https://react.dev) |
| Tailwind CSS | 🎨 | Utility-first CSS para velocidad | [tailwindcss.com](https://tailwindcss.com) |
| Vite | ⚡ | Bundler rápido para DX moderna | [vitejs.dev](https://vitejs.dev) |
| Bun | 🧋 | Runtime y gestor de paquetes ultrarrápido | [bun.sh](https://bun.sh) |
| TypeScript | 📝 | Tipado estático | [typescriptlang.org](https://www.typescriptlang.org) |
| SWC | 🚀 | Compilación ultra rápida | [swc.rs](https://swc.rs) |


## 🧹 Calidad de código & control de commits

| Herramienta | Icono | Funcionalidad | Enlace |
|------------|-------|---------------|-------|
| Biome | 🧹 | Linting, formatting, organización de imports, reglas recomendadas activas | [biomejs.dev](https://biomejs.dev) |
| CommitLint | 📝 | Convención de commits (Conventional Commits) | [commitlint.js.org](https://commitlint.js.org) |
| Lefthook | 🪝 | Automatización de hooks de Git: pre-commit, commit-msg y pre-push | [lefthook.dev](https://lefthook.dev) |

### ⚙️ Pre-push script

Antes de cualquier push, se ejecuta un script que asegura que todo está en orden:

```bash
#!/usr/bin/env bash
set -e

echo "🔍 Verificación inicial de rama"
bash .lefthook/validate-branch.sh

echo "🧠 Chequeando tipos de TypeScript"
bun run type-check

echo "🧹 Ejecutando Biome (lint + format + imports)"
bun run check:fix

echo "🏗️ Ejecutando build del proyecto"
bun run build

echo "🧪 Ejecutando tests (Vitest)"
bun run test:run

echo "✅ Pre-push completado con éxito. Todo en orden."
```

Esto asegura:

* Control de ramas
* Validación de commits
* Chequeo de tipos
* Linting y formatting
* Build exitoso
* Tests pasados

## 🧪 Testing

| Herramienta | Icono | Funcionalidad | Enlace |
|------------|-------|---------------|-------|
| Vitest | 🧪 | Tests unitarios y de componentes, integración nativa con Vite | [vitest.dev](https://vitest.dev) |
| Testing Library | 🧪 | Tests centrados en el comportamiento del usuario | [testing-library.com](https://testing-library.com) |

## 🗺️ Navegación / Ruteo

| Librería | Icono | Funcionalidad | Enlace |
|----------|-------|---------------|-------|
| React Router Dom | 🧭 | Ruteo declarativo para SPAs | [reactrouter.com](https://reactrouter.com) |

## 📁 Estructura base

```
src/
├─ components/     # Componentes reutilizables
├─ pages/          # Rutas / vistas
├─ hooks/          # Custom hooks
├─ lib/            # Utilidades
├─ styles/         # Estilos globales
├─ tests/          # Setup de testing
└─ main.tsx
```

## 🧠 Filosofía del template

* Opiniones claras
* Configuración mínima
* Sin dependencias innecesarias
* Fácil de extender
* Listo para producción

**No incluye:**

* Storybook (usar solo en repos de UI)
* Playwright (agregar solo si hay flujos críticos)
* React Compiler (experimental)

## 📜 Scripts principales

```bash
bun dev        # Inicia el servidor de desarrollo
bun build      # Build de producción
bun preview    # Preview del build
bun lint       # Biome check
bun test       # Vitest
```

## ✅ Requisitos

* Bun >= latest
* Node.js solo si alguna herramienta externa lo requiere

## 🏁 Uso

1. Usa este repo como template en GitHub
2. Instala dependencias:
```bash
bun install
```

3. Inicia el proyecto:
```bash
bun dev
```

## 📌 Notas

Este template está pensado para:

* Proyectos nuevos
* Equipos pequeños o medianos
* Apps frontend modernas
* Uso profesional y educativo