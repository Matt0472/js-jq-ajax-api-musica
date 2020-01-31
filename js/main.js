$(document).ready(function() {
  $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: "GET",
        success: function(data, stato) {
          console.log(data.response);
          printSingleCd(data.response);
        },
        error: function(richiesta, stato, errori) {
          alert('E\' avvenuto un errore.' + errori);
        }
      }
    );
});


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
