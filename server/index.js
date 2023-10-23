const express = require("express")
const app = express();
const server = require("http").Server(app)
const io = require("./socket").init(server);
const { ExpressPeerServer } = require("peer")

const options = { debug: true }

app.use("/peerjs", ExpressPeerServer(server, options))

io.on("connection", (socket) => {
    socket.on("join-broadcast", (broadcastId, userId) => {
        socket.join(broadcastId);
        io.to(broadcastId).emit("user-connected", userId)
    })
})

server.listen(4000)
