const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../template/views");

app.set("view engine","hbs");
app.set("views",templatePath);

app.use(express.static(staticPath));

app.get("/",(req,res) => {
    res.render("index", {
      start:"WELCOME",
    });
})

app.get("/about",(req,res) => {
    res.send("<h1>Shivam is happy today</h1>");
})

app.get("*",(req,res) => {
    res.render("404", {
      errorcomment:"oops page does't found",
    });
})


app.listen(port, () => {
    console.log("It is very important page");
});