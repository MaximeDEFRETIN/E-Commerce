$(function(){
  var click = 0;
  // Quand on clique sur le panier d'un article
   $("figure > button").on("click",function(id){
     // Recuperer id du parent de input
     var id=$(this).parent("figure").attr("id");;;
     // recuperer src de article actuelle
      var img =$('#'+id+' > img').attr('src');
      // recuperer le price
      var price=$('#'+id+' .price').text();
      // split de price pou récuperer la partie nombre
      price = price.split(" ");
      // Ajout la partie nombre dans la variable price
      price = price[2];
      var pricetotal = price;
      if($('#tr'+id+'').length > 0 ){
        alert('L\'article a déjà étè selectionner.')
        var value = $('#tabl'+id+' > input').val();
        value++;
        $('#tabl'+id+' > input').val(value);
      }else {
      $("tbody").append( "<tr id='tr"+id+"'>" +"<td><img src=\""+ img +"\" class=\"imgbasket\"/></td>" +"<td id='price"+id+"'>"+price+"</td>" +"<td id='tabl"+id+"'><button class='plus'>+</button><input class='price' value='1' disabled/><button class='supp'>-</button></td>"+"<td id='priceTotal"+id+"'><p>"+pricetotal+"</p></td>"+"<td id='supp"+id+"'><a><i class=\"icofont icofont-delete-alt\"></i></a></td>"+"</tr>" );
      alert('Ajout au panier.');
      };

      // Augmenter la quantité d'un article
      $('#tabl'+id+' > .plus').click(function() {
        // Récuperer la value de l'input de l'article
        var value = $('#tabl'+id+' > input').val();
        // Prend la value et on fait +1
        value = parseInt(value) + 1;
        console.log(value);
        // Ajouter la value dans l'input
        $('#tabl'+id+' > input').val(value);
        var valeur = $('#price'+id+'').text();
        valeur = parseInt(valeur);
        pricetotal = valeur * value;
        $('#priceTotal'+id+'> p').text(pricetotal);
    });
    // Baisse la quantité d'une article
    $('#tabl'+id+' > .supp').click(function() {
      // Récuperer la value de l'input de l'article
      var value = $('#tabl'+id+' > input').val();
      // Prend la value et on fait -1
      value--;
      // Ajouter la value dans l'input
      $('#tabl'+id+' > input').val(value);
      pricetotal = pricetotal - price;
      $('#priceTotal'+id+'> p').text(pricetotal);
      // Si value de l'input = 0 alors on supprime la ligne du tableau
      if(value == 0){
        $('#tr'+id+'').remove();
      }
    });
    $('#supp'+id+' > a').click(function(){
      $('#tr'+id+'').remove();
    });
  });

  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $('figure').hover(function(){
     $('#'+this.id +' span').show();

   }, function() {
     $('#'+this.id +' span').hide();
 });

 /*$( "#dialog" ).dialog({
   autoOpen: false,
   show: {
     effect: "blind",
     duration: 1000
   },
   hide: {
     effect: "explode",
     duration: 1000
   }
 });

 $( "#opener" ).on( "click", function() {
   $( "#dialog" ).dialog( "open" );
 });*/
});
