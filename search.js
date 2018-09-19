if ($(window).width() < 768) {
  $("#datepickerContainer").append('<input class="datepicker-here" type="date" name="when" required>');
}
else {
  $("#datepickerContainer").append('<input class="datepicker-here" type="text" name="when" required>');
}