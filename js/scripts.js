$(document).ready(function () {
  $("form#celebrityElegibility").submit(function (event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const band = $("input#band").val();
    const allergies = $("input#allergies").val();

    $('#results').show();

    if (age >= 25 && age <= 45) {
      $('#celebrity').text("Ben Diskin");
    } else if (age >= 46 && age <= 70) {
      $('#celebrity').text("Steven Blum");
    } else if (age >= 71) {
      $('#celebrity').text("Elvis Presley");
    }
  })
});