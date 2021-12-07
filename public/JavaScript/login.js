let regex = function(regex, testOn){
    let testBool = regex.test(testOn);
    let msgPlace = document.getElementsByClassName("msg");

    if (testBool){    
        return true;
    }
    if (!testBool){   
        return false;
    }
    testBool = null; 
}

let login = function () {
    
    let email  = document.getElementById("userEmail").value;
    let pass = document.getElementById("pass").value; 
    
    if (!regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, email)){
        alert("Du måste skriva in en giltig email!");
    } 
    if (!regex(/\d{6}/g, pass)){
        alert("Du måste ha ett lösenord bestående av 6 siffror");
    } 
    
}



