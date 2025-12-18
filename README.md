# Template Frontend React

Template base para proyectos frontend modernos con React, enfocado en **velocidad**, **calidad de código** y **baja fricción** desde el día uno.

---

## 🚀 Stack incluido

* **React** – Librería principal
* **Vite** – Dev server y bundler rápido
* **TypeScript** – Tipado estático
* **SWC** – Compilación ultra rápida
* **Bun** – Runtime y gestor de paquetes
* **Tailwind CSS** – Estilos utilitarios

---

## 🧹 Calidad de código

* **Biome**

  * Linting
  * Formatting
  * Organización de imports
  * Reglas recomendadas activas

* **CommitLint**

  * Convención de commits (Conventional Commits)

* **Lefthook**

  * Hooks de Git rápidos y declarativos
  * `pre-commit`: lint + tests
  * `commit-msg`: validación de mensajes

---

## 🧪 Testing

* **Vitest**

  * Tests unitarios
  * Tests de componentes
  * Integración nativa con Vite

* **Testing Library**

  * Tests centrados en el comportamiento del usuario

---

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

---

## 🧠 Filosofía del template

* Opiniones claras
* Configuración mínima
* Sin dependencias innecesarias
* Fácil de extender
* Listo para producción

Este template **no incluye**:

* Storybook (usar solo en repos de UI)
* Playwright (agregar solo si hay flujos críticos)
* React Compiler (aún experimental)

---

## 📜 Scripts principales

```bash
bun dev        # Inicia el servidor de desarrollo
bun build      # Build de producción
bun preview    # Preview del build
bun lint       # Biome check
bun test       # Vitest
```

---

## ✅ Requisitos

* Bun >= latest
* Node.js solo si alguna herramienta externa lo requiere

---

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

---

## 📌 Notas

Este template está pensado para:

* Proyectos nuevos
* Equipos pequeños o medianos
* Apps frontend modernas
* Uso profesional y educativo

Si necesitas E2E, design systems o setups experimentales, considera templates específicos.

---

Happy hacking 🚀
