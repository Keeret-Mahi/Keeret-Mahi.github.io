/* Projects */
const projects = [
  {
    title: "Outline → Calendar",
    cardHref: "#",
    image: "images/project-images/outline-calendar.png",
    alt: "Screenshot of a minimalist portfolio website",
    tech: ["Python", "Flask", "HTML/CSS/JS", "BeautifulSoup4", "ics"],
    desc: "A parsing tool that turns a university outline into a downloadable ics calendar.",
    links: {
      github: "https://github.com/Keeret-Mahi/outline-to-calendar.git",
      live: "https://github.com/Keeret-Mahi"
    }
  },
  {
    title: "Portfolio Website",
    cardHref: "#",
    image: "images/project-images/portfolio-website.png",
    alt: "Clean product photo representing an e-commerce platform",
    tech: ["HTML/CSS/JS"],
    desc: "This website was built by myself to showcase my projects and experiences.",
    links: {
      github: "https://github.com/Keeret-Mahi",
      live: "https://github.com/Keeret-Mahi"
    }
  },
  {
    title: "Coming Soon",
    cardHref: "#",
    image: "images/project-images/black.png",
    alt: "Charts and graphs representing a data analysis project",
    tech: ["TBA"],
    desc: "Details to be announced soon...",
    links: {
      github: "https://github.com/Keeret-Mahi",
      live: "https://github.com/Keeret-Mahi"
    }
  }
];

// 2) Helpers (no inner functions)
function techListHTML(techArr) {
  return techArr.map(t => `<li>${t}</li>`).join("");
}

function projectCardHTML(p) {
  return `
  <article class="project-card">
    <a href="${p.cardHref || '#'}" class="card-link">
      <div class="thumb">
        <img src="${p.image}" alt="${p.alt}" />
      </div>
      <div class="meta">
        <h3>${p.title}</h3>
        <div class="tech-used">
          <ul>${techListHTML(p.tech || [])}</ul>
        </div>
        <p>${p.desc || ""}</p>
        <div class="project-icons">
          ${p.links?.github ? `<a href="${p.links.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a>` : ""}
          ${p.links?.live ? `<a href="${p.links.live}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
        </div>
      </div>
    </a>
  </article>`;
}

// 3) Render
function renderProjects() {
  const grid = document.querySelector(".projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(projectCardHTML).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);

