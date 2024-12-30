### Intro
Básicmente, vamos a estar pasando datos entre componentes mediante las `props` que es una manera corta de propiedades.

### Data transfer in React

La informacion es transmitida desde componentes padres a sus hijos mediante las props. Esta transferencia de informacion es unidireccional, lo que significa que fluye en una sola direccion. Cualquier cambio hecho en la informacion va a afectar a componentes hijos que la esten usando, y no a los padres o componentes hermanos. Esta restriccion sobre el flujo de la informacion nos dá más control sobre, significando menos errores en nuestra app.

### Using props in React

Porque esta caracteristica es util? consideremos el siguiente ejemplo, tenemos un componente `Button`, el cual es renderizado multiples veces dentro de nuestro componente `App` (está sindo reutilizado)

```jsx
function Button(){
    retun (
        <button>Click Me!</button>
    );
}

export default function App(){
    return (
        <div>
            <Button />
            <Button />
            <Button />
        </div>
    );
}
```

Al hacer esto nos podemos encontrar con un problema, por ejemplo, si quisieramos que nuestro segundo boton diga "Dont click me!", en este caso, con nuestra solucion, deberiamos crear un segundo componente con un texto diferente, y si se dieran muchos casos ya no serian tan reutilizables.

Ahora veamos como usando props, podemos tener cualquier numero de variaciones con *un solo* componente:

```jsx
function Button(props){
    const buttonStyle = {
        color: props.color,
        fontSize:props.fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}

export default function App(){
    return (
        <div>
            <Button text="Click Me!" color="blue" fontSize={12}>
            <Button text="Dont lick Me!" color="red" fontSize={12}>
            <Button text="Click Me!" color="blue" fontSize={12}>
        </div>
    )
}
```

Algunas cosas sucediendo acá:

- El componente funcional `Button` ahora recive como argumento `props`. Las propiedades individuales son referenciadas dentro del componente mediante `props.propertieName`.
- Cuando renderizamos al componente `Button` dentro de `App`, los valores de cada `prop` son definidos en cada componente.
- Los estilos inline son generados dinamicamente y aplicados al elemento `button`.

### Prop destructuring

Un patron muy común que vamos a ver en React es el de prop [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Desempacar nuestros componentes props en los  argumentos nos permite un código más consiso y reúsable. Analicemos el siguiente ejemplo:

```jsx
function Button({text, color, fontSize}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>;
}


export default functino App(){
    return (
        <div>
            <Button text="Click Me!" color="blue" fontSize={12} />
            <Button text="Don't Click Me!" color="red" fontSize={12} />
            <Button text="Click Me!" color="blue" fontSize={20} />
        </div>
    );
}

```

### Default props

Para solucionar repetir codigo al momento de definir los componentes Button dentro de App podemos setear algunos valores por defecto. Además de dejar de repetir el redefinimiento de estas propiedas y a su vez protejer a nuestra aplicacion de reicibir valores indefinidos, podemos definir valores por defecto en los parametros:

```jsx
function Button({ text: "Click me!", color = "Blue", fontSize= 12 }){
    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>;
}

export default function App() {
    return (
      <div>
        <Button />
        <Button text="Don't Click Me!" color="red" />
        <Button fontSize={20} />
      </div>
    );
}
```

Como podemos observar, solamente debemos proveerle propiedades a un boton cuando renderizamos dentro de App, ya que este difiere de las propiedades por defecto.

Tambien en algunos codebases podemos encontrarnos con `defaultProps`, que traadicionalmente fue usado para setear valores por defecto para las props:

```jsx
function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12
};

export default function App() {
  return (
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}
```

React hoy en día prefiere las parametros por default, pero la tecnica anterioir sigue siendo útil cuando trabajamos con componentes de clase o con códigos base antiguos.

### function as props

Además de pasar variables a través de los componentes hijos mediante props, también podemos pasarles funciones. Consideremos el siguiente ejemplo:


```jsx

function Button({ text = "Click me!", color = "blue", fontSize = 12, handleClick}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize
    }

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function App(){
    const handleButtonClick = ()=>{
        window.location.href = "https://www.google.com";
    };

    return (
        <div>
            <Button handleClick={handleButtonClick} />
        </div>
    );
}

```

- La funcion `handleButtonClick` es definida en *el componente padre* (en este casi en `App()`)
- Una referencia a esta funcion es pasada como el valor para la propiedad `handleClick` en el componente `Button`
- La funcion es recivida en `Button` y es llamada en el evento click

Algunas cosas a destacar:

- Solo pasamos una referencia a la funcion, no agregamos los parentesis ya que esto invocaria a la funcion en el momento de renderizar al componetne `Button`
- Cada `Button` que llame a esta funcion va a navegar a la misma página. Podemos hacer un refactor a la funcion y proveer un argumento dentro de `handleButtonClick` para personalizar esta funcionalidad

```jsx
export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
};


//la url se especifica al momento de renderizar el boton:


    return (
        <div>
          <Button handleClick={() => handleButtonClick('www.theodinproject.com')} />
        </div>
    ); 
}
```


Cuando proveemos un argumento a la funcion **no** podemos escribir solamente `onClick={handleClick('theodinproject.com')}`, debemos asociar una referencia a una funcion anonima la cual luego llama a la funcion con el argumento.

[more](https://react.dev/learn/passing-props-to-a-component)

> Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

> Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>

Recap
To pass props, add them to the JSX, just like you would with HTML attributes.
To read props, use the function Avatar({ person, size }) destructuring syntax.
You can specify a default value like size = 100, which is used for missing and undefined props.
You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
Props are read-only snapshots in time: every render receives a new version of props.
You can’t change props. When you need interactivity, you’ll need to set state.