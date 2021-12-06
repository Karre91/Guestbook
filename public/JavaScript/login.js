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
    
    if (regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, email) && regex(/\d{6}/g, pass)){
        setTimeout(function() {
        window.location='http://localhost:3000/HTML/index.html'}, 500)
    }
    else {
        setTimeout(function() {
        window.location='http://localhost:3000/HTML/login.html'}, 500)
    }   
}



