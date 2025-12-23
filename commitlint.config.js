/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Corrección de bug
        'docs',     // Cambios en documentación
        'style',    // Formato, indentación, punto y coma, etc.
        'refactor', // Refactorización de código sin cambiar funcionalidad
        'perf',     // Mejoras de rendimiento
        'test',     // Agregar o modificar tests
        'build',    // Cambios en sistema de build
        'ci',       // Cambios en CI/CD
        'chore',    // Tareas de mantenimiento
        'revert',   // Revertir commits anteriores
      ],
    ],

    /**
     * type-empty: no permite que el tipo de commit esté vacío
     * (feat, fix, docs, etc. obligatorio)
     * 
     * ✅ git commit -m "feat: agregar login"
     * ❌ git commit -m "agregar login"
     */
    'type-empty': [2, 'never'],

    /**
     * scope-empty: controla si el scope es obligatorio
     * 0 → deshabilitado, el scope es opcional
     * 
     * ✅ git commit -m "feat(auth): agregar login"
     * ✅ git commit -m "feat: agregar login"
     */
    'scope-empty': [0],

    /**
     * subject-empty: no permite que el mensaje del commit esté vacío
     * 
     * ✅ git commit -m "feat: agregar login"
     * ❌ git commit -m "feat:"
     */
    'subject-empty': [2, 'never'],

    /**
     * subject-case: controla la capitalización del mensaje siempre en minúsculas
     * 
     * ✅ git commit -m "feat: agregar login"
     * ❌ git commit -m "feat: Agregar login"  (mayúscula inicial, falla)
     */
    'subject-case': [2, 'always', ['lower-case']],

    /**
     * subject-full-stop: permite o no terminar el mensaje con punto
     * 0 → deshabilitado, se permite con o sin punto
     * 
     * ✅ git commit -m "feat: agregar login"
     * ✅ git commit -m "feat: agregar login."
     */
    'subject-full-stop': [0],

    /**
     * subject-min-length: establece el mínimo de caracteres en el mensaje
     * 
     * ✅ git commit -m "fix(api): corregir endpoint users"
     * ❌ git commit -m "feat: login"  (menos de 10 caracteres, falla)
     */
    'subject-min-length': [2, 'always', 10],

    /**
     * header-trim: no permite espacios al inicio o al final del mensaje de commit
     * 
     * ✅ git commit -m "feat: agregar login"
     * ❌ git commit -m " feat: agregar login"   (espacio al inicio, falla)
     * ❌ git commit -m "feat: agregar login "   (espacio al final, falla)
     */
    'header-trim': [2, 'always'],
  },
}