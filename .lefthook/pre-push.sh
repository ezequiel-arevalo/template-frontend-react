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
