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

// START server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});