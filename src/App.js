// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import { nextFrame } from "@tensorflow/tfjs";
import * as tf from "@tensorflow/tfjs";
import {drawRect} from "./utilities";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main
  const coco = async () => {
    const net = await tf.loadGraphModel("https://raw.githubusercontent.com/SotirisKar/Greek-Sign-Language-Detection/main/model/model.json")
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const det = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // video
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [800,600])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)

      const boxes = await obj[6].array()
      const classes = await obj[3].array() //3
      const scores = await obj[4].array() //4

      // Draw
      const ctx = canvasRef.current.getContext("2d");

      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.5, videoWidth, videoHeight, ctx)}); 
      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
    }
  };

  useEffect(()=>{coco()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          audio={false}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 800,
            height: 600,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 800,
            height: 600,
          }}
        />
      </header>
    </div>
  );
}

export default App;
