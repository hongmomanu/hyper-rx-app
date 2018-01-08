import { h } from "hyperapp";
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/delay'

export const WhiteBoard = () => (
  <div>
    <h1>this is whiteboard canvas</h1>
    <canvas style={{ width: '500px', height: '500px' }} oncreate={element => initFunc(element)} />
  </div>
);
const initFunc = elm => {
  paper.install(window);
  paper.setup(elm);
  var tool = new Tool();
  var path;
  const delay$ = _ => Observable.of(_)//.delay(1)
  const delayedPoint$ = (new Subject()).concatMap(delay$)
  delayedPoint$.subscribe(callback => {
    callback()
  })


  // Define a mousedown and mousedrag handler
  tool.onMouseDown = function (event) {

    path = new Path();
    path.strokeColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });
    path.add(event.point);
  }

  tool.onMouseDrag = function (event) {
    delayedPoint$.map(event=>{
      return event;
  }).next((event) => path.add(event.point));
  }
  var myCircle = new Path.Circle(new Point(100, 70), 50);
  myCircle.fillColor = 'black';
  var layer = new Layer();
  layer.addChildren([myCircle, path])
  //setInterval(() => layer.visible = !layer.visible, 5000)
};
