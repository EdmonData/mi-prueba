$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#btn-contactos').click(function(){
    $('#exampleModalScrollable').modal('show');
  })

   $('.imagen').mouseover(function () {
    $(this).css('opacity', 0.5)
  });

  $('.imagen').mouseleave(function () {
    $(this).css('opacity', 1)
  });