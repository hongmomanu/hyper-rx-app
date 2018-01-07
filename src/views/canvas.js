/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import Konva from 'konva'
import paper from 'paper/dist/paper-full'

const makeCanvaInit = (element) => {
  console.log('makeCanvaInit', element)
  var stage = new Konva.Stage({
    container: element,   // id of container <div>
    width: 100,
    height: 100
  })
  // then create layer
  var layer = new Konva.Layer()
  // create our shape
  var circle = new Konva.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 40,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  })
  // add the shape to the layer
  layer.add(circle)
  // add the layer to the stage
  stage.add(layer)
}
export const CanvasSection = () =>
  <div oncreate={makeCanvaInit} />
