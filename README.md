# RETO FOODMAP
El reto consistió en crear una web-pp que a través de un input se pudiera filtrar los restaurantes que se encuentren cerca.
## Requisitos
*Vista splash con duración de 2 a 5 segundos que redirecciona a la vista principal. 
*En la vista principal se muestran todos los restaurantes "cerca de ti" junto con el input para filtrar tu elección.
*Ya que se hizo la elección del filtro deben mostrarse únicamente aquellos restaurantes que cumplan con la condición. 
*Agrega un evento mouseover a las imágenes
*Al seleccionar alguno de los restaurantes, deberá mostrarse la información de este a través de un modal.

## Se desarrolló
*Vista splash con duración 3 segundos que redirecciona a la vista principal.
*En la vista principal se simuló los restaurantes cercanos con una imagen de googlemap
*Se filtran los restaurantes de acuerdo a lo que se busca en el "search",
las palabras que se utilizaron para ser filtradas en el "search" de acuerdo al tipo de comida son: comida, mexicana, vegana y japonesa,
donde al introducir la palabra mexicana, vegana y japonesa, devuelve los restaurantes de su tipo de comida y cuando se introduce la palabra comida , devuelven todas las comidas,
como un simulacion de busqueda.
*El nombre del restaurante aparece cuando se produce el evento mouseover en las imagenes
*Al seleccionar alguno de los restaurantes se mostrarse la información de este a través de un modal.
