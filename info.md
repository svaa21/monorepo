# COMMANDS

### pnpm

```bash
pnpm --filter 'name' run 'command'
pnpm --filter 'name' add 'package'
pnpm --filter 'name' remove 'package'
```

# FUNDAMENTOS DE PROGRAMACIÓN

### 1. Introducción a la programación

- ¿Qué es la programación?
- Historia y evolución de los lenguajes de programación
- Tipos de lenguajes: bajo, medio y alto nivel
- Lenguajes compilados vs interpretados
- Algoritmos y diagramas de flujo
- Entornos de desarrollo (IDE)

### 2. Tipos de datos y operadores

- Tipos de datos: enteros, flotantes, booleanos, caracteres, cadenas
- Declaración e inicialización de variables
- Conversión de tipos (casting)
- Constantes
- Operadores:
  - Aritméticos
  - Relacionales
  - Lógicos
  - Asignación
  - Incremento y decremento

### 3. Estructuras de control

- Estructuras condicionales y repetitivas
- Sentencias de control

### 4. Funciones y procedimientos

- Definición y uso de funciones
- Parámetros y argumentos
- Retorno de valores
- Ámbito de variables (local vs global)
- Recursividad

### 5. Arreglos y estructuras de datos

- Arreglos (vectores)
- Arreglos multidimensionales (matrices)
- Cadenas de texto
- Listas

### 6. Programación orientada a objetos (POO)

- Clases y objetos
- Atributos y métodos
- Encapsulamiento
- Constructores
- Herencia

### 7. Buenas prácticas de programación

- Indentación
- Comentarios
- Nombres de variables y funciones
- Separación de lógica

# JAVASCRIPT

### 1. Introducción a JavaScript

- ¿Qué es JavaScript? Historia y evolución
- Diferencias entre JavaScript y Java
- El motor de JavaScript: V8(Chrome) - SpiderMonkey(Firefox)
- JavaScript en el navegador y en el backend (Node.js)
- Cómo incluir JavaScript en HTML (`<script>`)
- Herramientas básicas de desarrollo (editor de código, navegador, consola)

### 2. Variables y tipos de datos

- Declaración de variables: var, let, const
- Tipos de datos primitivos: number, string, boolean, null, undefined, symbol, bigint
- Conversión de tipos:
  - Number() - parseInt() - parseFloat()
  - String() - toString()
  - Boolean() - !!
    - Valores Falsy: false, 0, "", NaN, null, undefined,
    - Valores Truthy: true, 1, "0", "false", [], {}, function() {}
- Tipado dinámico en JavaScript
- Template literals ``

### 3. Operadores

- Operadores aritméticos: +, -, `*`, /, %
- Operadores de asignación: =, +=, -=, `*=`, /=
- Operadores de comparación: ==, ===, !=, !==
- Operadores lógicos:
  - || -> Devuelve el primer valor "truthy"
  - && -> Devuelve el primer valor "falsy"
  - ! -> Invierte el valor booleano
- nullish coalescing (??): Devuelve el primer valor que no sea null ni undefined
- Operadores de incremento y decremento: ++, --
- Operador Ternario: condición ? valor1 : valor2
- Spread operator (Expansion): ...
- Rest operator (Resto): ...

### 4. Estructuras de control

- Sentencias condicionales:
  - if, else if, else
  - switch
- Bucles:
  - for, for...in, for...of
  - while, do...while
- Sentencias de control de flujo: break, continue, return

### 5. Funciones

- Declaración de funciones:
  - Funciones Tradicionales -> function() {}
  - Funciones Anonimas
  - Arrow functions -> () => {}
- Parámetros y argumentos
- Funciones con retorno
- Ámbito (scope) y contexto (this)
- Closures: funciones anidadas que acceden a variables de fuera
- Funciones recursivas: funciones que se llaman a si mismas

### 6. Arrays y objetos

- Arrays: Colección ordenada de elementos
- Objetos: Colección de pares clave-valor
- Acceso a elementos
- Métodos comunes de Arrays
- Metodos dentro de objetos
- Destructuración

