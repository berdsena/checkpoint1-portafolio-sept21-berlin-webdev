
const avatar = document.getElementById("avatarImage");

avatar.addEventListener("click", ()=> {
    avatar.src = "./image/avatar-bis.svg"
});

console.log("avatar works");

const presButton = document.getElementById("presentationButton");

presButton.addEventListener("click", () => {
    let person = prompt("Enter your name");
    if (person != null) {
      document.getElementById("name").innerHTML = person;
      document.getElementById("name").style.color = "white";
      document.querySelector(".pink-bg").style.backgroundColor = "#750ff7";
      document.querySelectorAll(".pink-bg").style.backgroundColor = "#750ff7";  
    };
});



