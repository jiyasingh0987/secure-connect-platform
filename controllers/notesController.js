
const Note = require("../models/Note");
const eventEmitter = require("../events/eventEmitter");

// Create Note
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const note = await Note.create({
            title,
            content,
            user: req.user.id
        });

        eventEmitter.emit("noteCreated", note.title);

        res.status(201).json({
            message: "Note created successfully",
            note
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create note"
        });
    }
};

// Get All Notes
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({
            user: req.user.id
        });

        res.status(200).json({
            message: "Notes fetched successfully",
            notes
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch notes"
        });
    }
};

// Update Note
const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id
            },
            {
                title,
                content
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated successfully",
            note
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update note"
        });
    }
};

// Delete Note
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete note"
        });
    }
};

module.exports = {
    createNote,
    getNotes,
    updateNote,
    deleteNote
};
