const registerChatHandlers = (io) => {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("join_room", (room) => {
            socket.join(room);
            console.log(`${socket.id} joined room: ${room}`);
        });

        socket.on("send_message", (data) => {
            io.to(data.room).emit("receive_message", {
                sender: data.sender,
                message: data.message,
                time: new Date()
            });

            console.log("Message sent:", data.message);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
};

module.exports = registerChatHandlers;