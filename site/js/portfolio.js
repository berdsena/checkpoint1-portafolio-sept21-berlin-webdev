//Change Banner
const avatar = document.getElementById('avatar');

avatar.addEventListener('click',() => {
    avatar.src = "./image/avatar-bis.svg";
})

//Add Button to change Name and Color
const button = document.getElementById('user-button');
button.addEventListener('click',() => {
    //change user-name and font-color
    const name = document.getElementById('name');
    name.innerText = prompt('Please enter your name:','John');
    name.style.color = 'white';

    //Change Color to user-input
    const usrColor = prompt('Enter Color:','#750ff7'); //choose Color
    
    const bgDescription = document.getElementsByClassName('description pink-bg');
    for (i = 0; i < bgDescription.length;i++){
    bgDescription[i].style.backgroundColor = usrColor;
    }

    const pinkText = document.getElementsByClassName('pink-text');
    for(let i=0;i < pinkText.length;i++){
        pinkText[i].style.color = usrColor;
    }
})

//