const categories = [
  { id: "P1", title: "Natural Disasters", short: "Disaster evidence", domain: "Public safety", image: "cases/p1.png", risk: "Fabricated disaster evidence can exaggerate severity and mislead rescue decisions." },
  { id: "P2", title: "Unrest & Attack", short: "Conflict evidence", domain: "Public safety", image: "cases/p2.png", risk: "Synthetic conflict imagery can distort public judgment and intensify social panic." },
  { id: "P3", title: "Traffic Accidents", short: "Incident records", domain: "Public safety", image: "cases/p3.png", risk: "False accident records may interfere with public reporting and liability assessment." },
  { id: "P4", title: "Fire & Explosion", short: "Emergency scenes", domain: "Public safety", image: "cases/p4.png", risk: "Convincing emergency scenes can fabricate the occurrence and scale of destructive events." },
  { id: "P5", title: "Pollution & HazMat", short: "Hazard evidence", domain: "Public safety", image: "cases/p5.png", risk: "Generated hazard records may trigger fear or conceal contradictions in environmental evidence." },
  { id: "P6", title: "Infrastructure Damage", short: "Structural evidence", domain: "Public safety", image: "cases/p6.png", risk: "Fabricated damage can misrepresent the safety status of buildings and public facilities." },
  { id: "P7", title: "Crowd Safety", short: "Venue records", domain: "Public safety", image: "cases/p7.png", risk: "False crowd imagery can amplify perceived risk around gatherings and public venues." },
  { id: "P8", title: "Public Health", short: "Health records", domain: "Public safety", image: "cases/p7.png", risk: "Synthetic health-event evidence can influence public trust and crisis response." },
  { id: "I1", title: "Personal Emergencies", short: "Personal evidence", domain: "Personal safety", image: "cases/i1.png", risk: "Fabricated emergencies may be used to manipulate urgent personal decisions." },
  { id: "I2", title: "Transaction Proofs", short: "Financial records", domain: "Personal safety", image: "cases/i2.png", risk: "Generated receipts and transaction records can support fraud or financial disputes." },
  { id: "I3", title: "Communication Records", short: "Private records", domain: "Personal safety", image: "cases/i3.png", risk: "Synthetic chat records can falsify intent, identity, and interpersonal evidence." },
  { id: "I4", title: "Identity Endorsement", short: "Identity evidence", domain: "Personal safety", image: "cases/i4.png", risk: "Fabricated endorsements can cause reputational, privacy, and property harm." }
];

