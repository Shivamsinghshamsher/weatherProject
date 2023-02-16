// const express = require('express');
const express = require('express');
const https= require('https');

const app= express();
 
app.get("/", function(request, response){
    response.send("Shivamm");
    const url ="https://api.openweathermap.org/data/2.5/weather?q=bhagalpur&appid=e572f0371f8536cfc7aef3ebc580b694&units=metric"
    https.get(url, function(res){
        // console.log(req);
        console.log(res.statusCode);
        res.on("data",function(data){ 
            console.log(data);
            const weatherdata=JSON.parse(data);
            console.log(weatherdata );

            const temp= weatherdata.main.temp;
            console.log(temp);
            console.log(weatherdata.weather[0].description);
         console.log(weatherdata.main.feels_like);
  /* 
            const object = { 
                name: "shivam",
                 roll: 22 
            }
            console.log(JSON.stringify(object)); */
        })  


    }) 
})
 
app.listen(3000, function(){
    console.log("App is listening on port 3000");
});
