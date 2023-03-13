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

/* This is a post request to the server. */
app.post("/verifyToken", extractToken, (req, res) => {
    /* This is a function that is used to verify the token. */
    jwt.verify(req.token, "secretkey", function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({ message: "User access granted", data });
        }
    });
});

/*This function is used to extract the token from the request header.*/
function extractToken(req, res, next) {
    const bearerHeader = req.headers["authorization"]; // Bearer token

    /* This is a middleware function that is used to extract the token from the request header. */
    if (bearerHeader !== undefined) {
        const bearer = bearerHeader.split(" "); // ['Bearer', 'token']
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(port, function (err) {
    if (err) {
        console.log("Error in starting server");
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
});
