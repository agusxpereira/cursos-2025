

# Introduction

La propiedad `transform` es una herramienta poderosa que cambia la apairencia de los elementos sin afectar el *flujo* natural del documento. Es muy usado para efectos de animacion.

## Basic of transform

La propiedad `transform` toma como valores una o más *funciones de CSS*. Con dichas funciones tomando sus propios valores, usualmente un angulo o numero.

Se puede aplicar esta propiedad a casi todos los elemento, con la excepcion de `<col>`, `<colgroup>` y elementos en linea no reemplazables. "No reemplazable" gace referencia a elementos cuyo contenido está contenido (justamente) dentro del elemento HTML (`span` , `b` y `em` por ejemplo), en oposicion a los elementos "reemplazables" que son contenidos fuera del documento, (`a`, `iframe` y `img`). Por si le aplicamos un transform a un elemento y este no funciona, nos sirve pensar que quizas se lo estamos aplicando a un elemento que no lo permite.

## Two dimensional transform

Las transformaciones 2d permiten usar las siguientes funciones: `rotate`, `scale`, `skew`, y `translate`.

### Rotate:

Es una funcion que *rota a una **elemento** en una plano 2d*:

```css
.element{
    transform:rotate();
}
```
[ejemplo](https://codepen.io/TheOdinProjectExamples/pen/GRMgKeE)

### Scale

Estas son las funciones que se usan para escalar un elemento en un plano 2d:

```css

.element {
  transform: scaleX();
  transform: scaleY();
  transform: scale();
}

```

[ejemplo que muestra como cada valor afecta a un elemento seleccionado](https://codepen.io/TheOdinProjectExamples/pen/XWeJrGL)

### Skew

Estas son las funciones para aplicar skew a un elemento en un plano 2d:

```css
.element{
   transform: skewX();
   transform: skewY();
   transform: skew();
}
```

[ejemplo](https://codepen.io/TheOdinProjectExamples/pen/mdBybgm)



### Translate

funciones:

```css
.element {
  transform: translateX();
  transform: translateY();
  transform: translate();
}
```

[ejemplo](https://codepen.io/TheOdinProjectExamples/pen/PoJwYrO)


## Encadenando multiples transform

Ahora que comprendemos a las transformaciones 2D vamos a aprender como encadenarlas. Esto se logra añadiendo más funciones transform con un espacion entre cada una. Miremos el codigo debajo:

```html
<div class="red-box"></div>
<div class="blue-box"></div>
```

```css
.red-box,
.blue-box {
  position: absolute;
  width: 100px;
  height: 100px;
}

.red-box {
  background: red;
  transform: rotate(45deg) translate(200%);
}

.blue-box {
  background: blue;
  transform: translate(200%) rotate(45deg);
}
```

Hay dos cajas posicionadas en la misma posicion. Se les encadenaron las funciones `rotate` y `translate` a cada una, pero en distintos ordenes.

> ["Las transformaciones compuestas son aplicadas efecticamente en orden de derecha a izquierda"](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#values)

- [resultado del efecto realizado en ejemplo](https://codepen.io/TheOdinProjectExamples/pen/XWeJWWr)

La caja azul rota 45 grados en el lugar, y luego se traslada por el eje X un 200%, moviendose hacia la derecha. La caja roja primero se traslada un 200%, moviendose hacia la derecha, pero el origen de la transformacion sigue donde solia estar. Luego rota 45 grados alrededor el punto original. Haciendo que la caja roja se "deslice" hacia el final de forma diagonal a donde había empezado.

Mientras generalmente podemos encadenar multiples transform en cualquier orden para obtener multiples resultados, hay una excepcion: `transform`. Lo que nos da el pie para la siguiente seccion donde esta funcion está involucrada.

## Three-dimensional transform

Las funciones que ya vimos no están sólo limitadas al plano en 2D. También funcionan en planos 3D. Pero para percibir el efecto de estas funciones en un plano 3D vamos a necesitar de la funcion `perspective`.

### Perspective

Esta es la funcion de transformacion que setea el valor de distancia del usuario al *plano z = 0*:

```css
.element{
   transform: perspective();
}
```

Escencialmente al setear un valor de perspectiva, le estamos diciendo al objeto que se renderice como si lo estuviesemos viendo desde una distancia en el eje z.

A diferencia de otros valores de funciones de tranformacion, `perspective` debe ser declarado primero (lo más a la izquieda posible) cuando hay varias funciones transform. En los ejemplo que viene para `rotate`, `scale`, y `translate`, vamos a poder ver como afecta al objetivo:

#### rotate a especific axis

Estas son funciones adicionales para rotar a un elemento en un espacion 3D:

```css
.element {
  transform: rotateX();
  transform: rotateY();
  transform: rotateZ();
  transform: rotate3d();
}
```

En el siguiente [ejemplo](https://codepen.io/TheOdinProjectExamples/pen/PoJwozR), podemos ver como los primeros 3 afectan al elemento.


#### scale a especific axis

Tambien hay funciones adicionales para escalar un eje especifico:

```css
.element{
    transform: scaleZ();
    transform: scale3d();
}
```

*links adicionales*:

- [scaleZ](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ())
- [scale3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d())


#### translate an especific axis

Estas son las funciones adicinales para trasladar un elemento en un espacion 3D:

```css
.element {
  transform: translateZ();
  transform: translate3d();
}
```
`translateZ` no hace demasiado sin `perspective`. En cambio `perspective` y `translateZ` trabajan juntas para crear una ilusion de una distancia tri-dimensional del objeto renderizado, como se muestra en el siguiente [ejemplo](https://codepen.io/TheOdinProjectExamples/pen/MWEYWpN).



#### matrix

Como no es una funcion 3d estrictamente, matrix es mencionada recien ahora debido a que es muy poco comun su uso.

```css
.element {
  transform: matrix();
  transform: matrix3d();
}
```
Matrix es una manera de combinar todas las funciones transform en una. No es tan usada debido a su pobre legitibilidad y casi nunca es escrita a mano. 


## Beneficios de la transformacion

Para entender porque la funcion transform es genial, debemos estar concientes de los CSS triggers. Podemos aprender sobre esto en el [Pixel Pipeline](https://web.dev/articles/rendering-performance#the_pixel_pipeline) de google.

El beneficion clave de usar esta propiedad es que ocurre *durante* la **composicion**. Esto la hace más "*barata*" de usar comparada a muchas otras propiedades CSS. Podemos ver que triggers o disparadores son ejecutados con cada propiedad CSS  en esta [tabla](https://web.archive.org/web/20220727225220/https://csstriggers.com/)

Otro beneficio de la propiedad es que puede ser acelerada-por-hardware via el [GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit) del dispositivo. El beneficio es aun más prominente cuando lleguemos a transisiones y animaciones.


## Assignaments:

1. : [MDN demostration of rotate 3D](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d()) &  [QHMIT article on rotate3D](https://www.qhmit.com/css/functions/css_rotate3d_function.cfm)

2. : [perspective on css](https://3dtransforms.desandro.com/perspective)

3. [demostrating using translate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d())

4. [The world of CSS Transform](https://www.joshwcomeau.com/css/transforms/)


## K.C.

- What are the four main functions of the transform property?: rotate, scale, skew, translate

- Which function can be used to move an object through space on the X, Y, or Z axis?: translate

- Which function can be used to make an object larger or smaller on the X, Y, or Z axis?: scale

- What additional function is required for 3D transforms?: perspective



## Additional resources

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

    - Learn more about [matrix](https://www.quackit.com/css/functions/css_matrix_function.cfm) by checking Quackit’s article on the matrix function.
    - For a full reference, there’s always MDN’s [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) on CSS transform functions.
    - [For more](https://www.w3schools.com/css/css3_3dtransforms.asp) on the 3D transform functions, W3Schools’ page on CSS transforms is a good article demonstrating how they work.

<!--



```css
```
-->