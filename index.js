import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
const displayNope = document.querySelector(".display-nope")
const displayLike = document.querySelector(".display-like")

//New Dog Instance
let currentDog = new Dog(dogsData[currentDogIndex])

document.getElementById("accept-button").addEventListener('click',yes)
document.getElementById("reject-button").addEventListener('click',no)
  

render()

function render(){
    document.getElementById("card").innerHTML = currentDog.getDogHtml()
}


//Concatenate currentDogIndex, so it moves the array when the user clicks the bottons.
//Updates the new dog instance, with a new dog since the array positon changed.

function getNewDog() {
    currentDogIndex += 1;
    
    if (currentDogIndex < dogsData.length) {
        currentDog = new Dog(dogsData[currentDogIndex])
        render()
    } else {
        document.getElementById("card").innerHTML = `
        No more dogs in your area
        <img src="/images/hydrant.gif" class="hydrant">`;
        document.querySelector(".actions").style.display = "none";
    }    
} 

function swipe(like, badgeEl) {
    const myTimeOut = setTimeout(getNewDog,1500)
    currentDog.setMatchStatus(like)
    setTimeout(stopBadge,1500)
    badgeEl.style.display = "block";
}

function yes(){
    swipe(true, displayLike)    
}


function no(){
    swipe(false, displayNope)  
}


function stopBadge(){
    displayLike.style.display = "none";
    displayNope.style.display = "none";
}

