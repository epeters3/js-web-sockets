
const Express = require('express');
const app = Express();
const http = require('http').Server(app);
const io = require("socket.io")(http);

app.use(Express.static("dist")); // Make assets in dist directory accessible from client.

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Serve up index.html as root file
});

// Web Socket Code
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    console.log(`The user sent msg: ${msg}`);
    io.emit("chat message", msg); // Broadcast the message to all clients.
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});