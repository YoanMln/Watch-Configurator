let joinColor = "#3b4547";
let bezelColor = "#ccc8c9";
let caseColor = "#3b4547";

function updateBoxShadow() {
  document.getElementById(
    "watch"
  ).style.boxShadow = `0 0 0 0.12em ${joinColor}, 0 0 0 0.93em ${bezelColor}, 0 0 0 1.06em ${caseColor}`;
}

// CASE //
document.getElementById("case-color").addEventListener("input", (e) => {
  caseColor = e.target.value;
  joinColor = e.target.value;
  updateBoxShadow();
});

// CROWN

document.getElementById("crown-color").addEventListener("input", (e) => {
  document.getElementById("crown").style.background = e.target.value;
});

// BEZEL //

document.getElementById("bezel-color").addEventListener("input", (e) => {
  bezelColor = e.target.value;
  updateBoxShadow();
});

// DIAL //

document.getElementById("dial-color").addEventListener("input", (e) => {
  document.getElementById("watch").style.backgroundColor = e.target.value;
});

// INDEX //

document.getElementById("index-color").addEventListener("input", (e) => {
  document.querySelectorAll(".douze, .trois, .six, .neuf").forEach((el) => {
    el.style.color = e.target.value;
  });
});

// HAND //

document.getElementById("hand-color").addEventListener("input", (e) => {
  document.querySelectorAll(".hour, .minute").forEach((hand) => {
    hand.style.backgroundColor = e.target.value;
  });
});

// STRAP //

document.getElementById("strap-color").addEventListener("input", (e) => {
  document.getElementById("strap").style.backgroundColor = e.target.value;
});
