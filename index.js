const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    /* Sending a JSON response to the client. */
    res.json({ message: "welcome to node js!!!" });
    // res.send("<h1>welcome to node js!!!</h1>");
});

app.listen(port, function (err) {
    if (err) {
        console.log("Error in starting server");
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
});
