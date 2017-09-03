var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")

var app = express()

app.use(cors())
var arr = [{
    name: "",
    city: "",
    state: ""
}, {
    name: "",
    city: "",
    state: ""
}, {
    name: "",
    city: "",
    state: ""
}];

app.get("/api/hello", function(request, response){
    response.json(arr)
})

app.listen(3006, function(){
    console.log("I'm listening!")
})


