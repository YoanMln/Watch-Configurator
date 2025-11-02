const date = new Date();

const options = { day: `2-digit`, month: `short` };

const formattedDate = date
  .toLocaleDateString("fr-FR", options)
  .replace(".", "");

const dateDisplay = document.getElementById("date");
dateDisplay.textContent = formattedDate;
