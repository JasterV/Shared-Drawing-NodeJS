# NODE JS Integration for a simple p5.js sketch

I wanted to start to learn javascript so i thought the best way to do it could be by building stuff with p5.js, a great graphics development tool for the Web!

So i did a simple sketch that paints the canvas when you press the mouse, and then the X,Y coords are send to a Node.js server implemented easily with Express.

The idea isn't too complex: 
The sketch represents a client that sends the data through a socket, getting help of the [socket.io](https://socket.io/) library while the server waits for connections and prepares to resend the data it receives.

  Here you can see an example:
  The server starts listening to the port 3000 on localhost and there are 3 browsers open working as clients.
  
    + Running the server:
  
      ![Server running](https://github.com/JasterV/Shared-Drawing-NodeJS/blob/master/nodejs_example.png)
  
    + Clients example:
  
      ![The clients running](https://media.giphy.com/media/jRwGOND98wTvRZayIB/giphy.gif)
