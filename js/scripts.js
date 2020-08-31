$(document).ready(function () {
  $("form#celebrityElegibility").submit(function (event) {
    event.preventDefault();
    let age = 0
    let band = ""
    let allergies = ""
    if ($("input#age").val() === "") {
      $('#age-input').addClass("has-error");
    } else {
      age = parseInt($("input#age").val());
    }

    if ($("input#band").val() === "") {
      $('#band-input').addClass("has-error");
    } else {
      band = $("input#band").val();
    }

    if ($("input#allergies").val() === "") {
      $('#allergies-input').addClass("has-error");
    } else {
      allergies = $("input#allergies").val();
    }

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
