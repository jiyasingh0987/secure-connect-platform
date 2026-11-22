const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("userRegistered", (username) => {
    console.log(`New user registered: ${username}`);
});

eventEmitter.on("noteCreated", (title) => {
    console.log(`New note created: ${title}`);
});

module.exports = eventEmitter;