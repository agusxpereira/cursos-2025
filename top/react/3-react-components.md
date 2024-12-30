### Qué es un componente React?

La belleza de React rádica en que nos permite dividir una UI en bloques reutilizables, a los que nos referimos como componentes. La siguiente imagen nos dá una idea de como hacer eso en una app muy simple:

![display](./imgs/c.png)

Este ejemplo podria ser divido en los siguiente componentes: 

- `App`: Representa a nuestra aplicacion principal y va a ser el "padre" de todos los demás componentes,
- `Navbar`: representa a la nav bar.
- `MainArticle`: que va a ser el componente que va a renderizar nuestro contenido principal.
- `NewsletterForm`: que va a ser el componente que permita al usuario introducir su email para recibir newsletter semanales.

Pensemos en estos bloques como ***funciones Javascript*** que van a tomar algun tipo de input y van a devolver un elemento React.

### How to create Components:

Para empezar a trabajar con componentes, empezamos creando *functional components*. Que son básicamente funciones JavaScript:

```jsx
function Greeting(){
    return <h1>&quot; I swear by my pretty floral bonnet, i will end you.&quot;</h1>;
}
```

Esto es una funcion JavaScript que *retorna JSX*. Ahora debemos abrir nuestro proyecto y crear el un nuevo archivo llamado `Greeting.jsx`, y en ese archivo creamos nuestro propia componente funcional. 

Los componentes(osea digamos, las funciones) deben estar capitalizados (es decir deben comenzar en mayusculas) o no van a funcionar como lo esperamos.

> HTML escape code

>In the above example, *&quot* is an escape code we use to render ". Your linter will greet you with an error if you use regular quotes. You can use this LambdaTest tool for escaping HTML characters if you run into such errors, or you can read more about HTML escape codes.

### What is HTML doing in my JavaScript?

Es JSX. Aprendemos más de esto en las proximas lecciones.

### Where do components live

Recordemos que nuestro componente está en un archivo propio. Esto lo hace independiente del resto del código. Dicho esto, queremos que los componentes usen funcionalidad creada en cualquier otro lado. ¿Como podemos hacerlo? con `import` y `export`. Por un largo tiempo fue necesario importar React en los archivos javascript que usan componentes React. Pero desde la version 17.0 esto ya no es necesario.

Exportemos nuestro nuevo componente para que los componentes padre puedan usarlo como hijo en nuestro proyecto:

```jsx

function Greeting(){
    return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
}

export default Greeting;
```

`main.jsx` todavía no conoce este componente(funcion) que estamos exportando, por lo que es necesario importarlo. En el proyecto ejemplo reemplazamos al componetne App (de la funcion Render) con nuestro componente para que lo renderice. Al final tiene que quedar algo así:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import "./index.css";
```

Cuando JSX es parseado, React usa la funcion capitalizada para diferenciar una etiqueta HTML y una instancia de un componente React. En cambio `</greeting>` va a ser interpretado como un elemento HTML normal.

creamos e importamos nuestro primer componente :)

### Assignaments

[Export Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#description)