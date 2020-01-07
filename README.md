# Nodejs-websocket-with-React
establishing websocket connection (real time data tranfer) with Nodejs/socket.io server and React

#Real time websockets connection with Nodejs (Chat App example).

When I first started learning Full Stack JS development, I could barely understand the difference/relationship between a server and a client. I remember my first CRUD application was a mess. After I developed the server (back-end), I could not understand the step of sending the data to the client (front-end). So literally all I did was to export the functions that directly manipulate the database and use them on the client (basically compromising all the data).

## You need bartenders and attendees to get the party going 🎆 

It was only a matter of time until I wrapped my head around the difference/relation between the client and the server, and that they are two totally different things.
When you are browsing the internet with your own computer searching for news or whatever, you are always being the client. The server is just another computer waiting for you to ask for something so they can grab it for you. Think of it as a party. If someone invites you to a party, as an atendee, you are a client. The server in this analogy is the bartender. If you need a drink or food, bartenders are the ones who will serve you (servers).

## You need a drink? you gotta sk for it!

In such parties, you can imagine how busy the servers can be. If you need something, you (the client) have to go to the bartender (the server) and ask for what you need. The server then can go and get you what you asked for.
The most common protocol used for communications between clients and servers is HTTP. HTTP is a request-response based communication. If the client needs a certain piece of data, it has to send a REQUEST (req) to the server. The server then reads the req and sends a RESPONSE (res) containing the data the client asked for. This is usually referred to as a _handshake_. The server can pretty much do nothing if the client does not initiate the response.
Lets create an express server with Nodejs and see how that works.
_(express uses REST API which is also based on http)_

 - Open your terminal
 - Go to the directory (folder) where you want to save the file
 - Run the command `npm init -y`
 - Run `npm i express`

Now if you open the folder, you will see a `package.json` file.
Create a `server.js` file and write the following:

```javascript
const express = require('express')  // Import express
const app = express()  // create the express app


app.get('/server', (req, res) => {  // the location of the server (localhost:port/server)
    res.send('response')
})

app.listen(5000, () => {  // listen to port 5000 (localhost:5000/)
    console.log('listening ...')
})
```

As you can see, we set up a server at port 5000 and it receives requests at `/server` endpoint. If we get a request from the client to that endpoint, out server will send the string `"response"` as a response. 
To run the server now, go to the terminal and run `node server.js`

Now that our server is ready, lets do the client work.
Open your browser and go to the url `localhost:5000/server`. By visiting the page, you are basically sending the server a request and waiting for it response. Once the page loads, you should see your response. (The screen should show `response`).
You can make as many endpoints as you want and have each end point serve different response.
Remember when I said the server can only send data as a response? so the client has to be the one sending the request. if you try to edit the code and send two reponses instead of one:

```javascript
app.get('/server', (req, res) => {  // the location of the server (localhost:port/server)
    res.send('response')
    res.send('another response')
})
```

Save the code and run `node server.js` again. Then go back to your browser and visit `localhost:5000/server`. You can only see the first response (`"response"`). If you have a look at your terminal, you will see the following error: `Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client`. With HTTP, if you want to send another response, you need another request (sure one response can be more than just a string).
(Go [here](https://www.codecademy.com/articles/what-is-rest) if you want to know more about RESTful API).