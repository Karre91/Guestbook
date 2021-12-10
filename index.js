const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs"); 
app.use(express.static("public"));
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const jsonFile = "public/posts.json";

app.get("/", (req, res) => {  
    res.sendFile(__dirname + "/public/HTML/login.html");  
});

app.post("/login", (req,res) => {

    let email = req.body.userEmail;
    let password = req.body.pass;

    let testEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let testPass = /\d{6}/g;

    if (testEmail.test(email) && testPass.test(password)){        
        res.redirect("/guestbook");
    }
    else {
        res.redirect("/");
    }
});

app.get("/guestbook", (req, res) => {  
    res.sendFile(__dirname + "/public/HTML/index.html");  
}); 

app.post("/form", (req,res) => {
   
    let name = req.body.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let email = req.body.email.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let tel = req.body.tel.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let comment = req.body.comment.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let time = new Date()
    
    day = time.getDate();
    day = ("0"+ day).slice(-2);

    hour = time.getHours();
    hour = ("0"+ hour).slice(-2);

    minute = time.getMinutes();
    minute = ("0"+ minute).slice(-2);

    sec = time.getSeconds();
    sec = ("0"+ sec).slice(-2);

    let today = `${time.getFullYear()}-${(time.getMonth()+1)}-${day} kl.${hour}:${minute}:${sec}`;
    let post = {   
        today,     
        name,
        email,
        tel,
        comment,
    }   

    let readJsonFile = fs.readFileSync(jsonFile);
    let norm = JSON.parse(readJsonFile); 
    norm.push(post);
    
    let newF = JSON.stringify(norm);
    fs.writeFile(jsonFile, newF, (err) => {
        if (err) throw err;
    });
    res.redirect("/guestbook");
});

app.listen(port, () => {
    console.log("Kör servern på localhost:3000");
});