myFunction = function () {  

    let request = new XMLHttpRequest(); //ny förfrågan
    request.open('GET', './posts.json', true);
    console.log("1");
    request.onload = function(){
        console.log("2");
        let data = JSON.parse(this.response);
        for (let i = data.length -1; i >= 0; i--){
            console.log("hej");
            const postN = document.createElement("p");
            postN.setAttribute("class","postN"); //postn är klassnamnrs
            postN.textContent = data[i].name;
            document.body.appendChild(postN);
        }
    }
    request.send();
}
