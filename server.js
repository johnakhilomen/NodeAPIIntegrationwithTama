const express = require("express");
const bodyparser = require("body-parser");
const reqpromise = require("request-promise");
const app = express(); //Instantiating an object from express library


app.get("/", (req, res) => res.send("Welcome to NodeAPIIntegrationwithTamara") );

app.get("/api/getusersfromlichess", (req, res) => 
{
    var username = req.query.username; //grab the usdername passed inside the url
    var endpointurl = "https://lichess.org/api/user/"+username;
    reqpromise
    ({
        url: endpointurl,
        method: 'GET',
        json: true,
    }).then(function (responsedata) {
        res.send(responsedata)        
    })
});

const port = 3001;
app.listen(port, ()=>
{
    console.log("Sever is running!");
    //console.log("second line");
});