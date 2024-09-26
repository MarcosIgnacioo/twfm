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

## rings

los rings se pueden usar d manera sexy cuando se hace click sobre un input y que haga como un efecto de ilimunicacion en el input field

```css
ring-2 ring-red-500
```

## accent

```html 
<input id="terms" type="checkbox" className="accent-black" />
```

## valid!!!

esto sirve para estilizar cuanod un input es valido amigue
RECUERDALO 

## placehoder-shown

aplicar estiles cuando el placeholder se esta mostrando como cambiar el bgc o la fuente yo k se

# empty

este se activa cuando un contenedor no tiene ningun nodo lo que resulta util para aplicar estilos a algo cuando esta cargando

# invisible vs hidden

hidden lo quita del layout mientras que invisible deja el espacio que ocuparia en el layout invisbiible pero pues sigue ocupando el espacio


# peer

peer sirve para que cuando un input cambia de estado (valid invalid focus hover) otros elementos hermanos del mismo puedan cambiar por ejemplo, se puede tener una checkbox que cuando se active se muestre un texto abajo que estaba hidden

se le pone a la checkbox la clase peer

al parrafo se le pone peer-checked:block

y asi se muestra solamente cuando su peer este chequeado

tambien se pe pueden poner nombres a los peers para que se tengan varios inputs que activen de diferentes maneras a otros elementos

se les pone el nombre peer/nombre

y a las cosas que queramos que reaccionen a esos peer lo que se les hace es peer-state/name:text-red-500

peer-checked/popo:block

esto mostraria el parrafo cuando el peer popo sea checkeado

```html
<div>
          <label htmlFor="popo">popo</label>
          <input type="radio" name="foo" className="peer/popo" />
          <label htmlFor="pipi">pipi</label>
          <input type="radio" name="foo" className="peer/pipi" />
          <p className="hidden peer-checked/popo:block text-orangi-950 decoration-orangi-800 decoration-wavy decoration-4 line-through">
            elegiste popo
          </p>
          <p className="hidden peer-checked/pipi:block text-orangi-50 bg-black">
            elegiste pipi
          </p>
        </div>
```

peer sirve para modificar el state visual de distintas partes de la ui de manera sencilla puede ser muy customizado con los nombres de los peers gamers

# group

es basicamente lo mismo que peers pero es para actualizar los contenedores hijos cuando el padre tiene cierto state

```html
<ul role="list">
  {#each people as person}
    <li class="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">{person.name}</a>
        <p>{person.title}</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          <!-- ... -->
        </svg>
      </a>
    </li>
  {/each}
</ul>
```


aqui por ejemplo se tiene el group item que es cada li, entonces, cuando el mouse se hoverea sobre este (hover en el contenedor padre) se muestra el item p

group-hover/item    :visible


y en esto hay otro grupo que es el propio anchor el cual es edit, que, cuando se hoveree sobre el anchor se va a cambiar el color de texto y se va a mover tantito a laderecha el icono

cuando cambia de state el contenedor padre y quieres cambiar el state de los hijos


groups ejemplo

```html
<div className="container w-2/4 mx-auto mt-4 space-y-4 p-4 border-orangi-300 border-2 rounded-md shadow-md text-orange-800 group/ad hover:bg-orangi-700 hover:text-orangi-50">
      <h3 className="font-bold text-xl group-hover/ad:text-orange-50">Important Announcement</h3>
      <p className="group-hover/ad:text-orange-50">Attention, esteemed user! In the swirling vortex of our digital realm, a click on "log out" now will seal your fate with the ancient curse of 'Eternal Banishment.' Yes, dare to exit and you shall become a digital ghost, wandering the shadowy halls of the Internet, forever longing for the warm embrace of the login screen. Beware, for not even the mightiest password reset can break this spell. So, choose wisely, stay awhile and linger in the land of the logged-in, lest you wish to be a legend, a whisper on the Wi-Fi winds. Log out now, and 'Access Denied' becomes your eternal echo!</p>
      <button className="rounded  text-orangi-600 border-current border-2 py-1 px-2 shadow-md group-hover/ad:text-orange-50">I Understand</button>
    </div>
```

En este caso tenemos un contenedor con un anuncio el caso es que queremos que cuando el contenedor es hovereado el fondo sea de color naranja pero nuestras letras son de color naranja por lo que para hacer que sean blancas y esten en contraste podemos usar los grupos es un ejemplo un poco ekis pero hace el trabajo es muy claro y me guta

otra manera seria simplemente pasarle a todos los elementos desde el contenedor padre el color que queremos que tengan de fuente y ese usarlo para todo y luego cuando hoveremos a la clase padre pues lo que hacemos es cambiar esa fuente por una blanca y ya no hay necesidad d usar grupos pero nioedpp

```html
<div className="container w-2/4 mx-auto mt-4 space-y-4 p-4 border-orangi-300 border-2 rounded-md shadow-md text-orange-800 group/ad hover:bg-orangi-700 hover:text-orangi-50 hover:border-orangi-700">k
      <h3 className="font-bold text-xl ">Important Announcement</h3>
      <p className="">Attention, esteemed user! In the swirling vortex of our digital realm, a click on "log out" now will seal your fate with the ancient curse of 'Eternal Banishment.' Yes, dare to exit and you shall become a digital ghost, wandering the shadowy halls of the Internet, forever longing for the warm embrace of the login screen. Beware, for not even the mightiest password reset can break this spell. So, choose wisely, stay awhile and linger in the land of the logged-in, lest you wish to be a legend, a whisper on the Wi-Fi winds. Log out now, and 'Access Denied' becomes your eternal echo!</p>
      <button className="rounded  border-current border-2 py-1 px-2 shadow-md ">I Understand</button>
    </div>
```

```html
<div className="container w-2/4 mx-auto mt-4 space-y-4 p-4 border-orangi-300 border-2 rounded-md shadow-md text-orange-800 group/ad hover:bg-orangi-700">
      <h3 className="font-bold text-xl group-hover/ad:text-orange-50">Important Announcement</h3>
      <p className="group-hover/ad:text-orange-50">Attention, esteemed user! In the swirling vortex of our digital realm, a click on "log out" now will seal your fate with the ancient curse of 'Eternal Banishment.' Yes, dare to exit and you shall become a digital ghost, wandering the shadowy halls of the Internet, forever longing for the warm embrace of the login screen. Beware, for not even the mightiest password reset can break this spell. So, choose wisely, stay awhile and linger in the land of the logged-in, lest you wish to be a legend, a whisper on the Wi-Fi winds. Log out now, and 'Access Denied' becomes your eternal echo!</p>
      <button className="rounded  border-current border-2 py-1 px-2 shadow-md group-hover/ad:text-orange-50">I Understand</button>
    </div>
```
