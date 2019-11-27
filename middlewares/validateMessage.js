module.exports = (req, res, next) => {
    let newMessage = req.body;

    if (!newMessage) {
        res.status(400).json({ 
            message: "missing message data" 
        });
    } else if (!newMessage.text) {
        res.status(400).json({
            message: "missing required text field for a new user record"
        });
    } else if (!newMessage.timestamp) {
        res.status(400).json({
            message: "missing required timestamp field for a new user record"
        });
    } else {
        req.newMessage = newMessage;
        next();
    };
};