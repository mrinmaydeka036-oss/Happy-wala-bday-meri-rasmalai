// ==============================
// Premium Birthday Website Script
// ==============================

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 700);

// Open Letter

const openLetter = document.getElementById("openLetter");

if (openLetter) {

    openLetter.addEventListener("click", () => {

        const letter = document.getElementById("letter");

        if (letter.style.display === "block") {

            letter.style.display = "none";

        } else {

            letter.style.display = "block";

            letter.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// Confetti

window.onload = () => {

    if (typeof confetti === "function") {

        confetti({

            particleCount: 300,

            spread: 180,

            origin: {
                y: 0.6
            }

        });

    }

};

// Floating Hearts CSS

const style = document.createElement("style");

style.innerHTML = `

.heart{

position:fixed;

bottom:-50px;

pointer-events:none;

animation:fly linear forwards;

z-index:999;

}

@keyframes fly{

0%{

transform:translateY(0) scale(1);

opacity:1;

}

100%{

transform:translateY(-110vh) scale(1.8);

opacity:0;

}

}

`;

document.head.appendChild(style);
