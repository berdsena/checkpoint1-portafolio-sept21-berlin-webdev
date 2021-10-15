let avatar = document.getElementById("avatar")

avatar.addEventListener("click", ()=>{

    avatar.src = "./image/avatar-bis.svg"

})


const btnJs = document.querySelector("#btnjs")

btnJs.addEventListener("click",()=>{
    const color = prompt("choose a color")
    //document.querySelector(".description pink-bg").bgColor = color
    const name = prompt("What is your name?")
    
    
    const textname = document.getElementById("name")
    textname.innerHTML = name
    textname.style.color = "white"
    
})


