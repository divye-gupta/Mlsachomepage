let about = document.getElementsByClassName("about-us")[0]
let events = document.getElementsByClassName('upcoming-events')[0]
let abc = document.getElementsByClassName('About')[0]

let animationPopup1 = () => {
 about.style.bottom = "7rem";
}

let animationPopup2 = () => {
    events.style.bottom = "7rem";
    events.style.right = "0rem";
}

function leave1(){
    about.style.bottom = "-38rem";
}

function leave2(){
    events.style.bottom = "-38rem";
}
