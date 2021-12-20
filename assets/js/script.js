$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#contacto').click(function(){
    $('#exampleModalScrollable').modal('show');
  })

   $('.card-body').mouseover(function () {
    $(this).css('background-color') == 'rgb(23, 162, 184)'
      ? $(this).css('background-color', 'rgba(197, 90, 90)')
      : $(this).css('background-color', 'rgb(23, 162, 184)');
  });