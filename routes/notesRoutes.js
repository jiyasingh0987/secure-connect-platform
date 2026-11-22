const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createNote,
    getNotes,
    updateNote,
    deleteNote
} = require("../controllers/notesController");

// All routes are protected
router.use(authMiddleware);

// Create Note
router.post("/", createNote);

// Get All Notes
router.get("/", getNotes);

// Update Note
router.put("/:id", updateNote);

// Delete Note
router.delete("/:id", deleteNote);

module.exports = router;