// Animate the circle to "breathe"
gsap.to(".circle", {
  scale: 1.5,
  duration: 3.32,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
  
});
// Array of calming gradient colors
const colors = [
  "#5eead4", // teal
  "#c084fc", // purple
  "#facc15", // yellow
  "#38bdf8", // blue
  "#f472b6"  // pink
];

// Every 8 seconds, change the background to a random gradient
setInterval(() => {
  const c1 = colors[Math.floor(Math.random() * colors.length)];
  const c2 = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
}, 8000);

// Start music after first click (required by browsers)
document.getElementById("start-btn").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play().then(() => {
    // Hide the button once music starts
    document.getElementById("start-btn").style.display = "none";
  }).catch(e => {
    console.log("Error playing audio:", e);
  });
});



