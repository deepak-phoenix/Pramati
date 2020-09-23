// util functions

function displayOutput(outputMessage) {
  var outputElement = document.getElementById("output-text");
  outputElement.innerHTML = outputMessage;
}

function clearOutput() {
  setTimeout(() => {
    displayOutput("");
  }, 1000);
}
// global variable

var keyboardEvent;

// mouse event functions

function mouseClick() {
  displayOutput("Single Click");
  clearOutput();
}

function mouseRightClick() {
  displayOutput("Right Click");
  clearOutput();
}

function mouseDoubleClick() {
  displayOutput("Double Click");
  clearOutput();
}

function mouseOut() {
  displayOutput("Mouse Out");
  clearOutput();
}

function mouseOver() {
  displayOutput("Mouse Over");
  clearOutput();
}

function mouseDown() {
  displayOutput("Mouse Down");
  clearOutput();
}

// keyboard event functions

function keyDown() {
  displayOutput("Key Down");
  clearOutput();
}

function customEvents() {
  // mouse events
  var element = document.getElementById("mouse-event-button");
  element.addEventListener("click", mouseClick);
  element.addEventListener("contextmenu", mouseRightClick);
  element.addEventListener("dblclick", mouseDoubleClick);
  element.addEventListener("mouseout", mouseOut);
  element.addEventListener("mouseover", mouseOver);
  element.addEventListener("mousedown", mouseDown);

  //   keyboard events
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", (event) => {
    var outputString = event.key + " Pressed";
    if (event.key == " ") {
      outputString = "Space Pressed";
    }
    displayOutput(outputString);
    clearOutput();
  });
}

customEvents();
