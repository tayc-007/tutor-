const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

let firstnum = Math.floor(Math.random() * 100) + 1;
let secondnum = Math.floor(Math.random() * 100) + 1;
let subsnum = Math.floor(Math.random() * 24) + 1;
let addans = firstnum + secondnum ;
let subtans = firstnum - subsnum;
let total = 0 ;

app.get("/",function(req,res){
    res.render("start");
});

app.post("/",function(req,res){
    res.redirect("/firstq");
});

app.get("/firstq",function(req,res){
    res.render("firstq",{firstnum:firstnum , secondnum:secondnum});
});

app.post("/firstq",function(req,res){
    let answer = Number(req.body.answer);
    if(answer === addans){
        total++
        console.log("Correct ! " + total);
    } else{
        console.log("Incorrect ! " + total);
    }
    res.redirect("/secondq");

});
app.get("/secondq",function(req,res){
    res.render("secondq",{firstnum:firstnum , subsnum:subsnum});
});
app.post("/secondq",function(req,res){
    let answer = Number(req.body.answer);
    if(answer === subtans){
        total++
        console.log("Correct ! " + total);
    } else{
        console.log("Incorrect ! " + total);
    }
    res.redirect("/thirdq");

});
app.get("/thirdq",function(req,res){
    res.render("thirdq",{firstnum:firstnum , secondnum:secondnum});
});
app.post("/thirdq",function(req,res){
    let answer = Number(req.body.answer);
    if(answer === addans){
        total++
        console.log("Correct ! " + total);
    } else{
        console.log("Incorrect ! " + total);
    }
    res.redirect("/fourq");

});
app.get("/fourq",function(req,res){
    res.render("fourq",{firstnum:firstnum , subsnum:subsnum});
});
app.post("/fourq",function(req,res){
    let answer = Number(req.body.answer);
    if(answer === subtans){
        total++
        console.log("Correct ! " + total);
    } else{
        console.log("Incorrect ! " + total);
    }
    res.redirect("/finish");

});
app.get("/finish",function(req,res){
    res.render("finish");
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});