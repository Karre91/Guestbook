let posts = [];

const addPost = (any) => {
    any.preventDefault();

    let thePost ={
        time: Date.now(),
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        comment: document.getElementById("comment").value
    }
    posts.push(thePost);
    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('butt').addEventListener('click', addPost);
});


// posts = JSON.stringify(thePost);
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange =  function(){
//     if (this.readyState == 4 && this.status == 200){
//         let response = JSON.parse(xhttp.responseText);
//         let posts = response.posts;
//     let output = '';
//     for (let i = 0; i < post.lengt; i++){
//         output += '<li>' + post[i] + '</li>';
//     }
//     document.getElementById('post').innerHTML = output;
//     }
// };
// xhttp.open("GET", "posts.json", true);
// xhttp.send();
// console.log(posts);