const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 8080;

require("./routes")(app);

io.on("connection", (socket) => {
    console.log("Hello from sockets");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("message", ({ user, date, msg }) => {
        socket.emit("message", { user, date, msg });
    });
});

server.listen(PORT, () => {
    console.log("listening on " + PORT);
});
