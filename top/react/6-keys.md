### Why does React need keys?

Cuando veamos la seccion de pre-renderizado se entiende mejor la importancia de  las keys, que son un tipo especial de `props`.

En las lecciones anterioires para renderizar listas, usamos el método `.map()` para iterar sobre un areglo de datos y retornar una lista de elementos. Ahora imaginemos que cualquier elemento de la lista vaya a cambiar, como sabria React cual item actualizar?

Si la lista va a cambiar puede suceder una de estas dos cosas:

1. re renderizamos la lista completa, o:
2. buscamos a los items que cambiaron y renderizamos estos especificamente

Asumiendo que queremos hacer la segundo opcion, necesitamos algo para hacer seguimiento a estos items. Esto lo logramos usando la palabra clave `key`.

Cuando la lista es actualizada por cualquier razon (ya sea por un server o por un usuario especifico interactuando) React matchea las keys de cada item previo a la lista actualizada. Si hay algun cambio, React solo va a actualizar los items que han cambiado.

A medida que las keys se mantengan unicas y consistentes, React puede manejar del DOM de manera efectiva y eficiente.

### Using keys

> En esta parte estamos usando los `props`, y aprendemos mejor de este tema en la próxima leccion. Por ahora debemos quedarnos con que los props son argumetnos que son pasados a componentes

Las keys son pasadas a componentes o a un elemento del DOM mediante las props. Ya deberia resultarnos familiar esta sintaxis:

```jsx
<Component key={keyValue} />
//or

<div key={keyValue}/>

//Si no me equiovo despues se accede asi;

//key.keyValue


```

Ahora la pregunta es: ¿que debemos usar como key para cada elemento? Idealmente deberia ser algun tipo de identificador unico para cada uno. Por ejemplo la mayoria de las base de datos añaden un id a cada elemento que contengan de manera automatica. Si lo hacemos nosotros es buena practica asignar un `id` unico para cada item. Podemos usar una funcion para esto llamada  [crypto.randomUUID() function](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)


Ejemplo:

```jsx
//una lista de tareas a realizar, con la tarea y el id

const todos = [
    {task: "mow the yard", id: crypto.randomUUID()},
    {task: "work on Odin projects", id: crypto.randomUUID()},
    {task: "feed the cat", id: crypto.randomUUID()},
];

function TodoList(){
    return (
        <ul>
            {todos.map((todo)=>(
                // here we are using the already generated id as the key.
            <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}

```

Adicionalmente, si sabemos que la lista va a permanecer sin cambiar en la vida de la aplicacion, podemos usar el indice del arreglo como la key. Aunque esto no es recomendado ya que puede llevar a bugs confusos, si la lista cambia cuando los items son eliminados, insertados o reasignados.

```jsx
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList() {
  return (
    <ul>
      {/* here we are using the index as key */}
      {months.map((month, index) => (<li key={index}>{month}</li>))}
    </ul>
  );
}
```

Las llaves son faciles de usar, pero hay algo que debemos evitar: hacer las keys en el momento. Usar `key= {Math.random()}` o `key={crypto.randomUUID()}` *mientras* renderizamos la lista frustra el proposito de la key, ya que una nueva clave va a ser creada cada vez que se renderiza al elemento. Como vimos, la key debe ser inferida por la informacion misma.

Conclusion
Don’t fret if some of the terms covered in the lesson don’t make sense yet. What’s crucial right now is knowing how to use keys effectively in React. As mentioned earlier, the more you learn about React, the more you will understand the importance of keys. Furthermore, using keys is not limited to rendering lists. You might encounter use cases where keys are needed, we’ll leave that for you to discover.

### Assignment

1. [leer esta seccion](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
2. [mirar este video](https://youtu.be/xlPxnc5uUPQ)

Knowledge check
The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

Why does React need keys?
How do you use keys?
Where should the key value ideally come from?
When can we use an array index as the key value?
What is an anti-pattern when using keys?

### Additional resource

[este articulo](https://www.developerway.com/posts/react-key-attribute)