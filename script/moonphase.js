const CYCLE_LENGTH = 29.530588853;
const NEW_MOON_REF = new Date("2025-10-21 00:00:00");

const getMoonPhaseAngle = (date) => {
  const daysSinceNewMoon = (date - NEW_MOON_REF) / (1000 * 60 * 60 * 24);
  const daysInCycle = daysSinceNewMoon % CYCLE_LENGTH;
  const angle = Math.round((daysInCycle / CYCLE_LENGTH) * 360);

  console.log(`Debug - Jours depuis nouvelle lune: ${daysSinceNewMoon}`);
  console.log(`Debug - Jours dans le cycle: ${daysInCycle}`);
  console.log(`Debug - Angle calculé: ${angle}`);

  return angle;
};

const getPhaseName = (angle) => {
  if (angle < 90) return "Premier Croissant";
  if (angle < 180) return "Premier Quartier";
  if (angle < 270) return "Pleine Lune";
  return "Dernier Quartier";
};

const getVisualOffset = (angle) => {
  if (angle < 90) return -50 + (angle / 90) * 20;
  if (angle < 180) return -30 + ((angle - 90) / 90) * 15;
  if (angle < 270) return -15 - ((angle - 180) / 90) * 15;
  return -30 - ((angle - 270) / 90) * 20;
};

const renderMoonPhase = (angle) => {
  console.log(`Debug - Recherche de l'élément .moon-phase`);
  const moonPhase = document.querySelector(".moon-phase");

  if (!moonPhase) {
    console.error("ERREUR: Élément .moon-phase non trouvé !");
    return;
  }

  console.log(`Debug - Élément trouvé:`, moonPhase);

  const offset = getVisualOffset(angle);

  console.log(`Debug - Avant modification CSS, offset: ${offset}px`);
  moonPhase.style.setProperty("--moon-offset", `${offset}px`);

  const appliedValue =
    getComputedStyle(moonPhase).getPropertyValue("--moon-offset");
  console.log(`Debug - Valeur CSS appliquée: ${appliedValue}`);

  console.log(`${getPhaseName(angle)} (${angle}°) - Décalage: ${offset}px`);
};

const updateMoonPhase = (customDate = null) => {
  console.log(`Debug - updateMoonPhase appelée`);
  console.log(`Debug - DOM ready:`, document.readyState);

  const date = customDate || new Date();
  console.log(`Debug - Date utilisée:`, date);

  const angle = getMoonPhaseAngle(date);
  renderMoonPhase(angle);

  console.log(`Phase lunaire: ${angle}° - ${getPhaseName(angle)}`);
  console.log(`Date: ${date.toLocaleDateString("fr-FR")}`);
};

console.log(`Debug - Script chargé`);
document.addEventListener("DOMContentLoaded", () => {
  console.log(`Debug - DOMContentLoaded déclenché`);
  updateMoonPhase();
});
