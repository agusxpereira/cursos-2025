

## Transitions

Las transiciones CSS nos permiten animar un cambio en un elemento, desde un estado inicial a un estado final. Pensemos en un elemento boton ordinario, con un fondo blanco. Cuando tu mouse está fuera del boton, sólo está ahí. Pero cuando posicionamos nuestro mouse arriba de el (*::hover*) el colode fondo transiciona de un blanco a un gris en un periodo de tiempo determminado. Esto es una transicion CSS. [Ejemplo](https://codepen.io/TheOdinProjectExamples/pen/eYGmYRm);

Cuando nuestro cursor esta lejos del boton, este está en su estado inicial. Cuando nos posicionamos sobre el, introducimos el estado final.

Esto lo logramos con la propiedad `transition`, que es en realidad un atajo para la propiedad `transition-property`, `transition-duration`, `transition-timing` y `transition-delay`.

```css

button{
    transition-property: background-color;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    transition-delay: 0.25s;
}

```

- `transition-property`: determina que propiedad CSS va a ser transicionada. En este caso es el `background-color`.
- `transition-duration`: determina la duracion de la transicion. En este caso, en un segundo.
- `transition-timing-function`: esta propiedad nos permite cambiar la velocidad de la transicion en la duracion de esta. En este caso es `ease-out`, significando que el color va a cambiar más rápido al principio que al final de la transicion.
- `transition-delay`: determina el delay con el que la transicion va a empezar. En este caso, el cambio de color comienza en 1/4 de segundo luego de que el cursos se pose sobre el boton.

El atajo de la propiedad se ve así:

```css
button {
  /* ... other CSS properties ... */
  background-color: white;
  transition: background-color 1s ease-out 0.25s;
}

button:hover {
  background-color: black;
}
```

La transicion de arriba ocurre cuando el usuario posiciona (hover) su mouse sobre el boron inidicado por la pseudo-clase `:hover`. Además de con pseudoclases, podemos disparar estas animaciones añadiendo o quitando clases con JavaScript. Por ejemplo clickear un boton podria agregar (*append*) la clase "open" a un menu dropdown, lo que podria disparar la transicion de abrir.

### Performance

Generalmente, mantener la performance de nuestras transiciones CSS no va a ser un problema. Pero hay algunas cosas que debemos mantener en mente.

El primero es el *stacking content*. Basicamente, es formado cuando ciertos elementos del escenario están en su lugar. Un escenario relevante para nostros seria transicionar una propiedad transform como el siguiente ejemplo:

```css
div {
  width: 100px;
  height: 100px;
  transition: transform 2s 1s;
}

div:hover {
  transform: rotate(180deg);
}
```

Esto ha creado un *stacking context*.  Si tuviesemos que crear muchos más contextos de apilamientos a través de varios otros medios, entonces, cuando llega el turno de renderizar nuestra transformacion inicial, no sólo repitanriamos nuestro elemento `div` sinó también **cada elemento que está estaqueada en la cima de nuestro *stack context***. Si lo dejamos sin chequear, esto puede causar que nuestra unica transicion se vuelva más lenta y tosca.

La segunda cosa a mantener en mente es que deberiamos mantener nuestras animaciones para que sólo a las propiedades `opacity` y `transform` si queremos una absoluta buena performance para animaciones en nuestra webpage. En nuestro ejemplo anterior hicimos un cambio de fondo, pero incluso eso fue una operacion costosa en si misma.

Es importante tener un entendimiento sólido de estos conceptos y poder aplicarlos cuando sean necesarios.

### Assignamen:

- [MDN article for CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) and defining [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#defining_transitions)
- Article [stacking context](https://www.joshwcomeau.com/css/stacking-contexts/)
- [How to create performant CSS animations](https://web.dev/animations-guide/)
- [Interactive guide for transitions](https://www.joshwcomeau.com/animation/css-transitions/)
- [catch and debug repaint issues](https://dzhavat.github.io/2021/02/18/debugging-layout-repaint-issues-triggered-by-css-transition.html)

### Knowledge check

- Are all CSS properties animatable?: No, no todas. Si la mayoria, pero la que se excluyen son aquellas propiedades contenidas por la etique HTML en sí.

- What are the long and short-hand notation for transitions?: `transition` es el atajo, las demás propiedades son: transition-property, transition-duration, transition-timing-function and transition-delay.

- What is the [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)?: Stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage. HTML elements occupy this space in priority order based on element attributes.

- Why do you need to keep an eye on [repaint](https://dzhavat.github.io/2021/02/18/debugging-layout-repaint-issues-triggered-by-css-transition.html)?