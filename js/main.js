$(document).ready(function() {
  $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: "GET",
        success: function(data, stato) {
          printSingleCd(data.response);
        },
        error: function(richiesta, stato, errori) {
          alert('E\' avvenuto un errore.' + errori);
        }
      }
    );
    $(document).on('change', 'select', function() {
      if($('.cd').length > 0) {
        filterCds($('.cd'));
      }
    });
});
function filterCds(elementsDom) {
  elementsDom.each(function () {
    var genre = $(this).find('.genre').text();
    var value = $('select').val();
    if (value != 'Choose') {
      if(value == genre) {
        $(this).show();
      } else {
        $(this).hide();
      }
    } 

  });
}
function printSingleCd(cds) {
  for (var i = 0; i < cds.length; i++) {
    var singleCd = cds[i];
    console.log(singleCd);
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(singleCd);
    $('.cds-container').append(html);
  }
}
