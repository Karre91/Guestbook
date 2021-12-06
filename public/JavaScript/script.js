myFunction = function () {      

    document.getElementById("button").disabled = true;
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

let regex = function(regex, testOn, index,){
let testBool = regex.test(testOn);
let msgPlace = document.getElementsByClassName("msg");

 if (testBool){
     msgPlace[index].innerHTML = " Input korrekt";
     return true;
 }
 if (!testBool){
    msgPlace[index].innerHTML = " Input felaktig";
    return false;
 }
 testBool = null; 
}

let count = 0; 

checkInput = function (variabel) {
    
    let name = document.getElementById("name").value;
    let email  = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;  

    if (variabel == 'name') {
        if (regex(/^[a-ð ,.'-]+$/i, name, 0)) count = count + 1;
        else{
            if (count > 0) count = count - 1;
         }
    }
    if (variabel == 'email') {
        if (regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, email, 1)) count = count + 1;
        else{
            if (count > 1) count = count - 1;
        }
    }

    if (variabel == 'tel'){
        if (regex(/\d{6}/g, tel, 2)) count = count + 1;
        else{
            if (count > 1) count = count - 1;
        }
    }
    if (count < 3){
 document.getElementById("button").disabled = true;
 }
 else document.getElementById("button").disabled = false;
}


