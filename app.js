var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

// SETUP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


// ROUTES
app.get("/", function(req, res){
    res.render("index");
})

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/werkwijze", function(req, res){
    res.render("werkwijze");
});

app.get("/info", function(req, res){
    res.render("info");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

// START server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});