const metrics = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "I1", "I2", "I3", "I4", "Overall"];
const leaderboard = [
  { model: "Claude Opus 4.6", group: "VLM", scores: [30.4,42.3,29.1,29.7,33.0,16.2,17.0,46.1,12.2,53.8,78.7,25.9,32.6] },
  { model: "Claude Sonnet 4.6", group: "VLM", scores: [20.5,30.8,29.1,22.0,24.5,11.1,12.8,22.5,4.4,42.9,46.8,20.0,21.7] },
  { model: "GPT 5.5 · high reasoning", group: "VLM", scores: [6.2,13.5,23.3,12.1,12.6,4.0,4.3,4.5,1.1,11.0,8.5,0.0,8.9] },
  { model: "GPT 5.4 · high reasoning", group: "VLM", scores: [0.0,1.0,0.0,1.1,1.1,0.0,0.0,0.0,0.0,4.4,1.1,0.0,0.5] },
  { model: "GPT 5.5 · no think", group: "VLM", scores: [17.7,22.1,32.6,18.7,26.3,13.1,6.4,21.3,1.1,5.5,7.4,2.4,15.3] },
  { model: "GPT 5.4 · no think", group: "VLM", scores: [3.5,17.3,15.1,5.5,6.3,4.0,4.3,4.5,0.0,3.3,4.3,0.0,6.2] },
  { model: "Doubao Seed 2.0 Pro", group: "VLM", scores: [38.1,52.9,47.7,38.5,41.1,22.2,45.7,39.3,24.4,34.1,40.4,42.4,38.2] },
  { model: "Doubao Seed 2.0 Mini", group: "VLM", scores: [54.4,63.2,57.0,64.8,60.0,54.5,57.4,42.7,53.1,21.4,40.7,40.8,49.5] },
  { model: "Gemini 3.1 Pro", group: "VLM", scores: [43.4,48.1,54.7,46.2,31.6,38.4,52.1,40.4,35.6,20.9,26.6,37.6,39.5] },
  { model: "Qwen3.6 Flash", group: "VLM", scores: [24.3,21.4,32.6,22.0,16.0,16.2,14.9,13.5,4.4,21.1,19.4,10.8,18.1] },
  { model: "Qwen3.6 Plus", group: "VLM", scores: [23.9,27.9,37.2,28.6,26.3,20.2,20.2,16.9,4.4,24.2,27.7,23.5,24.1] },
  { model: "CNNSpot", group: "Detector", scores: [9.7,6.7,8.1,17.6,12.6,11.1,1.1,2.2,2.2,4.4,0.0,0.0,7.3] },
  { model: "FreDect", group: "Detector", scores: [33.6,20.2,41.9,42.9,37.9,41.4,18.1,33.7,22.2,45.1,38.3,41.2,33.1] },
  { model: "LNP", group: "Detector", scores: [13.3,9.6,18.6,7.7,12.6,14.1,8.5,14.6,2.2,0.0,1.1,1.2,9.1] },
  { model: "Human evaluators", group: "Human", scores: [83.2,81.1,80.2,82.4,77.5,78.8,82.3,86.9,93.3,70.7,91.1,71.8,81.7] }
];

let selectedCategory = categories[0];
let selectedMetric = "Overall";
let selectedGroup = "All";

const publicTaxonomy = document.querySelector("#public-taxonomy");
const personalTaxonomy = document.querySelector("#personal-taxonomy");
const galleryTrack = document.querySelector("#gallery-track");

function taxonomyButton(category) {
  const button = document.createElement("button");
  button.className = `taxonomy-card${category.id === selectedCategory.id ? " active" : ""}`;
  button.dataset.category = category.id;
  button.innerHTML = `<span>${category.id}</span><strong>${category.title}</strong><small>${category.short}</small>`;
  return button;
}

function renderTaxonomy() {
  publicTaxonomy.replaceChildren(...categories.filter(item => item.domain === "Public safety").map(taxonomyButton));
  personalTaxonomy.replaceChildren(...categories.filter(item => item.domain === "Personal safety").map(taxonomyButton));
}

function renderGallery() {
  document.querySelector("#category-domain").textContent = `${selectedCategory.domain} / ${selectedCategory.id}`;
  document.querySelector("#category-title").textContent = selectedCategory.title;
  document.querySelector("#category-risk").textContent = selectedCategory.risk;
  galleryTrack.innerHTML = Array.from({ length: 6 }, (_, index) => `
    <button class="gallery-item" data-gallery-image aria-label="Enlarge ${selectedCategory.title} example ${index + 1}">
      <img src="${selectedCategory.image}" alt="${selectedCategory.title} SafeIMG annotated case">
      <span>${selectedCategory.id} · CASE ${String(index + 1).padStart(2, "0")}</span>
    </button>`).join("");
  galleryTrack.style.animation = "none";
  void galleryTrack.offsetWidth;
  galleryTrack.style.animation = "";
}

function selectCategory(id) {
  selectedCategory = categories.find(item => item.id === id) || categories[0];
  renderTaxonomy();
  renderGallery();
  document.querySelector(".category-stage").scrollIntoView({ behavior: "smooth", block: "center" });
}

document.querySelector("#benchmark").addEventListener("click", event => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) selectCategory(categoryButton.dataset.category);
  if (event.target.closest("[data-gallery-image]")) openLightbox(selectedCategory);
});

