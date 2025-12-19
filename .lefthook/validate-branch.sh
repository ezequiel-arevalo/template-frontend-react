#!/bin/bash

# Obtiene la rama actual en la que nos encontramos
branch=$(git symbolic-ref --short HEAD)

# Patrón de convención que utilizó en las ramas
pattern="^(feature|fix|refactor|docs|maintenance|ci|hotfix|experiment)\/[a-z0-9-]+$"

# Permitir ramas main o master
if [[ "$branch" == "main" || "$branch" == "master" ]]; then
  exit 0
fi

# Validar la rama siguiendo la convención
if [[ ! $branch =~ $pattern ]]; then
  echo "Error: branch '$branch' no cumple la convención."
  echo "Debe ser: <prefix>/<descripcion-en-minusculas-con-guiones>"
  exit 1
fi
