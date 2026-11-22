
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const User = require("../models/User");

router.get(
    "/users",
    authMiddleware,
    roleMiddleware("admin"),
    async (req, res) => {
        try {
            const users = await User.find().select("-password");

            res.status(200).json({
                message: "Users fetched successfully",
                users
            });

        } catch (error) {
            res.status(500).json({
                message: "Failed to fetch users"
            });
        }
    }
);

module.exports = router;
