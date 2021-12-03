const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs"); 
app.use(express.static("public"));
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const jsonFile = "./posts.json";


app.get("/", (req, res) => {  
    res.sendFile(__dirname + "/index.html");  
    console.log("3");
}); 
app.listen(port, () => {
    console.log("Kör servern på localhost:3000");
    });
    


app.post("/form", (req,res) => {
   
    console.log("4");
    let post = {        
        name: req.body.name,
        email: req.body.email,
        tel: req.body.tel,
        comment: req.body.comment
    }
    
    
    
    let readJsonFile = fs.readFileSync(jsonFile);
    console.log("5");
    let norm = JSON.parse(readJsonFile); 
    console.log("6");   
    norm.push(post);
    console.log("7");
    
    let newF = JSON.stringify(norm);
    console.log("8");
    fs.writeFile(jsonFile, newF, (err) => {
        if (err) throw err;
        console.log("10");
    });
    res.redirect('/');
});

// app.post("/form", (req,res) => {
    
//     let name = req.body.name; 
//     let email = req.body.email;
//     let tel = req.body.tel;
//     let comment = req.body.comment;

//     let all = `Namn: ${name}<br>Email: ${email}<br>Tel: ${tel}<br>Kommentar: ${comment}<br><br>\n`;
    
       
//     fs.appendFile("guestbook.txt", all, (err) => {
//         if (err) throw err; 
//         const content = fs.readFileSync("guestbook.txt");
//         fs.readFile("guestbook.txt", (err) => {
//             if (err) throw err;                
//             res.send(content.toString());         
//         });      
//     });  
// }); 

// const jsonPost = JSON.stringify(posts, null, 2) + ',\n';
    // fs.appendFile('posts.txt', jsonPost, (err) => {
    //     if (err) throw err; 
        
    //     var data = JSON.parse(fs.readFileSync(content));
        
    //     fs.readFile("posts.txt", (err) => {
    //         if (err) throw err; 
    //         res.send(content.toString());
    //         res.send(data.toString());
    //     });
    // });

/*
const saveData = (posts) => {
        const finished = (err) => {
            if (err){
                console.error(err)
                return;
            }
        }
        const jsonPost = JSON.stringify(posts, null, 2) + '\n';
        fs.appendFile('posts.json', jsonPost, finished)
    } 
    saveData(posts);
*/
    