
const heading = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", ()=> {

    if(heading.innerHTML == "Friend"){
        heading.innerHTML = "UnFriend";
        button.innerHTML = "UnFollow";
    }
    else{
        heading.innerHTML = "Friend";
        button.innerHTML = "Follow";

    }


})