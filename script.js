let searchbtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let card =document.querySelector(".card");


function getProfileData(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw)=>{
    if(!raw.ok) throw new Error("User not found");
    return raw.json();
    });
}