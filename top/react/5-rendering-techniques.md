### Rendering a list of elements in JSX

Digamos que queremos renderizar un componente que lista diferentes animales:

```jsx
function App(){
    return (
        <div>
            <h1>Animals: </h1>
            <ul>
              <li>Lion</li>
              <li>Cow</li>
              <li>Snake</li>
              <li>Lizard</li>
            </ul>
        </div>
    );
}
```
De esta manera es perfectamente aceptable, pero si quisieramos renderizar muchos más de 4 sería una tarea tediosa. Por lo que la mayoria de las veces vamos a depender de alguna estructura de datos, como un arreglo.

```jsx
function App(){
    const animals = ["Lions", "Cow", "Snake", "Lizard"]

    return (
        <div>
            <h1>Animals:</h1>
            <ul>
                {animal.map((animal)=> {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </div>
    );
}
```

Definimos una arreglo llamado `animals`. Y dentro de nuestro JSX usamos la funcion `map` para retornar un nuevo arreglo de elementos `li`, añadiendo `animal` como su texto. Esto deberia escribir lo mismo que en el ejemplo anterior, debido a que JSX tiene la habilidad de automaticamente renderizar arreglos. El siguiente código es identico:


```jsx
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  );
}
```

> En la próxima leccion se explica bien que hace `key`, pero en resumen permite a React conocer la identidad de cada elemento en la lista. React debe conocer esta informacion si estamos manejando una lista dinamica dónde añadimos o removemos elementos dinamicamente. Ya que estamos usando una lista dinamica en este caso no importa tanto.

### Rendering a list of components in JSX

> En esta parte usamos los `props` que se ven en la póxima leccion, pero en resumen son argumentos que son pasados entre componentes.


```jsx

function ListItem(props){
   return <li>{props.animal}</li>
}

function List(props){
  return (
    <ul>
       {props.animals.map((animal)=> {
           return <ListItem key={animal} animal={animal}/>
       })}
    </ul>
  );
}


function App(){
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
       <h1>Animals:</h1>
       <List animals={animals} />
    </div>
  );
}
```


Movimos nuestra lista `<ul>` a un componente diferente llamado `<List />`. Sigue retornando al elemento ul, pero podemos hacer mucho más con el como componente.

Este componente acepta un `prop`, el cual es un objeto que contiene a la propiedad `animals` que definimos como propiedad cuando escribimos `<List animals={animals} />`. Notemos que podemos llamarlo de cualquier manera, por ejemplo: `<List animalList={animals}>`. Igualmante necesitamos pasar la propiedad animals, pero ahora vamos a usar `props.animalList` en vez de `props.animals`.

Tambien creamos un componente diferente para los elementos `<li>` llamado `<ListItem />`, el cual también acepta `props` y usa `props.animals` para renderizar el texto. Ahora deberia renderizar la misma cosa.

### Conditionally rendering UI

Tomemos desiciones dentro de nuestro componente, por ejmeplo renderizar los animales cuyo nombre comiencen con la letra "L". Para esto vamos a usar algun tipo de expresion condicional. Vamos a trabajar en el ejemplo anterior pero por temas de brevedad vamos a sacar el componente `<ListItem/>`.

#### Using the ternary operator

Una manera de renderizar un elemento condicionalmente es con un operador *ternary*, usando un valor booleano para decidir que renderizar.

```jsx

function List(props){
  return (
    <ul>
      {props.animals.map((animal)=>{
        return animal.startWith("L") ? <li key={animal}>{animal}</li>:null;
      })}
    </ul>
  );
}

function App(){
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
       <h1>Animals</h1>
       <List animals={animals} />
       <!--Esto se convierte en props.animals del otro lado, y de este lado además de definir la propiedad le pasamos de valor el arreglo que creamos al principio de la funcion App-->

    </div>
  );
}

```

> Usamos el método de String `startWith` para chequear si el animal comienza con la letra L. Este método retorna verdadero o falso. En este caso si es falso retornarmos `null` (en el map, despues de chequear) para indicar que el elemento no va a ser renderizado.


