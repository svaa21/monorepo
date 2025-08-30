import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/dist-electron/**'
    ]
  },

  // {
  //   languageOptions: {
  //     parserOptions: {
  //       tsconfigRootDir: import.meta.dirname
  //     }
  //   }
  // },

  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs['recommended-latest'],
  pluginReactRefresh.configs.vite,
  { settings: { react: { version: '19.1.0' } } },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    rules: {
      // Prohíbe el uso de strings con +
      'prefer-template': 'error',

      // Requiere espacios alrededor de llaves de objetos
      'object-curly-spacing': ['error', 'always'],

      // Prohíbe el uso de JSX sin importar React
      'react/react-in-jsx-scope': 'off',

      // Prohíbe el uso de var
      'no-var': 'error',

      // Requiere indentación de 2 espacios
      indent: ['error', 2, { SwitchCase: 1 }],

      // Requiere comillas simples, permite dobles para evitar escapes
      quotes: ['error', 'single', { avoidEscape: true }],

      // Prohíbe el uso de Array constructor
      '@typescript-eslint/no-array-constructor': 'off',

      // Prohíbe variables declaradas pero no utilizadas
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],

      // Prohíbe variables declaradas pero no utilizadas
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],

      // Requiere espacios alrededor de palabras clave (if, else, for, etc.)
      'keyword-spacing': 'error',

      // ? Requiere espacio antes de paréntesis en funciones
      // ? 'space-before-function-paren': ['error', 'always'],

      // Requiere === y !== en lugar de == y !=, excepto para null
      eqeqeq: ['error', 'always', { null: 'ignore' }],

      // Requiere espacios alrededor de operadores infijos (+, -, *, etc.)
      'space-infix-ops': 'error',

      // Sin espacio antes de coma, con espacio después
      'comma-spacing': ['error', { before: false, after: true }],

      // Estilo de llaves "1 true brace style", permite línea única
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // Requiere llaves para declaraciones de múltiples líneas
      curly: ['error', 'multi-line'],

      // Requiere manejo de errores en callbacks
      'handle-callback-err': 'error',

      // Prohíbe el uso de variables no declaradas
      'no-undef': 'error',

      // Máximo 1 línea vacía, 0 al final del archivo
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // ? Salto de línea antes del operador, especialmente para operador ternario
      // ? 'operator-linebreak': [
      // ?   'error',
      // ?   'before',
      // ?   { overrides: { '?': 'before', ':': 'before' } }
      // ? ],

      // Prohíbe múltiples declaraciones de variables en una línea
      'one-var': ['error', 'never'],

      // Prohíbe asignaciones en condiciones, excepto entre paréntesis
      'no-cond-assign': ['error', 'except-parens'],

      // Requiere espacios dentro de llaves de bloque de una línea
      'block-spacing': 'error',

      // Requiere nombres de variables en camelCase
      camelcase: 'error',

      // Prohíbe comas finales en objetos y arrays
      'comma-dangle': ['error', 'never'],

      // Requiere comas al final de la línea, no al principio
      'comma-style': ['error', 'last'],

      // Coloca el punto con la propiedad en notación de punto
      'dot-location': ['error', 'property'],

      // Requiere nueva línea al final del archivo
      'eol-last': ['error', 'always'],

      // Sin espacios entre nombre de función y paréntesis
      'func-call-spacing': ['error', 'never'],

      // Sin espacio antes de :, con espacio después en objetos
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],

      // Requiere mayúscula inicial para constructores
      'new-cap': 'error',

      // Requiere paréntesis al invocar constructor con new
      'new-parens': 'error',

      // Requiere getter y setter en pares para propiedades
      'accessor-pairs': 'error',

      // Requiere llamada a super() en constructores de clases derivadas
      'constructor-super': 'error',

      // Prohíbe usar constructor Array()
      'no-array-constructor': 'error',

      // Prohíbe uso de arguments.caller y arguments.callee
      'no-caller': 'error',

      // Prohíbe reasignación de declaraciones de clase
      'no-class-assign': 'error',

      // Prohíbe reasignación de variables const
      'no-const-assign': 'error',

      // Prohíbe condiciones constantes, excepto en loops
      'no-constant-condition': ['error', { checkLoops: false }],

      // Prohíbe caracteres de control en expresiones regulares
      'no-control-regex': 'error',

      // Prohíbe declaraciones debugger
      'no-debugger': 'error',

      // Prohíbe eliminar variables con delete
      'no-delete-var': 'error',

      // Prohíbe argumentos duplicados en funciones
      'no-dupe-args': 'error',

      // Prohíbe miembros duplicados en clases
      'no-dupe-class-members': 'error',

      // Prohíbe claves duplicadas en objetos
      'no-dupe-keys': 'error',

      // Prohíbe casos duplicados en switch
      'no-duplicate-case': 'error',

      // Prohíbe importaciones duplicadas del mismo módulo
      'no-duplicate-imports': 'error',

      // Prohíbe clases de caracteres vacías en regex
      'no-empty-character-class': 'error',

      // Prohíbe patrones vacíos en destructuring
      'no-empty-pattern': 'error',

      // Prohíbe uso de eval()
      'no-eval': 'error',

      // Prohíbe reasignación de parámetros de excepción en catch
      'no-ex-assign': 'error',

      // Prohíbe extender objetos nativos
      'no-extend-native': 'error',

      // Prohíbe bind() innecesario
      'no-extra-bind': 'error',

      // Prohíbe conversiones booleanas innecesarias
      'no-extra-boolean-cast': 'error',

      // Prohíbe paréntesis extra alrededor de funciones
      'no-extra-parens': ['error', 'functions'],

      // Prohíbe fallthrough en casos de switch sin break
      'no-fallthrough': 'error',

      // Prohíbe decimales flotantes (.5 en lugar de 0.5)
      'no-floating-decimal': 'error',

      // Prohíbe reasignación de declaraciones de función
      'no-func-assign': 'error',

      // Prohíbe asignaciones a variables globales de solo lectura
      'no-global-assign': 'error',

      // Prohíbe eval() implícito (setTimeout con string)
      'no-implied-eval': 'error',

      // Prohíbe declaraciones de función/variable en bloques anidados
      'no-inner-declarations': 'error',

      // Prohíbe expresiones regulares inválidas
      'no-invalid-regexp': 'error',

      // Prohíbe espacios en blanco irregulares
      'no-irregular-whitespace': 'error',

      // Prohíbe uso de la propiedad __iterator__
      'no-iterator': 'error',

      // Prohíbe etiquetas que sombreen variables
      'no-label-var': 'error',

      // Prohíbe declaraciones etiquetadas
      'no-labels': 'error',

      // Prohíbe bloques innecesarios
      'no-lone-blocks': 'error',

      // Prohíbe mezclar espacios y tabs para indentación
      'no-mixed-spaces-and-tabs': 'error',

      // Prohíbe múltiples espacios consecutivos
      'no-multi-spaces': 'error',

      // Prohíbe strings multilínea con \
      'no-multi-str': 'error',

      // Prohíbe usar new sin asignar resultado
      'no-new': 'error',

      // Prohíbe usar constructor Function
      'no-new-func': 'error',

      // Prohíbe usar constructor Object
      'no-new-object': 'error',

      // Prohíbe usar new con require
      'no-new-require': 'error',

      // Prohíbe usar new con Symbol
      'no-new-symbol': 'error',

      // Prohíbe usar new con wrappers primitivos
      'no-new-wrappers': 'error',

      // Prohíbe llamar objetos globales como funciones
      'no-obj-calls': 'error',

      // Prohíbe literales octales
      'no-octal': 'error',

      // Prohíbe secuencias de escape octales en strings
      'no-octal-escape': 'error',

      // Prohíbe concatenación de strings para paths (usar path.join)
      'no-path-concat': 'error',

      // Prohíbe uso de __proto__
      'no-proto': 'error',

      // Prohíbe redeclaración de variables
      'no-redeclare': 'error',

      // Prohíbe múltiples espacios en regex
      'no-regex-spaces': 'error',

      // Prohíbe asignaciones en return, excepto entre paréntesis
      'no-return-assign': ['error', 'except-parens'],

      // Prohíbe autoasignaciones (a = a)
      'no-self-assign': 'error',

      // Prohíbe uso del operador coma
      'no-sequences': 'error',

      // Prohíbe sombrear nombres restringidos (undefined, etc.)
      'no-shadow-restricted-names': 'error',

      // Prohíbe arrays dispersos [1,,3]
      'no-sparse-arrays': 'error',

      // Prohíbe caracteres tab
      'no-tabs': 'error',

      // Prohíbe sintaxis de template literal en strings normales
      'no-template-curly-in-string': 'error',

      // Prohíbe this/super antes de llamar super() en constructores
      'no-this-before-super': 'error',

      // Prohíbe lanzar literales como excepciones
      'no-throw-literal': 'error',

      // Prohíbe espacios al final de líneas
      'no-trailing-spaces': 'error',

      // Prohíbe inicializar variables con undefined
      'no-undef-init': 'error',

      // Prohíbe condiciones de loop no modificadas
      'no-unmodified-loop-condition': 'error',

      // Prohíbe operadores ternarios innecesarios
      'no-unneeded-ternary': 'error',

      // Prohíbe código inalcanzable
      'no-unreachable': 'error',

      // Prohíbe declaraciones de control en finally
      'no-unsafe-finally': 'error',

      // Prohíbe negación de lado izquierdo en operadores relacionales
      'no-unsafe-negation': 'error',

      // Prohíbe llamadas innecesarias a .call() y .apply()
      'no-useless-call': 'error',

      // Prohíbe propiedades computadas innecesarias en objetos
      'no-useless-computed-key': 'error',

      // Prohíbe secuencias de escape innecesarias
      'no-useless-escape': 'error',

      // Prohíbe renombrado innecesario en import/export/destructuring
      'no-useless-rename': 'error',

      // Prohíbe espacios antes de propiedades
      'no-whitespace-before-property': 'error',

      // Prohíbe declaraciones with
      'no-with': 'error',
      'object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: true }
      ],

      // Requiere nueva línea entre propiedades de objeto, permite todas en una línea

      // Prohíbe líneas vacías al inicio/final de bloques
      'padded-blocks': ['error', 'never'],

      // Sin espacios después de ... en rest/spread
      'rest-spread-spacing': ['error', 'never'],

      // Sin espacio antes de ;, con espacio después
      'semi-spacing': ['error', { before: false, after: true }],

      // Requiere espacio antes de llaves de bloque
      'space-before-blocks': 'error',

      // Sin espacios dentro de paréntesis
      'space-in-parens': ['error', 'never'],

      // Requiere espacios con operadores unarios de palabra, sin espacios con símbolos
      'space-unary-ops': 'error',

      // ? Requiere espacio después de // o /* en comentarios
      // ? 'spaced-comment': ['error', 'always'],

      // Sin espacios dentro de llaves de template literals
      'template-curly-spacing': ['error', 'never'],

      // Requiere usar isNaN() para verificar NaN
      'use-isnan': 'error',

      // Requiere comparaciones válidas con typeof
      'valid-typeof': 'error',

      // Requiere envolver expresiones de función inmediatamente invocadas
      'wrap-iife': ['error', 'any'],

      // Requiere espacios alrededor de * en yield*
      'yield-star-spacing': ['error', 'both'],

      // Prohíbe condiciones yoda (literal === variable)
      yoda: 'error',

      // Prohíbe punto y coma al final de declaraciones
      semi: ['error', 'never'],

      // Prohíbe declaraciones multilínea confusas
      'no-unexpected-multiline': 'error'
    }
  }
])