const lightbox = document.querySelector("#lightbox");
function openLightbox(category, image, title, domain) {
  const item = category || selectedCategory;
  document.querySelector("#lightbox-image").src = image || item.image;
  document.querySelector("#lightbox-title").textContent = title || item.title;
  document.querySelector("#lightbox-domain").textContent = domain || `${item.domain} / ${item.id}`;
  document.querySelector("#lightbox-copy").textContent = item.risk;
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".js-open-image").forEach(button => button.addEventListener("click", () => {
  openLightbox(categories.find(item => item.image === button.dataset.image), button.dataset.image, button.dataset.title, button.dataset.domain);
}));
document.querySelector("#lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

const reasonPanel = document.querySelector("#reason-panel");
function renderReason(mode) {
  reasonPanel.innerHTML = mode === "human" ? `
    <span class="reason-source">HUMAN / VERIFIED CUES</span>
    <article><span>01 · COMMONSENSE</span><h3>The temperature range is ordered incorrectly.</h3><p>“−12°C to −20°C” violates normal weather-reporting conventions and is localized in the broadcast caption.</p></article>
    <article><span>02 · COMMONSENSE</span><h3>Harbin would not have a strong cold-air outbreak in July.</h3><p>The date and the depicted blizzard form a quiet temporal contradiction that cannot be detected from texture alone.</p></article>` : `
    <span class="reason-source">VLM / GENERATED RATIONALE</span>
    <article><span>MODEL OBSERVATION</span><h3>The date and heavy blizzard appear implausible.</h3><p>The model correctly reaches the AI-generated verdict and notices several broad anomalies.</p></article>
    <article class="missed"><span>MISSED / UNDER-SPECIFIED</span><h3>Only part of the human evidence is covered.</h3><p>Across SafeIMG, model rationales cover just 29.8% of human-annotated artifacts on average.</p></article>`;
}

document.querySelector(".mode-switch").addEventListener("click", event => {
  const button = event.target.closest("[data-reason]");
  if (!button) return;
  document.querySelectorAll("[data-reason]").forEach(item => item.classList.toggle("active", item === button));
  renderReason(button.dataset.reason);
});

const metricSelect = document.querySelector("#metric-select");
metricSelect.innerHTML = metrics.map(metric => `<option value="${metric}">${metric}</option>`).join("");
metricSelect.value = selectedMetric;

function renderLeaderboard() {
  const metricIndex = metrics.indexOf(selectedMetric);
  const rows = leaderboard
    .filter(row => selectedGroup === "All" || row.group === selectedGroup)
    .slice()
    .sort((a, b) => b.scores[metricIndex] - a.scores[metricIndex]);

  document.querySelector("#leaderboard-head").innerHTML = `<tr><th>Rank</th><th>Model</th><th>Type</th>${metrics.map(metric => `<th class="${metric === selectedMetric ? "selected-metric" : ""}">${metric}</th>`).join("")}</tr>`;
  document.querySelector("#leaderboard-body").innerHTML = rows.map((row, rank) => `
    <tr class="${row.group === "Human" ? "human-row" : ""}">
      <td><span class="rank rank--${rank + 1}">${String(rank + 1).padStart(2, "0")}</span></td>
      <th scope="row">${row.model}</th>
      <td><span class="type-chip type-chip--${row.group.toLowerCase()}">${row.group}</span></td>
      ${row.scores.map((score, index) => `<td class="${metrics[index] === selectedMetric ? "selected-metric" : ""}">${score.toFixed(1)}</td>`).join("")}
    </tr>`).join("");
}

metricSelect.addEventListener("change", () => { selectedMetric = metricSelect.value; renderLeaderboard(); });
document.querySelector(".filter-tabs").addEventListener("click", event => {
  const button = event.target.closest("[data-group]");
  if (!button) return;
  selectedGroup = button.dataset.group;
  document.querySelectorAll("[data-group]").forEach(item => item.classList.toggle("active", item === button));
  renderLeaderboard();
});

renderTaxonomy();
renderGallery();
renderReason("human");
renderLeaderboard();
