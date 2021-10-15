let avatarImg = document.querySelector(".img-avatar")
avatarImg.addEventListener("click", ()=> {
    avatarImg.src = "./image/avatar-bis.svg";
});

let modifyTextColorButton = document.getElementById("modify-text-color-button");
modifyTextColorButton.addEventListener("click", ()=>{
    let popUpName = prompt("What's your name", "")
    let popUpBackgroundColor = prompt("Choose the color", "")

    // return popUpName;
    let changeName = document.getElementById("name");
    changeName.innerHTML = popUpName;
    changeName.style.color = "white";

    let changeBackgroundColor = document.querySelector(".pink-bg");
    changeBackgroundColor.style.backgroundColor = popUpBackgroundColor;

});



