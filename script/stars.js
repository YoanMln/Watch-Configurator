function createStars() {
  const starsContainer = document.getElementById("stars");
  const numberOfStars = 15;
  const minDistance = 10; 
  const positions = [];

  for (let i = 0; i < numberOfStars; i++) {
    let x,
      y,
      attempts = 0;

    
    do {
      const angle = Math.random() * 2 * Math.PI;
      const radius = 15 + Math.random() * 25;

      x = 50 + radius * Math.cos(angle);
      y = 50 + radius * Math.sin(angle);
      attempts++;
    } while (
      attempts < 30 &&
      (Math.sqrt((x - 50) ** 2 + (y - 50) ** 2) > 40 ||
        positions.some(
          (pos) => Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2) < minDistance
        ))
    );

    if (attempts < 30) {
      positions.push({ x, y });

      const star = document.createElement("div");
      star.className = "star";
      star.style.left = x + "%";
      star.style.top = y + "%";
      star.style.animationDelay = Math.random() * 3 + "s";

      starsContainer.appendChild(star);
    }
  }
}

document.addEventListener("DOMContentLoaded", createStars);
