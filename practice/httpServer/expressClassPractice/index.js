// const express = require("express");
// const app = express();
// const port = 3001;
// app.use(express.json());

// const user = [{
//     name : "karthick",
//     kidneys : [{healthy : false}, {healthy : true}]
// }]

// app.get("/", function(req, res){
//     let jhonKidney = user[0].kidneys;
//     let noOfKidney = jhonKidney.length;
//     let noOfHealthyKidney = 0;
//     let noOfUnhealthyKidney = 0;
//     for( let i = 0; i<noOfKidney; i++){
//         if(jhonKidney[i].healthy){
//             noOfHealthyKidney = noOfHealthyKidney + 1;
//         }
      
//     noOfUnhealthyKidney = noOfKidney - noOfHealthyKidney;    
//     }

//     console.log(" The get request")

//     res.json({
//         noOfKidney,
//         noOfHealthyKidney,
//         noOfUnhealthyKidney
//     });
// });

// app.post("/", function(req, res){
//     const isHealthy = req.body.isHealthy;
//     user[0].kidneys.push({
//         healthy : isHealthy })
     
//     console.log("The post request")    
//     res.json({
//         msg : "Done!"
//     })    
// });

// function isThereAtleastOneUnHealthyKidney(){
//     let atleastOneUnHealthyKidney = false;
//     for (let i = 0; i<user[0].kidneys.length; i++){
//         if(!user[0].kidneys[i].healthy){
//             atleastOneUnHealthyKidney = true;
//         }
//     }   
//     return atleastOneUnHealthyKidney;
// }

// app.put("/", function(req, res){
//     if(isThereAtleastOneUnHealthyKidney()){
//         for (let i = 0; i<user[0].kidneys.length; i++){
//             user[0].kidneys[i].healthy = true;
//         }
//         console.log("The put request");
//         res.json({
//             msg : "Done!"
//         })    
//     }
//     else{
//         res.status(411).json({
//             mes : "You have no unhealthy kidney"
//         })
//     }
//     });



// app.delete("/", function(req, res){
//     if(isThereAtleastOneUnHealthyKidney()){
//         const newKidney = [];
//         for (let i = 0; i<user[0].kidneys.length; i++){
//             if(user[0].kidneys[i].healthy){
//                 newKidney.push({healthy : true});
//             }
//         }

//         user[0].kidneys = newKidney;
//         console.log("The delete request");
//         res.status(200).json({
//             mes : "Done!"
//         })

//     }
//     else{
//         res.status(411).json({
//             mes : "You have no bad kidney"
//         })
//     }
    
// });

// app.listen(port);


const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hi there I am karthick')
})

app.listen(port); 