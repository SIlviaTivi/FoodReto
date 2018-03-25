$(document).ready(function() {
console.log(data)

  var numeros = [{clave: 'mexico', valor:10}, 
                {clave:'chile', valor:20}, 
                {clave:'peru', valor: 30}];
                
var dobles  = numeros.map(function(num) {
  
$('.content').append(`<p> ${num.clave}</p>`)
 
  console.log(num.clave);
});


    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $('.content p').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
      console.log( $('.content p'));
     
    });

    });

/*   $rest.on('mouseover', function(event) {
    event.preventDefault();
    $(this).attr('hidden', false);
    console.log();
  }); */

