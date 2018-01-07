import { h } from "hyperapp";

export const WhiteBoard = () => (
  <div>
    <h1>this is whiteboard canvas</h1>
    <canvas oncreate={element => initFunc(element)} />
  </div>
);
const initFunc = elm => {
  console.log('initFunc');
  //var canvas = document.getElementById("myCanvas");
  // Create an empty project and a view for the canvas:
  paper.setup(elm);
  // Create a Paper.js Path to draw a line into it:
  var path = new paper.Path();
  // Give the stroke a color
  path.strokeColor = "black";
  var start = new paper.Point(100, 100);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  path.lineTo(start.add([200, -50]));
  // Draw the view now:
  paper.view.draw();
};
