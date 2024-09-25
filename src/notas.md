# layers

las layers son basicamennte espacios aislados donde los comonentes tienen sus estilos y pues si hay un componente con una clse o un id y fuera de esa layer ha y una regla que le establece un estilo, aunque el componente tenga ese id si la layer escribe tambien a  esa propiedad se tomara prioridad a la layer. Sirve para aislar de manera cool

# shadows

asi 
```html
      <div className="w-12 h-12 bg-blue-500 shadow shadow-red-500">wep</div>
```

se pueden escribir extensiones que tengan fuentes asi nomas le haces npm install y ya tienes las fuentes siempre

# titulos

ponerle margin bottom mb-2 funciona y se ven muycool

# current

color de texto y bordes comparten el mismo color es decir que si haces text-blue-500 y luego border-current agarrara el color de la fuente

color de fondo y qn sabe que otra cosa comparte el colr

probablemente sea algo como *strokeStyle* y *fillStyle*

# space

space sirve para agregar espacio (margenes) a cada hijo de un contenedor menos al primero 

en el caso de la y agrega margin top y en el caso de la x agrega margin left

[
[] // este no
##
[] // este si
##
[] // este si
##
[] // este si
##
[] // este si
##
[] // este si

]

div > * + * // cada elemento que viene despues de un elemento es decir todos menos el primero
## divide

hace lo mismo que space pero en vez de poner margin pone borders, lo que hace que si por ejewmplo se tiene una navbar con varios elementos jutnos los separa con una linea

divide-2
divide-red-2


## negatives
asi
-m-5 margin:-5
## importants
!text-white

## selector shit

hover disabled focused y todo eso se puede stackear d manera sexi

en plan
por ejemplo si se tiene un boton que cuando lo hovereas se cambia el fondo se pone de color mas clarito, pero cuando esta desactivado queremos que no haga eso lo que se hace es

disabled:hover:bg-blue-500 // el original

basicamente reescribimos las reglas bajo ciertos estados

pseudo clase

hover

valid

invalid

estos dos utiles para formularios!

in-range

out-of-range

focus

focus-within

focus-visible

enabled

disabled

required

placeholder-shown

autofill

read-only

active

visited

target

checked

indeterminate // cuando una checkbox no ha sido seleccionada o deseeleccionada

default

Lo chido de esto en react o vue o lo k sea es que puedes hacer un componente que tenga todos los estilos para todas las situaciones posibles, es decir, los estilos base que sieempre va a tener y luego los estilos de situaciones esppecificas como puede ser disabled que queramos que sea gris todo o algo asi


```html
<div class="relative mb-6">
    <label for="labels-range-input" class="sr-only">Labels range</label>
    <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
</div>
```

## colores 

bg-red-500/50 opacity good

se puede hacer en una clase asi normal los estilos de los botones, y luego hacer otras clases que cambien el text-color para que cambie el color del boton simplmente agregando la clase

utilities cuando quieres estilizar un componente que ya tiene una clase pero hacer cambios de forma especifica como necesitar 1 margen especial

la component layer es para ya cosas mas generales

pero igualmente no las estare usando !!!!

kk

## outline-none

esto sirve para quitar el bordecito azul que tienen los oinput fields de manera nativa

tamibien se pueden estilizar los placeholders

```css
placeholder-purple-500
```

los rings se pueden usar d manera sexy cuando se hace click sobre un input y que haga como un efecto de ilimunicacion en el input field

```css
ring-2 ring-red-500
```

