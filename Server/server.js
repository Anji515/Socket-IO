const io = require("socket.io")(3000, {
  cors: { origin: "http://localhost:3001", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("Connected with a user.");
  socket.on('message', (msg)=>{
    console.log('msg');
    io.emit('message', msg)
  })
});
