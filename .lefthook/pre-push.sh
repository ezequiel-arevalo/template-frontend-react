#!/usr/bin/env bash
set -e

echo "🔍 Verificación inicial de rama"
bash .lefthook/validate-branch.sh

echo "🧠 Chequeando tipos de TypeScript"
bun run type-check

echo "🧹 Formateando código (Biome format)"
bun run format:fix

echo "🔎 Ejecutando linter (Biome lint)"
bun run lint:fix

echo "✅ Verificación final (Biome check)"
bun run check

echo "🏗️ Ejecutando build del proyecto"
bun run build

echo "🧪 Ejecutando tests (Vitest)"
bun run test:run

echo "✅ Pre-push completado con éxito. Todo en orden."
