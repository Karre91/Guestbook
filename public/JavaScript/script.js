myFunction = function () {  

    let request = new XMLHttpRequest(); //ny förfrågan
    request.open('GET', '../posts.json', true);
    request.onload = function(){
        let data = JSON.parse(this.response);
        for (let i = data.length -1; i >= 0; i--){
            
            const outName = document.createElement("p");
            outName.setAttribute("class","postN"); //postn är klassnamnrs
            outName.textContent = data[i].name;
            document.body.appendChild(outName);

            const outEmail = document.createElement("p");
            outEmail.setAttribute("class","outEmail"); //postn är klassnamnrs
            outEmail.textContent = data[i].email;
            document.body.appendChild(outEmail);

            const outTel = document.createElement("p");
            outTel.setAttribute("class","outTel"); //postn är klassnamnrs
            outTel.textContent = data[i].tel;
            document.body.appendChild(outTel);

            const outCom = document.createElement("p");
            outCom.setAttribute("class","outCom"); //postn är klassnamnrs
            outCom.textContent = data[i].comment;
            document.body.appendChild(outCom);
        }        
    }
    request.send();        
}
   
