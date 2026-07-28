// ===== Elements =====
const starsContainer = document.getElementById("stars");
const countdown = document.getElementById("countdown");
const beginBtn = document.getElementById("beginBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");
const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");

// ===== Create Stars =====
for (let i = 0; i < 220; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";

    starsContainer.appendChild(star);
}

// ===== Countdown =====
function updateCountdown() {

    const now = new Date();

    let birthday = new Date(now.getFullYear(), 7, 13);

    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    if (
        now.getMonth() === 7 &&
        now.getDate() === 13
    ) {
        countdown.innerHTML = "🎉 Today is your special day! 💜";
        return;
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
        `⏳ ${days}d ${hours}h ${mins}m ${secs}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Balloons =====
function launchBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const items = ["🎈","💜","✨"];

    balloon.textContent =
        items[Math.floor(Math.random() * items.length)];

    balloon.style.left =
        Math.random() * 100 + "vw";

    balloon.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    balloons.appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);

}

// ===== Confetti =====
function launchConfetti() {

    const c = document.createElement("div");

    c.className = "confetti";

    c.style.left = Math.random() * 100 + "vw";

    c.style.background =
        [
            "#FFD700",
            "#FF69B4",
            "#87CEFA",
            "#98FB98",
            "#FFFFFF",
            "#C8A2FF"
        ][Math.floor(Math.random() * 6)];

    c.style.animationDuration =
        (3 + Math.random() * 2) + "s";

    confetti.appendChild(c);

    setTimeout(() => c.remove(), 5000);

}

// ===== Begin Button =====
beginBtn.addEventListener("click", async () => {

    document.body.classList.add("light");

    beginBtn.style.display = "none";

    message.classList.add("show");

    // Music
    try{
        music.currentTime = 0;
        music.volume = 0.8;
        await music.play();
    }
    catch(err){
        console.log(err);
        alert("Music couldn't start. Check that Kalank.mp3 is in the same folder as index.html.");
    }

    // Balloons
    for(let i=0;i<30;i++){
        setTimeout(launchBalloon,i*250);
    }

    // Confetti
    for(let i=0;i<200;i++){
        setTimeout(launchConfetti,i*18);
    }

});

// ===== Shooting Stars =====
setInterval(()=>{

    const shoot=document.createElement("div");

    shoot.style.position="fixed";
    shoot.style.left=Math.random()*70+"vw";
    shoot.style.top=Math.random()*40+"vh";

    shoot.style.width="120px";
    shoot.style.height="2px";

    shoot.style.background="white";
    shoot.style.boxShadow="0 0 15px white";

    shoot.style.transform="rotate(-35deg)";
    shoot.style.zIndex="10";

    document.body.appendChild(shoot);

    shoot.animate([
        {
            transform:"translate(0,0) rotate(-35deg)",
            opacity:1
        },
        {
            transform:"translate(350px,220px) rotate(-35deg)",
            opacity:0
        }
    ],{
        duration:1200,
        easing:"ease-out"
    });

    setTimeout(()=>{
        shoot.remove();
    },1200);

},7000);