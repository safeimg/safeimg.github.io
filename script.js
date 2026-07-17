const imageSet = (id, names) => names.map(name => `cases/data/${id}/${name}.webp`);
const galleryImages = {
  P1: imageSet("P1", ["0002", "0008", "0009", "0014", "0025", "0038", "0042", "0044", "0049", "0051"]),
  P2: imageSet("P2", ["0142", "0145", "0151", "0155", "0156", "0157", "0158", "0160", "0213", "0215"]),
  P3: imageSet("P3", ["0228", "0239", "0250", "0260", "0263", "0264", "0268", "0271", "0276", "0278"]),
  P4: imageSet("P4", ["0341", "0345", "0347", "0348", "0349", "0351", "0352", "0389", "0391", "0392"]),
  P5: imageSet("P5", ["0398", "0408", "0417", "0418", "0426", "0427", "0428", "0430", "0488", "0489"]),
  P6: imageSet("P6", ["0490", "0495", "0506", "0507", "0522", "0523", "0524", "0525", "0529", "0585"]),
  P7: imageSet("P7", ["0590", "0591", "0592", "0597", "0604", "0611", "0618", "0678", "0679", "0680"]),
  P8: imageSet("P8", ["0684", "0707", "0711", "0713", "0716", "0722", "0723", "0724", "0765", "0771"]),
  I1: imageSet("I1", ["0781", "0786", "0810", "0814", "0819", "0820", "0821", "0845", "0852", "0854"]),
  I2: imageSet("I2", ["0874", "0877", "0908", "0912", "0917", "0922", "0924", "0926", "0932", "0942"]),
  I3: imageSet("I3", ["0970", "0974", "0975", "0980", "0992", "1000", "1015", "1019", "1021", "1034"]),
  I4: imageSet("I4", ["1049", "1058", "1060", "1061", "1062", "1063", "1069", "1079", "1080", "1117"])
};

const categories = [
  { id: "P1", title: "Natural Disasters", short: "Disaster evidence", domain: "Public safety", images: galleryImages.P1, image: galleryImages.P1[0], risk: "Fabricated disaster evidence can exaggerate severity and mislead rescue decisions." },
  { id: "P2", title: "Unrest & Attack", short: "Conflict evidence", domain: "Public safety", images: galleryImages.P2, image: galleryImages.P2[0], risk: "Synthetic conflict imagery can distort public judgment and intensify social panic." },
  { id: "P3", title: "Traffic Accidents", short: "Incident records", domain: "Public safety", images: galleryImages.P3, image: galleryImages.P3[0], risk: "False accident records may interfere with public reporting and liability assessment." },
  { id: "P4", title: "Fire & Explosion", short: "Emergency scenes", domain: "Public safety", images: galleryImages.P4, image: galleryImages.P4[0], risk: "Convincing emergency scenes can fabricate the occurrence and scale of destructive events." },
  { id: "P5", title: "Pollution & HazMat", short: "Hazard evidence", domain: "Public safety", images: galleryImages.P5, image: galleryImages.P5[0], risk: "Generated hazard records may trigger fear or conceal contradictions in environmental evidence." },
  { id: "P6", title: "Infrastructure Damage", short: "Structural evidence", domain: "Public safety", images: galleryImages.P6, image: galleryImages.P6[0], risk: "Fabricated damage can misrepresent the safety status of buildings and public facilities." },
  { id: "P7", title: "Crowd Safety", short: "Venue records", domain: "Public safety", images: galleryImages.P7, image: galleryImages.P7[0], risk: "False crowd imagery can amplify perceived risk around gatherings and public venues." },
  { id: "P8", title: "Public Health", short: "Health records", domain: "Public safety", images: galleryImages.P8, image: galleryImages.P8[0], risk: "Synthetic health-event evidence can influence public trust and crisis response." },
  { id: "I1", title: "Personal Emergencies", short: "Personal evidence", domain: "Personal safety", images: galleryImages.I1, image: galleryImages.I1[0], risk: "Fabricated emergencies may be used to manipulate urgent personal decisions." },
  { id: "I2", title: "Transaction Proofs", short: "Financial records", domain: "Personal safety", images: galleryImages.I2, image: galleryImages.I2[0], risk: "Generated receipts and transaction records can support fraud or financial disputes." },
  { id: "I3", title: "Communication Records", short: "Private records", domain: "Personal safety", images: galleryImages.I3, image: galleryImages.I3[0], risk: "Synthetic chat records can falsify intent, identity, and interpersonal evidence." },
  { id: "I4", title: "Identity Endorsement", short: "Identity evidence", domain: "Personal safety", images: galleryImages.I4, image: galleryImages.I4[0], risk: "Fabricated endorsements can cause reputational, privacy, and property harm." }
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
  const loopImages = [...selectedCategory.images, ...selectedCategory.images];
  galleryTrack.innerHTML = loopImages.map((image, index) => {
    const caseNumber = index % selectedCategory.images.length + 1;
    return `
    <button class="gallery-item" data-gallery-image data-image="${image}" aria-label="Enlarge ${selectedCategory.title} example ${caseNumber}">
      <img src="${image}" alt="${selectedCategory.title} SafeIMG case ${caseNumber}">
      <span>${selectedCategory.id} · CASE ${String(caseNumber).padStart(2, "0")}</span>
    </button>`;
  }).join("");
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
  const galleryButton = event.target.closest("[data-gallery-image]");
  if (galleryButton) openLightbox(selectedCategory, galleryButton.dataset.image);
});

const lightbox = document.querySelector("#lightbox");
function openLightbox(category, image, title, domain, copy) {
  const item = category || selectedCategory;
  document.querySelector("#lightbox-image").src = image || item.image;
  document.querySelector("#lightbox-title").textContent = title || item.title;
  document.querySelector("#lightbox-domain").textContent = domain || `${item.domain} / ${item.id}`;
  document.querySelector("#lightbox-copy").textContent = copy || item.risk;
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".js-open-image").forEach(button => button.addEventListener("click", () => {
  openLightbox(categories.find(item => item.image === button.dataset.image), button.dataset.image, button.dataset.title, button.dataset.domain, button.dataset.copy);
}));
document.querySelector("#lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

const reasonPanel = document.querySelector("#reason-panel");
function renderReason(mode) {
  reasonPanel.innerHTML = mode === "human" ? `
    <span class="reason-source">HUMAN / VERIFIED CUES</span>
    <article><span>01 · COMMONSENSE</span><h3>The crash logic of the Car is incomplete.</h3><p>Only the car's front is severely damaged while the rest remains intact, and no collision object is visible.</p></article>
    <article><span>02 · PHYSICS</span><h3>The streetlight is missing its lower support.</h3><p>Its lower section disappears, leaving the pole seemingly suspended without a normal support base.</p></article>` : `
    <span class="reason-source">VLM / GENERATED RATIONALE</span>
    <article><span>MODEL OBSERVATION</span><h3>The broadcast appears visually consistent with a real Boston news.</h3><p>The model emphasizes the aligned news graphics, recognizable location, police uniforms, and plausible vehicle damage.</p></article>
    <article class="missed"><span>MISSED / UNDER-SPECIFIED</span><h3>The model overlooks the scene's causal and physical contradictions.</h3><p>It misses the incomplete crash logic, the unsupported streetlight, and the crowd response that conflicts with police already being present.</p></article>`;
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