### 7. Manejo del DOM (Document Object Model)

- ¿Qué es el DOM?
- Selección de elementos
- Manipulación de contenido
- Modificación de estilos con JS
- Creación y eliminación de nodos
- Manejo de eventos

### 8. Manejo de Errores

- Tipos de errores en JavaScript:
  - SyntaxError, TypeError, ReferenceError, RangeError
- Clase de error personalizada
- Manejo de errores con try...catch y finally
- throw: Lanzar errores personalizados
- La consola del navegador
- Uso de depuradores (DevTools)

### 9. Programación orientada a objetos (POO)

- Objetos como estructuras de datos
- Clases en JavaScript (ES6)
- Constructores: funciones que se ejecutan al crear un objeto
- Métodos y propiedades: getters y setters
- Herencia con extends y super
- Encapsulamiento: privado, protegido, público

### 10. Objetos como estructuras de datos

- Nombres claros y descriptivos
- Indentación y espacios
- Evitar duplicar código
- Comentarios útiles
- Código limpio y ordenado
- Evitar funciones muy largas
- Usar linters o herramientas automáticas
- Control de versiones con Git (básico)

# REACT

### 1. Introducción a React

- ¿Qué es React y por qué usarlo?
- Historia y evolución de React
- SPA (Single Page Application) vs MPA
- Instalación del entorno:
  - Node.js y npm
  - Vite / Create React App (CRA)
- Estructura de un proyecto React moderno
- Primer componente y renderizado básico

### 2. Fundamentos de React

- JSX: sintaxis y reglas
- Componentes: Funcionales y de clase (énfasis en funcionales)
- Props y PropTypes
- State local con useState
- Ciclo de vida (comparación con useEffect)
- Eventos y manejo de inputs
- Lifting state up

### 3. Hooks en profundidad

- hooks: useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer
- Custom Hooks
- Reglas de los hooks

### 4. Componentes avanzados

- Composición de componentes
- Render props y HOC (solo para contexto histórico)
- Children y "slots"
- Fragments y Portals
- Error boundaries

### 5. Manejo de rutas con React Router

- Instalación y configuración
- Rutas anidadas y protegidas
- Parámetros en la URL
- Navegación programática (useNavigate)
- Lazy loading de rutas

### 6. Estado global y manejo de dato

- Context API
- Zustand
- Redux Toolkit
- Comparación: Zustand vs Redux vs Context
- Persistencia de estado

### 7. Consumo de APIs

- Fetch API y Axios
- useEffect con peticiones async
- Manejando loading, error y retries
- React Query (TanStack Query)
- SWR

### 8. Estilos en React

- CSS tradicional y modular
- Styled Components
- Tailwind CSS
- CSS-in-JS: pros y contras

### 9. Formulario y validación

- Formularios controlados y no controlados
- Validaciones con: Yup, Zod, Joi
- React Hook Form
- Formularios dinámicos y anidados

### 10. Testing en React

- Introducción a testing
- Jest y React Testing Library
- Pruebas de: componentes, eventos, formularios, hooks
- Mocks y pruebas de APIs

### 11. Optimización de rendimiento

- Evitar renders innecesarios
- Lazy loading y Suspense
- Memoización (React.memo, useMemo, useCallback)
- Virtualización con react-window

### 12. React y el ecosistema móvil/web

- React Native
- PWA con React
- Integración con herramientas externas: Firebase - Auth0 / Clerk para autenticación - Stripe para pagos

### 13. Autenticación y autorización

- Login, logout, rutas protegidas
- Tokens (JWT) y manejo seguro
- Librerías de autenticación moderna

### 14. DevOps y despliegue

- Build y producción con Vite
- Despliegue en: Vercel, Netlify, GitHub Pages

### 15. Buenas prácticas y patrones

- Arquitectura de carpetas
- Patrones de diseño en React
- Reutilización y escalabilidad

<!--
Módulo 16 (Opcional): Server Components y React 19+
React Server Components (RSC)
Server Actions
Suspense para datos
Migración y compatibilidad
Comparación con Next.js 14 App Router
-->
