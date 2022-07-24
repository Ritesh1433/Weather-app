const express = require("express");
const app = express();

app.get('/',(req,res) => {
   res.send("Welcome to our home page");
});
app.get('/about',(req,res) => {
    res.send("Welcome to our about page");
 });
 app.get('/contact',(req,res) => {
    res.send("Welcome to our contact page");
 });
app.listen(3000, () => {
    console.log("listining to the port  numbr 3000") ;
})