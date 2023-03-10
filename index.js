const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 8080;

const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
    /* Sending a JSON response to the client. */
    res.json({ message: "welcome to node js!!!" });
    // res.send("<h1>welcome to node js!!!</h1>");
});

/* This is a post request to the server. */
app.post("/tokenGenerate", (req, res) => {
    const user = {
        id: 12345,
        username: "AugFreshers22",
        email: "augfresh22@coding.com",
    };
    /* This is a function that is used to generate a token. */
    jwt.sign(user, "secretkey", function (err, token) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                token,
            });
        }
    });
});

app.listen(port, function (err) {
    if (err) {
        console.log("Error in starting server");
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
});
