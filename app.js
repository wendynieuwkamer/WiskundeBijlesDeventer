var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

// SETUP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


// ROUTES
app.get("/", function(req, res){
    res.render("index", {page:"home"});
});

app.get("/about", function(req, res){
    res.render("about", {page:"about"});
});

app.get("/werkwijze", function(req, res){
    res.render("werkwijze", {page:"werkwijze"});
});

app.get("/info", function(req, res){
    res.render("info", {page:"info"});
});

app.get("/contact", function(req, res){
    res.render("contact", {page:"contact"});
});

// START server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});