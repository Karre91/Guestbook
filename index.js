const express = require("express");
const fs = require("fs"); 
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/form", (req, res) => {  
    res.sendFile(__dirname + "/index.html");  
});

app.post("/form", (req,res) => {
    
    let name = req.body.name; 
    let email = req.body.email;
    let tel = req.body.tel;
    let comment = req.body.comment;

    let all = `Namn: ${name}<br>Email: ${email}<br>Tel: ${tel}<br>Kommentar: ${comment}<br><br>\n`;
    
       
    // fs.appendFile("guestbook.txt", all, (err) => {
    //     if (err) throw err; 
    //     const content = fs.readFileSync("guestbook.txt");
    //     fs.readFile("guestbook.txt", (err) => {
    //         if (err) throw err;                
    //         res.send(content.toString());         
    //     });      
    // });     
});

app.listen(port, () => {
    console.log("Kör servern på localhost:3000");
});