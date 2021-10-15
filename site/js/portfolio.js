// interactive avatar
const secondAvatarSrc = './image/avatar-bis.svg';
const avatar = document.querySelector('.titleImage');
avatar.addEventListener('click',()=>{avatar.src=secondAvatarSrc});
//modify text and color
const modifyButton = document.createElement('button');
modifyButton.innerText = 'Modify Text & Color';
modifyButton.style.backgroundColor = 'initial';
document.querySelector('.description').appendChild(modifyButton);

modifyButton.addEventListener('click',()=>{
    //prompting for the color value
    let newColor = prompt('Enter a color:');
    //changing the color of the section
    document.querySelector('.description').style.backgroundColor = newColor;
    //changing the name and its color after prompting 
    document.querySelector('#name').innerText = prompt('Enter your name:');
    document.querySelector('#name').style.color = 'white';
    //changing all the pinks to the new color
    const pinkBgArray = document.querySelectorAll('.pink-bg');
    const pinkTextArray = document.querySelectorAll('.pink-text');
    const linksArray = document.querySelectorAll('a');
    for (let i = 0; i< pinkBgArray.length; i++){
        pinkBgArray[i].style.backgroundColor = newColor;
    };
    for (let i = 0; i< pinkTextArray.length; i++){
        pinkTextArray[i].style.color = newColor;
    };
    for (let i = 0; i< linksArray.length; i++){
        linksArray[i].style.color = newColor;
    }
})
//bonus
const frontEndButton = document.createElement('button');
frontEndButton.innerText = 'Modify';
const frontEndSec = document.querySelectorAll('.skill')[1];
frontEndSec.appendChild(frontEndButton);
frontEndButton.addEventListener('click',()=>{
    frontEndSec.querySelectorAll('li')[0].innerText='VSCode';
    frontEndSec.querySelectorAll('li')[1].innerText='Github';
    frontEndSec.querySelectorAll('li')[2].innerText='Terminal';
});
//super bonus
const backEndButton = document.createElement('button');
backEndButton.innerText = 'Add';
const backEndInput = document.createElement('input');
backEndInput.placeholder = 'Add your dev tools';
backEndInput.type = 'text';
const backEndSec = document.querySelectorAll('.skill')[0];
backEndSec.appendChild(backEndInput);
backEndSec.appendChild(backEndButton);
backEndButton.addEventListener('click',()=>{
    let newValue = backEndInput.value;
    let newItem = document.createElement('li');
    newItem.innerText=newValue;
    document.getElementById('dev-tools-back-list').appendChild(newItem);
    backEndInput.value='';
})