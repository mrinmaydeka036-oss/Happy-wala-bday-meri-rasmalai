// ==========================
// Birthday Surprise Script ❤️
// ==========================

// Unlock Date
const unlockDate = new Date("July 31, 2026 00:00:00").getTime();

// Preview Mode
const previewMode = window.location.search.includes("preview=true");

// Elements
const lockScreen = document.getElementById("lockScreen");
const giftScreen = document.getElementById("giftScreen");
const birthdayPage = document.getElementById("birthdayPage");
const countdown = document.getElementById("countdown");
const openGift = document.getElementById("openGift");
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const bgMusic = document.getElementById("bgMusic");

// Open Letter
openLetter.addEventListener("click", () => {
    letter.style.display = "block";
    letter.scrollIntoView({
        behavior: "smooth"
    });
});

// Show Gift Screen
function showGiftScreen() {
    lockScreen.style.display = "none";
    giftScreen.style.display = "flex";
    birthdayPage.style.display = "none";
}

// Preview Mode
if (previewMode) {

    showGiftScreen();

} else {

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = unlockDate - now;

        if (distance <= 0) {

            showGiftScreen();

            if (typeof confetti === "function") {
                confetti({
                    particleCount: 250,
                    spread: 180,
                    origin: { y: 0.6 }
                });
            }

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Gift Open
openGift.addEventListener("click", () => {

    giftScreen.style.display = "none";
    birthdayPage.style.display = "block";

    if (bgMusic) {
        bgMusic.play().catch(() => {});
    }

    if (typeof confetti === "function") {
        confetti({
            particleCount: 350,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

});