#### Using the && operator

Otra manera rápida de renderizado condicional es usar el operador `&&`:

```jsx
function List(props){
  return(
   <ul>
      {props.animals.map((animal)=>{
        return animal.startWith("L") && <li key={animal}>{animal}</li>;
      })}
   </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```
En este caso aprovechamos el valor de retorno de `startWith` con el operador `&&`. Si el resultado de la funcion es `true`, entonces retorna el segundo operando, el cual es el elemento `<li>` y lo renderiza. Si el resultado es `false` simplemento lo ignora.

> Number with logical AND - a common pitfall

> Cuando usamos && para la renderizacion condicional, no debemos poner números en el lado izquierdo. Más dettalles [acá](https://react.dev/learn/conditional-rendering#logical-and-operator-)

#### Other ways to render Conditionally

También podemos usar las sentencias `if`, `if/else`, y `switch` para renderizar condicionalmente.

Esta vez tenemos dos codiciones:

1. Chequeamos si la propiedad `animals` es provista.
1. Chequeamos si la longitud (`length`) es mayor a 0.

En el futuro vamos a lidiar con listas muy a menudo, por lo que debemos considerar que renderizar si las listas estan vacías o no existen.

```jsx

function List(props){
  if(!props.animals){
    return <div><i>Loading...</i> </div>
  }

  if(props.animals.length === 0){
    return <div><i>No hay animales en la lista!</i> </div>
  }


  return (
      <ul>
         {props.animals.map((animal)=>{
          return <li key={animal}>{animal}</li>;
         })}
      </ul>
  );

  function App(){
    const animals = [];

    return (
      <div>
         <h1>Animals:</h1>
         <List animals={animals}>
      </div>
    );
  }
}

```

En nuestro componente `<List/>` tenemos dos decalaraciones `if` actuando como un *guard* que inmediatamente retornan un elemento basado en su condicion.

## Assignament

1. React [docs](https://react.dev/learn/conditional-rendering) for conditional rendering

> In practice, returning null from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX.

Para evitar duplicar código haciendo if statements:

> JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.

>Instead of this:
>
```jsx
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
```
>You can write this:
```JSX
  return (
    <li className="item">
      {isPacked ? name + ' ✅' : name}
    </li>
  );
```
> Recap
- In React, you control branching logic with JavaScript.
- You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />, otherwise <B />`.

- In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”.

- The shortcuts are common, but you don’t have to use them if you prefer plain if.


> En caso de necesitar renderizar condicionalmente me gusto más esta opcion, porque permite hacer más cosas y editar como queremos que se renderice el elemento según la condicion:

```jsx
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```
> hacer los challenges



2. Rendering list [article](https://react.dev/learn/rendering-lists)

> En este articulo se vé como usar los métodos `.filter()` y `.map()` para filtrar y transformar nuestros  arreglos de datos en *arreglos de componentes*. 

- How to render components from an array using JavaScript’s map()
- How to render only specific components using JavaScript’s filter()
- When and why to use React keys


Digamos que tenemos una lista de contenido:

```html
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

La única diferencia entre estos items de lista es su contenido, sus datos. Seguido vamos a necesitar mostrar varias instancias del mismo componente usando diferentes datos cuando construimos interfaces: desde lista de comentarios a galerias de imagenes de perfil. En estas situaciones, podemos almacenar estos datos en arreglos u objetos de JavaScript y usar metodos como `.map()` o `.filter()` para renderizar una ***lista de componentes a partir de ellos***.

> Todavia no me queda claro si es una lista de componentes al ser una instancia del mismo componente o es una lista de componentes porque estamos trabajando con elementos `<li>`

Aquí un corto ejemplo de como generar una *lista de componentes*:

1. Movemos los datos a arreglos:

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. Mapeamos a los miembros de `people` a un *nuevo arreglo de nodos JSX`, llamado `listItem`:

```jsx

const listItem = people.map(person => <li>{person}</li>);

```

3. retornamos `listItem` de nuestro componente envuelto en etiquetas `<ul>`:

```jsx

return <ul>{listItem}</ul>;

```

Y este seria el resultado:

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

Esto nos retorna un warning en la consola:

> Warning: Each child in a list should have a unique “key” prop.

**Filtering arrays of items**

Esta informacion puede estar incluso más estructurada.


```jsx

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
},{
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profesion: 'chemist',
}, {

  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',

}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}]

