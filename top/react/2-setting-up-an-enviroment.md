## Intro

Ahora que sabemos que es react y más o menos sabemos dónde usarlo, es tiempo de saber como.

## Many paths

Hay muchas maneras de empezar a usar react en nuestros proyectos. Ya sea añadiendo una etiqueta `<script>` que nos brinda React desde un [CDN](https://en.wikipedia.org/wiki/Content_delivery_network). O bien usando *toolchains* de frameworks que son altamente configurables y permiten una alta escalibilidad y optimizacion.

Algunos ejemplos de estos toolchains incluyen:

- [Vite react configuration](https://vitejs.dev/)
- [NextJs](https://nextjs.org/)
- *y demás...*

Necestimos de estas toolchains porque React es complejo. Si bien podriamos hacerlo nosotros mismo es dificil. También, antes de empezar a escribir código necesitamos tener configuradas al menos lo siguiente:

- Package Management(NPM, Yarm)
- Module Building(Webpack, vercel)
- Compilation (Babel)
- React en sí mismo

Todo esto, y a veces mucho más es necesario para tener un entorno listo y corriendo.

### Simplificando el proceso

Para aprender podemos hacerlo con una sola linea de la terminal. Vamos a usar la CLI de *Vite* para crear una plantilla de un proyecto de React. Necesita una minima configuracion y provee herramientas extremadamente utiles, permitiendonos concentrarnos en el aprendizaje.

### Creando una APP React

Para crear nuestra primer app React nos movemos a nuestra carpeta de proyectos y ejecutamos el siguiente comando:

```bash
npm create vite@latest my-first-react-app -- --template react
```

Una vez que el comando se ha ejecutado, nos imprime los proximos pasos a seguir:

```bash
cd my-first-react-app
npm install
npm run dev
```

Si todo salio bien, ir a la direccion `http://localhost:5173/` nos va a mostrar una página hecha con react.

### Delving deeper

Miremos más de cerca a nuestro nuevo proyecto. Dentro vamos a encontrar algunas carpetas, así tambien como los archivos `package.json`, `package-lock.json`, `.gitignore` y `README.md`.

La carpeta `public` es dónde van a ir los recursos estaticos relacionados a nuestra app. Lo que podria incluir imagenes, iconos e informacion de los navegadores.

Dentro de la carpeta `src` es dónde vamos a encontrar el código que ejecuta nuetra app. El archivo `main.jsx` sirve como el entry point de la aplicacion. Si lo abrimos podemos ver lo siguiente:

```jsx
import {StricMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElmentById("root")).render(

    <StrictMode>
        <App />
    </SctrioctMode>

);
```


1. Importamos el `StrictMode` y `CreateRoot` desde `react` y `react-dom` respectivamente.
2. Importamos el componente `App` desde `App.jsx`, para poder renderizarlo dentro del DOM.
3. Importamos algo de estilo CSS (como lo que vimos en el material de webpack)
4. Creamos  un obteto `root` invocando al método `createRoot` con un elemento para nuestro `index.html`.
5. Invocamos al método `render`, el cual está atado a nuestro objeto `root`, con una sintaxis  *interesting-looking* dentro de los parentesis.

### Developer Tools

A medida que trabajemos con React, sin duda nuestro proyecto va a ir creciendo y creciendo, incluyendo cada vez más componentes con niveles de funcionalidad que van en incremento.

Cuando esto pasa, es muy util ser capaces de trackear las *partes moviles* dentro de nuestra app para entender y debugguer nuestro código. Para esto tambien se recomienda una extension llamada React Developers Tools.

### Knowldge check

1. What are some of the ways we can start a new React project?

    Hay distintas maneras, la que usamos ene este curso es con vite

1. Why should we initially be using pre-made toolchains instead of making our own?

    poque sería muy complicado sino, deberiamos setear herramientas como un webpack, y muchas más segun el proyecto

1. What is Vite and why would we use it?

    Permite tener un entorno de prueba rápdiamente con un comando o dos si queremos crear un nuevo template

1. What command can we run to scaffold a new React project using Vite?

```bash
npm create vite@latest my-first-react-app -- --template react
```


1. What is in the public folder?

    Es la carpeta dónde van los recursos estaticos

1. What is in the src folder?

    Es dónde el va el código que va a ejecutar nuestra app

1. Why are the React Developer Tools useful?

