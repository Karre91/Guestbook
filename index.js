const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs"); 
app.use(express.static("public"));
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const jsonFile = "public/posts.json";

app.get("/", (req, res) => {  
    res.sendFile(__dirname + "/public/HTML/index.html");  
    console.log("3");
}); 
app.listen(port, () => {
    console.log("Kör servern på localhost:3000");
    });

app.post("/form", (req,res) => {
   
    let name = req.body.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let email = req.body.email.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let tel = req.body.tel.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    let comment = req.body.comment.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
           
    let post = {        
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

    res.send("<html><body><p>Inlägg skickat!</p><p>Du skickas nu till startsidan</p><script>var timer = setTimeout(function() {window.location='http://localhost:3000/HTML/index.html'}, 3000);</script></body></html>");
    
});
