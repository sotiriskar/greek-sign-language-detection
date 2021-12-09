# Greek Sign Language Detection

<p align="center">
   <img src="https://user-images.githubusercontent.com/36128807/145409483-9e276455-b2a9-48ba-bdb7-e86ff591525e.jpeg" >
</p>

[![](https://img.shields.io/badge/Python-3.8-blue)](https://www.python.org/)
[![](https://img.shields.io/badge/Tensorflow-2.5.0-orange)](https://www.tensorflow.org/)
[![](https://img.shields.io/badge/NumPy-1.21.1-lightblue)](https://numpy.org/)
[![](https://img.shields.io/badge/Pandas-1.3.2-darkblue)](https://pandas.pydata.org/)
[![](https://img.shields.io/badge/OpenCV-4.5.3-brightgreen)](https://opencv.org/)
[![](https://img.shields.io/badge/react-17.0.0-9cf)](https://reactjs.org/)

Install all the required packages:

    npm install

Run locally:

    npm install

Application is running at:

    http://localhost:3000


## How to create an HTTP server locally and request model

Uncomment:

    const net = await tf.loadGraphModel("http://192.168.1.10:8080/model.json")

And comment:

    const net = await tf.loadGraphModel("https://raw.githubusercontent.com/SotirisKar/model/main/model/model.json")

Install HTTP Server:

    npm install http-server -g

Go to your model folder where “model.json” exists and run:

    http-server -c1 --cors .
    
DONE!
    
