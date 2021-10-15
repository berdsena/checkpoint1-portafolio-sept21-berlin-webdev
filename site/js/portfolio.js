function change(){
    document.getElementById("avatarFirst").setAttribute("src", "./image/avatar-bis.svg");
    }

function changeName(){
    const nameNew = prompt("Enter your Name:", "");
    const nameColor = prompt("Enter your Color:", "");

   document.getElementById("name").innerHTML= nameNew;
   document.getElementById("name").element.style.color = "white";7
   document.getElementsByClassName("description").style.backgroundColor = nameColor;
   

}


