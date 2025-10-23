let joinColor = "#3b4547";
let bezelColor = "#ccc8c9";
let caseColor = "#3b4547";

function updateBoxShadow() {
  document.getElementById(
    "watch"
  ).style.boxShadow = `0 0 0 0.12em ${joinColor}, 0 0 0 0.93em ${bezelColor}, 0 0 0 1.06em ${caseColor}`;
}

// CASE //
document.getElementById("case-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#case-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    const color = e.target.dataset.color;
    caseColor = color;
    joinColor = color;
    updateBoxShadow();
  }
});

// CROWN
document.getElementById("crown-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#crown-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    document.getElementById("crown").style.background = e.target.dataset.color;
  }
});

// BEZEL //

document.getElementById("bezel-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#bezel-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    bezelColor = e.target.dataset.color;
    updateBoxShadow();
  }
});

// DIAL //

document.getElementById("dial-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#dial-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    document.getElementById("watch").style.backgroundColor =
      e.target.dataset.color;
  }
});

// INDEX //

document.getElementById("index-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#index-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    document.querySelectorAll(".douze, .trois, .six, .neuf").forEach((el) => {
      el.style.color = e.target.dataset.color;
    });
  }
});

// HAND //

document.getElementById("hand-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#hand-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    document.querySelectorAll(".hour, .minute").forEach((hand) => {
      hand.style.setProperty(
        "background-color",
        e.target.dataset.color,
        "important"
      );
    });
  }
});

// STRAP //

document.getElementById("strap-colors").addEventListener("click", (e) => {
  if (e.target.classList.contains("color-btn")) {
    document
      .querySelectorAll("#strap-colors .color-btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    document.getElementById("strap").style.backgroundColor =
      e.target.dataset.color;
  }
});

// STRAP DETAILS //

document
  .getElementById("strap-details-colors")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("color-btn")) {
      document
        .querySelectorAll("#strap-details-colors .color-btn")
        .forEach((btn) => btn.classList.remove("active"));

      e.target.classList.add("active");

      const color = e.target.dataset.color;

      document.documentElement.style.setProperty("--strap-before-color", color);
      document.documentElement.style.setProperty("--strap-after-color", color);
    }
  });

/////////////////////-RANDOM-COLOR-//////////////////////////////////////

function generateRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

function randomizeAllColors() {
  const randomCaseColor = generateRandomColor();
  const randomCrownColor = generateRandomColor();
  const randomBezelColor = generateRandomColor();
  const randomDialColor = generateRandomColor();
  const randomIndexColor = generateRandomColor();
  const randomHandColor = generateRandomColor();
  const randomStrapColor = generateRandomColor();
  const randomStrapDetailsColor = generateRandomColor();

  caseColor = randomCaseColor;
  joinColor = randomCaseColor;
  bezelColor = randomBezelColor;

  updateBoxShadow();
  document.getElementById("crown").style.background = randomCrownColor;
  document.getElementById("watch").style.backgroundColor = randomDialColor;
  document.querySelectorAll(".douze, .trois, .six, .neuf").forEach((el) => {
    el.style.color = randomIndexColor;
  });
  document.querySelectorAll(".hour, .minute").forEach((hand) => {
    hand.style.backgroundColor = randomHandColor;
  });
  document.getElementById("strap").style.backgroundColor = randomStrapColor;

  document.documentElement.style.setProperty(
    "--strap-before-color",
    randomStrapDetailsColor
  );
  document.documentElement.style.setProperty(
    "--strap-after-color",
    randomStrapDetailsColor
  );
}

document
  .getElementById("random-button")
  .addEventListener("click", randomizeAllColors);
