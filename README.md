````js

  // Funcion search--
  $search.on('input', function(event) {
    event.preventDefault();
    search;
    // valor del search mayor a 3 digitos
    if ($(this).val().length >= 3) {
      var searchVal = $(this).val();
      console.log(searchVal);
    }
    // limpiar filtros
    if ($(this).val() === '') {
      $('.restMx').attr('hidden', true);
      $('.restVgn').attr('hidden', true);
      $('.restJap').attr('hidden', true);
    }
    // Filtro el valor del search (filt)
    function filterItems(filt) {
      return search.filter(function(el) {
        return el.toLowerCase().indexOf(filt.toLowerCase()) > -1;
      // return el.indexOf(filt) > -1;
      });
    }
    var valObj = filterItems(searchVal); // encaje
    //    console.log(filterItems(searchVal)); // ['array1', 'array2']

    for (var i = 0; i <= valObj.length; i++) {
      console.log(valObj[i]);
      console.log(valObj[i].includes('mexicana'));

      if (valObj[i].includes('mexicana')) {
        $('.restMx').attr('hidden', false);
      } else if (valObj[i].includes('vegana')) {
        $('.restVgn').attr('hidden', false);
      } else if (valObj[i].includes('japonesa')) {
        $('.restJap').attr('hidden', false);
      } else if (valObj[i].includes('comida')) {
        $('.restMx').attr('hidden', false);
        $('.restVgn').attr('hidden', false);
        $('.restJap').attr('hidden', false);
      }
    }
````
```html

<!-- RESTAURANTES EN IMAGENES -->
<!-- comida mexicana -->
<section class="container-fluid">
<div class="row">
  <div id="imgMx" class="imgRest img-restaurants col-xs-12">
    <!-- imagenes de restaurantes para modal-->
    <div  id="elTorito" class="rest restMx col-xs-4 " type="button" data-toggle="modal" data-target="#modalMx1" hidden>
      <a href="#"><span hidden class="contex">El Torito</span><img class="img-into" src="../assets/images/el-torito-img.jpg" alt=""></a>
    </div>
    <div id="chingaTuTaco" class="rest restMx col-xs-4" type="button" data-toggle="modal" data-target="#modalMx2" hidden>
      <a href="#"><span hidden class="contex">Chinga tu taco</span><img class="img-into" src="../assets/images/chinga-tu-taco-img.jpg" alt=""></a>
    </div>
    <div id="tacoNaco" class="rest rest restMx col-xs-4" type="button" data-toggle="modal" data-target="#modalMx3" hidden>
      <a href="#"><span hidden class="contex">Taco Naco</span><img class="img-into" src="../assets/images/taco-naco-img.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>
<!-- comida vegana -->
<section class="container-fluid">
<div class="row">
<div id="imgVgn" class="imgRest img-restaurants col-xs-12">
  <!-- imagenes de restaurantes para modal-->
  <div id="abdielVegan" class="rest restVgn col-xs-4" type="button" data-toggle="modal" data-target="#modalVgn1" hidden>
    <a href="#"><span hidden class="contex"> Abdiel Vegan </span><img class="img-into" src="../assets/images/abdiel-vegan-img.jpg" alt=""></a>
  </div>
  <div id="elParaisoDeLaSalud" class="rest restVgn col-xs-4" type="button" data-toggle="modal" data-target="#modalVgn2" hidden>
    <a href="#"><span hidden class="contex" >El Paraiso de la Salud</span><img class="img-into" src="../assets/images/el-paraiso-de-la-salud-img.jpg" alt=""></a>
  </div>
  <div id="saborYvida" class="rest restVgn col-xs-4" type="button" data-toggle="modal" data-target="#modalVgn3" hidden>
    <a href="#"><span hidden class="contex" >Sabor y Vida</span><img class="img-into" src="../assets/images/sabor-y-vida-img.jpg" alt=""></a>
  </div>
</div>
</div>
</section>-->
<!-- comida japonesa -->
<section class="container-fluid">
<div class="row">
<div id="imgJap" class="imgRest img-restaurants col-xs-12">
  <!-- imagenes de restaurantes para modal-->
  <div id="kintaroRestaurant" class="rest restJap col-xs-4" type="button" data-toggle="modal" data-target="#modalJap1" hidden>
    <a href="#"><span hidden class="contex" >Kintaro Restaurant</span><img class="img-into" src="../assets/images/kintaro-restaurant-img.jpg" alt=""></a>
  </div>
  <div id="osaka" class="rest restJap col-xs-4" type="button" data-toggle="modal" data-target="#modalJap2" hidden>
    <a href="#"><span hidden class="contex" >Osaka</span><img class="img-into" src="../assets/images/osaka-img.jpg" alt=""></a>
  </div>
  <div id="taikeSushiLounge" class="rest restJap col-xs-4" type="button" data-toggle="modal" data-target="#modalJap3" hidden>
    <a href="#"><span hidden class="contex">Taike Sushi Lounge</span><img class="img-into" src="../assets/images/taike-sushi-lounge-img.jpg" alt=""></a>
  </div>
</div>
</div>
</section>


<!-- MODALES -->
  <!-- modales comida mexicana -->
<section>


<div class="modal-1 modal fade" id="modalMx1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-content">
    <img class="data-img-rest" src="../assets/images/el-torito-data.jpg" alt="">
 </div>
</div>
<div class="modal-1 modal fade" id="modalMx2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
 <div class="modal-content">
     <img class="data-img-rest" src="../assets/images/chinga-tu-taco-data.jpg" alt="">
  </div>
</div>
<div class="modal-1 modal fade" id="modalMx3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-content">
      <img class="data-img-rest" src="../assets/images/taco-naco-data.jpg" alt="">
   </div>
 </div>
 <!-- modales comida vegana -->
<div class="modal-1 modal fade" id="modalVgn1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
 <div class="modal-content">
     <img class="data-img-rest" src="../assets/images/abdiel-vegan-data.jpg" alt="">
  </div>
</div>
<div class="modal-1 modal fade" id="modalVgn2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-content">
      <img class="data-img-rest" src="../assets/images/el-paraiso-de-la-salud-data.jpg" alt="">
   </div>
 </div>
 <div class="modal-1 modal fade" id="modalVgn3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
   <div class="modal-content">
       <img class="data-img-rest" src="../assets/images/sabor-y-vida-data.jpg" alt="">
    </div>
  </div>
  <!-- modales comida japonesa -->
<div class="modal-1 modal fade" id="modalJap1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-content">
      <img class="data-img-rest" src="../assets/images/kintaro-restaurant-data.jpg" alt="">
   </div>
 </div>
 <div class="modal-1 modal fade" id="modalJap2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
   <div class="modal-content">
       <img class="data-img-rest" src="../assets/images/osaka-data.jpg" alt="">
    </div>
  </div>
  <div class="modal-1 modal fade" id="modalJap3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-content">
        <img class="data-img-rest" src="../assets/images/taike-sushi-lounge-data.jpg" alt="">
     </div>
   </div>
```

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
