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
   
    let post = {        
        name: req.body.name,
        email: req.body.email,
        tel: req.body.tel,
        comment: req.body.comment
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
