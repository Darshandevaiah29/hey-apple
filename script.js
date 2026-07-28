// ===== Elements =====
const stars = document.getElementById("stars");
const countdown = document.getElementById("countdown");
const beginBtn = document.getElementById("beginBtn");
const message = document.getElementById("message");
const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");
const music = document.getElementById("music");

// ===== Generate Stars =====
for (let i = 0; i < 250; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);
}

// ===== Countdown =====
function updateCountdown() {

    const now = new Date();

    let target = new Date(now.getFullYear(), 7, 13, 0, 0, 0);

    if (now > target) {
        target.setFullYear(target.getFullYear() + 1);
    }

    const diff = target - now;

    if (
        now.getMonth() === 7 &&
        now.getDate() === 13
    ) {
        countdown.innerHTML = "🎉 Today is your special day! 💜";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
        `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Balloons =====
function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const emojis = ["🎈","💜","✨"];

    balloon.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    balloons.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 11000);

}

// ===== Confetti =====
function createConfetti() {

    const piece = document.createElement("div");

    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.background =
        [
            "#FFD700",
            "#FF69B4",
            "#87CEFA",
            "#98FB98",
            "#FFFFFF",
            "#C8A2FF"
        ][Math.floor(Math.random() * 6)];

    piece.style.animationDuration =
        (3 + Math.random() * 2) + "s";

    confetti.appendChild(piece);

    setTimeout(() => {
        piece.remove();
    }, 5000);

}

// ===== Begin Button =====
beginBtn.addEventListener("click", () => {

    document.body.classList.add("light");

    beginBtn.style.display = "none";

    message.classList.add("show");

    // Play music
    music.volume = 0.7;

    music.play().catch(() => {
        console.log("Music couldn't autoplay.");
    });

    // Balloons
    for (let i = 0; i < 25; i++) {

        setTimeout(createBalloon, i * 250);

    }

    // Confetti
    for (let i = 0; i < 180; i++) {

        setTimeout(createConfetti, i * 25);

    }

});

// ===== Shooting Stars =====
setInterval(() => {

    const shooting = document.createElement("div");

    shooting.style.position = "fixed";
    shooting.style.width = "120px";
    shooting.style.height = "2px";
    shooting.style.background = "white";
    shooting.style.left = Math.random() * 70 + "vw";
    shooting.style.top = Math.random() * 40 + "vh";
    shooting.style.transform = "rotate(-30deg)";
    shooting.style.boxShadow = "0 0 12px white";
    shooting.style.zIndex = "2";

    document.body.appendChild(shooting);

    shooting.animate(
        [
            {
                transform: "translate(0,0) rotate(-30deg)",
                opacity: 1
            },
            {
                transform: "translate(350px,220px) rotate(-30deg)",
                opacity: 0
            }
        ],
        {
            duration: 1200,
            easing: "ease-out"
        }
    );

    setTimeout(() => {

        shooting.remove();

    }, 1200);

}, 7000);