// ============================
// Birthday Surprise Script ❤️
// ============================

// Change date if needed
const unlockDate = new Date("July 31, 2026 00:00:00").getTime();

// Preview Mode
const previewMode = window.location.search.includes("preview=true");

// Elements
const lockScreen = document.getElementById("lockScreen");
const birthdayPage = document.getElementById("birthdayPage");
const countdown = document.getElementById("countdown");
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const giftScreen = document.getElementById("giftScreen");
const openGift = document.getElementById("openGift");
const bgMusic = document.getElementById("bgMusic");

// Open Letter
openLetter.addEventListener("click", () => {

letter.style.display = "block";

letter.scrollIntoView({
behavior:"smooth"
});

});

// Preview Mode
if(previewMode){

lockScreen.style.display="none";

birthdayPage.style.display="block";

if(typeof confetti==="function"){

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

}

}

// Countdown
else{

birthdayPage.style.display="none";

function updateCountdown(){

const now=new Date().getTime();

const distance=unlockDate-now;

if(distance<=0){

lockScreen.style.display="none";

giftScreen.style.display="flex";

if(typeof confetti==="function"){

confetti({

particleCount:350,

spread:180,

origin:{y:0.6}

});

}

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

countdown.innerHTML=`

<h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>

`;

}

updateCountdown();

setInterval(updateCountdown,1000);

}

openGift.addEventListener("click", () => {

    giftScreen.style.display = "none";

    birthdayPage.style.display = "block";

    bgMusic.play();

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

});
