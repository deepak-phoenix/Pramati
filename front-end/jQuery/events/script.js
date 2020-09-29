$(function () {
  // Mouse events
  $("#event-button")
    .click(function (event) {
      $("#output-text").text(event.type);
      clearDisplay();
    })
    .contextmenu(function (event) {
      $("#output-text").text(event.type);
      clearDisplay();
    })
    .dblclick(function (event) {
      $("#output-text").text(event.type);
      clearDisplay();
    })
    .hover(function (event) {
      $("#output-text").text(event.type);
      clearDisplay();
    })
    .mouseover(function (event) {
      $("#output-text").text(event.type);
      clearDisplay();
    })
    .mouseout(function (event) {
      $("#output-text").text(event.type);
      clearDisplay();
    });
  // Keyboard events
  $(document).keydown(function (event) {
    $("#output-text").text(event.type + " " + event.key);
    clearDisplay();
  });
  function clearDisplay() {
    setTimeout(function () {
      $("#output-text").text("");
    }, 500);
  }
});
