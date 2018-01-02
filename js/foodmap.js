
$(function() {
  var $search = $('#search');
  var search = ['comida', 'mexicana', 'vegana', 'japonesa'];
  var $rest = $('.rest');
  var $contex = $('.contex');

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
  });

  $rest.on('mouseover', function(event) {
    event.preventDefault();
    $(this).attr('hidden', false);
    console.log();
  });
});
