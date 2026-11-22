require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const notesRoutes = require("./routes/notesRoutes");
const registerChatHandlers = require("./sockets/chat");

const app = express();

// Middleware
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/notes", notesRoutes);
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
// HTTP server
const server = http.createServer(app);

// Socket.IO server
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Secure Connect Platform API is running"
    });
});

// Socket connection test
// io.on("connection", (socket) => {
//     console.log("User connected:", socket.id);

//     socket.on("disconnect", () => {
//         console.log("User disconnected:", socket.id);
//     });
// });

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    server.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

registerChatHandlers(io);
startServer();
