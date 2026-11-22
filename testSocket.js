const { io } = require("socket.io-client");

const socket = io("http://localhost:5000");

socket.on("connect", () => {
    console.log("Connected to server:", socket.id);

    socket.emit("join_room", "room1");

    setTimeout(() => {
        socket.emit("send_message", {
            room: "room1",
            sender: "Jiya",
            message: "Hello! Real-time chat is working."
        });
    }, 1000);
});

socket.on("receive_message", (data) => {
    console.log("Message received:", data);
});

socket.on("connect_error", (error) => {
    console.log("Connection error:", error.message);
});