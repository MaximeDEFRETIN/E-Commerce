$(function(){
  var valeurtotal = 0;
  // Quand on clique sur le panier d'un article
   $("figure > button").on("click",function(id){
     // Recuperer id du parent de input
     var id=$(this).parent("figure").attr("id");
     // recuperer src de article actuelle
      var img =$('#'+id+' > img').attr('src');
      // recuperer le price
      var price=$('#'+id+' .price').text();
      // split de price pou récuperer la partie nombre
      price = price.split(" ");
      // Ajout la partie nombre dans la variable price
      price = price[2];
      var ref =$('#'+id+'> img').attr('ref');
      var pricetotal = price * value;
      $('#blabla').find('#test').text(valeurtotal);
      if($('#tr'+id+'').length > 0 ){
        alert('L\'article est déjà dans le panier.');
        var value = $('#tabl'+id+' > input').val();
        value++;
        $('#tabl'+id+' > input').val(value);
        pricetotal = price * value;
        $('#priceTotal'+id+'> p').text(pricetotal);
        valeurtotal = valeurtotal + parseInt(price);
        $('#blabla').find('#test').text(valeurtotal);
      }else {
        $("tbody").append( "<tr id='tr"+id+"'>" +"<td><img src=\""+ img +"\" class=\"imgbasket\"/></td>"+"<td>"+ref+"</td>"+"<td id='price"+id+"'>"+price+"</td>" +"<td id='tabl"+id+"'><button class='plus'>+</button><input class='price' value='1' disabled/><button class='supp'>-</button></td>"+"<td id='priceTotal"+id+"'><p>"+pricetotal+"</p></td>"+"<td id='supp"+id+"'><a><i class=\"icofont icofont-delete-alt\"></i></a></td>"+"</tr>" );
        alert('L\'article a étè ajouter au panier.');
        var value = $('#tabl'+id+' > input').val();
        pricetotal = value * price;
        $('#priceTotal'+id+'> p').text(pricetotal);
        valeurtotal = $('#blabla').find('#test').text();
        valeurtotal = parseFloat(valeurtotal) + parseInt(price);
        $('#blabla').find('#test').text(valeurtotal);
      };
    $('#supp'+id+' > a').click(function(){
      $('#tr'+id+'').remove();
    });
  });
$('#myBtn').on("click",function () {
  // Augmenter la quantité d'un article
  $('.plus').click(function() {
    // Récuperer la value de l'input de l'article
    var valeurtotal = $('#blabla').find('#test').text();
    var id =$(this).parent('td').attr('id');
    var value = $('#'+id+' > input').val();
    // Prend la value et on fait +1
    value++;
    // Ajouter la value dans l'input
    $('#'+id+' > input').val(value);
    var length = id.length;
    id = id.substring(4,length);
    var valeur = $('#price'+id+'').text();
    valeur = parseInt(valeur);
    pricetotal = valeur * value;
    $('#priceTotal'+id+'> p').text(pricetotal);
    valeurtotal = $('#blabla').find('#test').text();
    valeurtotal = parseFloat(valeurtotal) + valeur;
    $('#blabla').find('#test').text(valeurtotal);

  });
  // Baisse la quantité d'une article
  $('.supp').click(function() {
    // Récuperer la value de l'input de l'article
    var id =$(this).parent('td').attr('id');
    var value = $('#'+id+' > input').val();
    // Prend la value et on fait -1
    value--;
    // Ajouter la value dans l'input
    $('#'+id+' > input').val(value);
    var length = id.length;
    id = id.substring(4,length);
    var price = $('#price'+id+'').text();
    pricetotal = pricetotal - price;
    $('#priceTotal'+id+'> p').text(pricetotal);
    valeurtotal = $('#blabla').find('#test').text();
    valeurtotal = parseFloat(valeurtotal) - price ;
    $('#blabla').find('#test').text(valeurtotal);
    // Si value de l'input = 0 alors on supprime la ligne du tableau
    if(value == 0){
      $('#tr'+id+'').remove();
    }
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
});
