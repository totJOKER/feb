const noneButton = document.getElementById('none');
const doneButton = document.getElementById('done');
const box = document.getElementById('box');

let randomNum = 0;
let action = 0

const setAction = () => {
    action = Math.floor( Math.random() * 4 )
    if (action == 0 || action >= 5) {
        setAction();
    } else {
        return action 
    }
}

const setRandom = () => {

    return randomNum = Math.floor( Math.random() * 100 )
}

noneButton.onclick = () => {
    setAction();
    if (action == 1) {
        noneButton.style.transform = `translate(${setRandom()}px, ${setRandom()}px)`
    } else if (action == 2) {
        noneButton.style.transform = `translate(-${setRandom()}px, -${setRandom()}px)`
    } else if (action == 3) {
        noneButton.style.transform = `translate(-${setRandom()}px, ${setRandom()}px)`
    } else if (action == 4) {
        noneButton.style.transform = `translate(${setRandom()}px, -${setRandom()}px)`
    }
}

doneButton.onclick = () => {
    box.style.width = '30vw';
    box.style.height = '30vw';
    box.style.fontSize = '2vw'
    box.innerText = 'Ура, встретимся в среду ❤️️';
    doneButton.style.opacity = 0;
    noneButton.style.opacity = 0;
}