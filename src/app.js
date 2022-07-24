const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");
//public static path
const path = require("path");
const staticPath = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../template/views")
const partials_path = path.join(__dirname, "../template/partials")
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render("about.hbs");
})


app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("404error", {
        errormsg: "Oops! Page Not Found"
    });
})

app.listen(port, () => {
    console.log(`listening the port no is ${port}`)
})