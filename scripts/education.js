const education = [
  {
    school: "University of Waterloo",
    logo: "images/school-logos/uw-logo.png",
    alt: "University of Waterloo logo",
    meta: "Bachelor's in Computer Science • Expected May 2029",
    honours: []
  },
  {
    school: "Wilfrid Laurier University",
    logo: "images/school-logos/laurier-logo.png",
    alt: "Wilfrid Laurier University logo",
    meta: "Bachelor's in Business Administration • Expected May 2029",
    honours: [
      "President's Gold Entrance Scholarship",
      "BU111 Live Case Semi-Finalist"
    ]
  },
  {
    school: "Castlebrooke Secondary School",
    logo: "images/school-logos/cb-logo.png",
    alt: "Castlebrooke Secondary School logo",
    meta: "Graduated with Honors • June 2024",
    honours: [
      "Class of 2024 Valedictorian",
      "CFO of DECA Chapter",
      "President of Athletic Council",
      "Treasurer of Charity Council",
      "Top 15 DECA Provincial Exam/Overall Score in TTDM Event"
    ]
  }
];

function honoursHTML(list) {
  if (!list || !list.length) return "";
  let lines = "";
  for (let i = 0; i < list.length; i++) {
    lines += `• ${list[i]}<br>`;
  }
  if (lines.endsWith("<br>")) lines = lines.slice(0, -4);
  return `<p class="hs-honours">${lines}</p>`;
}

function timelineItemHTML(item) {
  const honours = honoursHTML(item.honours);
  return `
    <div class="tl-item">
      <div class="tl-dot"></div>
      <article class="tl-card">
        <img class="tl-logo" src="${item.logo}" alt="${item.alt || ""}" />
        <div>
          <h3>${item.school}</h3>
          <p class="meta">${item.meta}</p>
          ${honours}
        </div>
      </article>
    </div>
  `;
}

function renderEducation() {
  const timeline = document.querySelector(".education .timeline");
  if (!timeline) return;
  let html = "";
  for (let i = 0; i < education.length; i++) {
    html += timelineItemHTML(education[i]);
  }
  timeline.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderEducation);
