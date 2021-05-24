# Greek Sign Language Detection

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
    
