# Greek Sign Language Detection

<p align="center">
   <img src="https://user-images.githubusercontent.com/36128807/119399085-1fac9680-bce1-11eb-9deb-02a3928cca14.jpg" >
</p>

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
    
