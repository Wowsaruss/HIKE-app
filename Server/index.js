var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var axios = require("axios");

var app = express()

app.use(cors())

app.use(bodyParser.json())

let incompleteTrails = [];

app.post("/api/create", function(request, response) {
    incompleteTrails.push(request.body)
    response.json(incompleteTrails)
})

app.get("/api/create", function(request, response) {
    incompleteTrails.push(incompleteTrails)

})

// app.get("/api/hello", function(request, response){
//     response.json(arr)
// })

app.listen(3006, function(){
    console.log("I'm listening!")
})


