const express = require("express"); // "require" betyder att man importerar en modul
const app = express();
app.get("/", function(req, res) {   // definiera en route som lyssnar på get-förfrågningar
    res.send("<h1>Hallå Express!</h1>");    // med metoden "send" istället för "end" så visas svenska bokstäver korrekt
    // Express har en funktion "send" som även skickar headerinformation som t.ex. teckenkodning
});
app.listen(3000);   // STARTAR SERVERN OCH LYSSNAR PÅ PORT 3000
console.log("Kör servern på localhost:3000");

app.get("/undersida", function(req, res) {
    res.send("Välkommen till undersidan!");
});

const fs = require("fs");   // eventuellt behöver ni köra "npm install fs"
app.get(" ", function(req, res) {
    fs.readFile("Hej.txt", function(err, data) {   // första argumentet är filnamnet, andra argumentet är en funktion (callback)
        // callback-funktionen har i sin tur två argument: ett objekt err med information om eventuella fel och ett objekt med data som lästs in
        if (err) throw err; // avbryt exekveringen vid fel
        else console.log(err);  // null om inget fel inträffat
        res.send(data);
    });
});