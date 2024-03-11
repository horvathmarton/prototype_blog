import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { Post } from "./container/post.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const app = express();
const port = 3000;
let authorised = false;
let posts = new Map();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { authorised: authorised });
});
const today = new Date();
app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/check", (req, res) => {
    if (req.body["fpassword"] === "user" && req.body["femail"] === "user@gmail.com") {
        authorised = true;
        res.redirect("/");
    } else {
        res.render("login.ejs", {
            checked: true,
            authorised: authorised,
        });
    }

});

app.get("/post", (req, res) => {
    res.render("createPost.ejs");
});


app.post("/createPost", (req, res) => {
    console.log(req.body["title"]);
    console.log(req.body["sDescription"]);
    console.log(req.body["post"]);
    posts.push(new Post(req.body["title"], req.body["sDescription"], req.body["post"]));
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});