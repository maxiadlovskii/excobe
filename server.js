const express = require('express');
const cors = require('cors');
const { createVideosPack } = require("./videos");
const app = express();

app.use(cors());

app.get("/videos", (_req, res) => {
    let pageSize = _req.query.pageSize || 10;
    const videosPack = createVideosPack(pageSize);
    // simulate a slow database call using setTimeout
    setTimeout(() => {
        res.json(videosPack);
    }, 1000);
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
