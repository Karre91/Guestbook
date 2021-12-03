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

let regex = function(regex, testOn, index){
let testBool = regex.test(testOn);
let msgPlace = document.getElementsByClassName("msg");
let button = document.getElementById('button');
let count = 0;

 if (testBool){
     msgPlace[index].innerHTML = " Input korrekt";
     count += 1;
     console.log("True " + count);
 }
 if (!testBool){
     msgPlace[index].innerHTML = " Input felaktig";
     count =- 1;
     console.log("False " + count);
 }
 testBool = null;
 console.log("Total " + count);
 if (count >= 1){
 document.getElementById("button").disabled = false;
 }
}

checkInput = function (variabel) {
    
    let name = document.getElementById("name").value;
    let email  = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;     

    if (variabel == 'name')
    {
        regex(/^[a-ð ,.'-]+$/i, name, 0); 
    } 

    if (variabel == 'email')
    {
        regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, email, 1); 
    }

    if (variabel == 'tel'){
        regex(/\d{6}/g, tel, 2);
    }
 
}