```

digamos que queremos mostrar únicamente a las personas cuya profesion sea `'chemist'`. Podemos usar el metodo `filter()` para retornar a estas personas. Este método toma un arreglo de items, los pasa a través de un "test" (una funcion que retorna true o false) y retorna un nuevo arreglo de sólo esos items que hayan pasado el test.

Para este caso de ejemplo, la funcion "test" sería algo como: `(person) => person.profession === 'chemist'`.

1. Creamos un nuevo arreglo de personas "chemist", llamando a la funcion `filter`:

```jsx
const chemists = people.filter( person => 
  person.profession === 'chemist'
);
```

2. Ahora mapeamos sobre `chemists`:
```jsx
const listItems = chemists.map( person => 
<li>
   <img
     src={getImageUrl(person)}
     alt={person.name}
   />

   <p>
      <b>{person.name}:</b>
      {' '+ person.profession + ' ' }
      known for {person.accomplishment}
   </p>
</li>
);
```

3. Por último reotornamos el `listitem` desde nuestro componente:

```jsx
return <ul>{listItem}</ul>
```

> Cada "componente" o lo que genere el `map()` se guarda como un objeto con un monton de propiedades

**Keeping list items in order with `key`**

Necesitamos darle a cada item del arreglo una `key`- un string o número que identifica a cada elemento en el arreglo:

```jsx
<li key={person.id}>...</li>
```

Las keys le indican a React que elementos del  arreglo corresponden a cada componente, para despues hacerlos coincidir.

Esto es importante si los items de nuestro arreglo se pueden mover (por ejemplo debido a un ordenamiento), ser insertados o eliminados. Una `key` *bien-elegida* ayuda a React a inferir que es lo que pasó y hacer las actualizaciones correctas en el DOM.

En vez de generar las llaves en el momento, debemos incluirlas en nuestros datos:


> Ejemplo de data.js, dónde se genera el arreglo `people`
```jsx

export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];


```

**Where to get your key**

Diferentes fuentes de datos proveen diferentes fuentes para las keys:

- **Data from a database**: Si nuestros datos vienen de una base de datos, podemos usar las ids/keys que son unicas por naturaleza

- Locally generated data: Si nuestros datos son generados y persistidos de manera local (poir ejemplo notas en una aplicacion de tomado de notas), usamos un contador incremental, `crypto.randomUUID()` o un paquete como `uuid` cuando creamos items.

**Rules of Keys:**

- Deben ser unicas *entre hermanos*:  es decir, pueden haber dos keys iguales pero en ***diferentes arreglos***.
- No deben cambiar: Por lo que no debemos generarlas mientras renderizamos.

**Why does React need keys?**

Imaginemos que los archivos en nuestro escritorio no tienen nombre. En vez de eso, los manejamos por el orden. Nos podemos acostumbrar a eso, pero una vez que eliminamos un archivo puede ser un poco confuso. Los nombres de los archivos, así como las keys en JSX cumplen un rol similar. Permiten identificar de manera unica a un item de sus hermanas/os. Una keys bien elegida da más informacion sobre la posicion del item dentro del arreglo. Incluso si la posicion cambia debido a un reordenamiento, la llave permite identificar a un elemento durante su ciclo de vida.

Recap
On this page you learned:

How to move data out of components and into data structures like arrays and objects.
How to generate sets of similar components with JavaScript’s map().
How to create arrays of filtered items with JavaScript’s filter().
Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.

> Hacer ejercicios


Knowledge check
The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

How do you render a list of elements/components in JSX?
What are the ways you could render UI conditionally?
How would you conditionally return JSX?