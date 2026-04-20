/* =============================================================
   PRADEEP MAHLAWAT — PORTFOLIO SCRIPT
   Vanilla JS — no frameworks, no dependencies beyond Phosphor Icons
   ============================================================= */

/* ============================================================
   1. CASE STUDY DATA
   Edit this object to update case study content.
   Each case study: id, brand, title, cover, subtitle, tag,
   outcome (chip under card), mediaType ('image'|'youtube'),
   mediaSrc, problem, solution, role, results (object).
   ============================================================ */
const CASE_STUDIES = {
  /* ============ MG MOTOR INDIA ============ */
  "evsahihai": {
    brand: "MG Motor India",
    brandTag: "Integrated Campaign",
    title: "#EVSahiHai Movement",
    subtitle: "Turning India's EV hesitation into a cultural conversation — and a category-defining movement.",
    outcome: "Won E4M Auto Award",
    cover: "https://picsum.photos/seed/mg-evsahihai/1200/900",
    mediaType: "youtube",
    mediaSrc: "M7lc1UVf-VE", // REPLACE with actual YouTube ID
    problem: "EV adoption in India was being held back by misinformation and range anxiety. MG Motor needed to move beyond product-led messaging and become the voice that normalised EV ownership for a mass consumer.",
    solution: "We built #EVSahiHai as a year-long movement rather than a campaign — seeding real owner testimonials, creator-led range proof drives, and an always-on content engine that answered every consumer objection in culture's language.",
    role: "Led the account end-to-end — from brief co-creation with the client's CMO team to steering ideation with creative, planning, and production. Owned the measurement framework and weekly scorecards presented to brand leadership.",
    results: {
      "E4M": "Auto Award Winner",
      "+180%": "Brand consideration lift",
      "12M+": "Organic impressions",
      "25+": "Creators activated"
    }
  },
  "windsor-hector": {
    brand: "MG Motor India",
    brandTag: "Product Launch",
    title: "Windsor EV × Hector Facelift",
    subtitle: "A back-to-back launch strategy that treated two different audiences with two distinct creative universes.",
    outcome: "Category-leading launch SOV",
    cover: "https://picsum.photos/seed/mg-windsor/1200/900",
    mediaType: "image",
    mediaSrc: "https://picsum.photos/seed/mg-windsor-hero/1600/900",
    problem: "Two launches within a single quarter — Windsor EV (a premium city crossover) and Hector Facelift (a flagship SUV update). The challenge was to make each feel like a marquee moment without cannibalising the other's airtime or narrative.",
    solution: "We split the launch architecture into two distinct worlds — Windsor owned the 'smart urban' narrative across digital-first film and influencer ecosystems, while Hector anchored itself in aspirational family storytelling across broadcast-led formats. Media mix, creative treatment, and go-to-market rhythm were purpose-built for each.",
    role: "Account lead across both launches — managing parallel creative teams, aligning with product marketing on feature prioritisation, and orchestrating launch-week activation across owned, earned, and paid.",
    results: {
      "2x": "Launch-day impressions vs benchmark",
      "#1": "Category SOV in launch month",
      "40%+": "Uplift in test-drive requests"
    }
  },
  "linkedin-strategy": {
    brand: "MG Motor India",
    brandTag: "Content Strategy",
    title: "Corporate LinkedIn Strategy",
    subtitle: "From corporate placeholder to thought-leadership engine — adding 50,000+ organic followers in months.",
    outcome: "+50K organic followers",
    cover: "https://picsum.photos/seed/mg-linkedin/1200/900",
    mediaType: "image",
    mediaSrc: "https://picsum.photos/seed/mg-linkedin-hero/1600/900",
    problem: "MG's corporate LinkedIn was under-indexed for a brand of its category heft. Content was press-release heavy, engagement was flat, and the page wasn't serving the business objective of positioning MG as a future-mobility leader.",
    solution: "Rebuilt the content architecture around three narrative pillars — Technology & Innovation, People & Culture, and Sustainability Leadership. Introduced a structured content calendar, employee advocacy framework, and leadership voice programme that turned the CEO and CXOs into active publishers.",
    role: "Content strategy lead — defined the editorial charter, built the weekly content calendar with the in-house team, and ran monthly performance reviews. Directly authored leadership thought pieces and trained the internal team on formats.",
    results: {
      "+50K": "Organic followers added",
      "4.2x": "Avg engagement rate growth",
      "Top 3": "Auto brand on LinkedIn India"
    }
  },
  "astor-campaign": {
    brand: "MG Motor India",
    brandTag: "Digital Campaign",
    title: "Astor × AI Storytelling", // PLACEHOLDER — rename to your real 4th case
    subtitle: "An AI-led creative treatment that turned Astor's personal assistant feature into a narrative device.",
    outcome: "Featured in AdAge India",
    cover: "https://picsum.photos/seed/mg-astor/1200/900",
    mediaType: "image",
    mediaSrc: "https://picsum.photos/seed/mg-astor-hero/1600/900",
    problem: "Astor's AI-powered personal assistant was a genuine category first, but feature-led communication was failing to break through. We needed a narrative framework that made the technology feel personal, not spec-sheet.",
    solution: "Built a series of vignettes where the car's AI became a co-protagonist — each film told a small, human story made possible by the assistant. A meta creative idea delivered through a consistent film language across digital and social.",
    role: "Account and strategy lead — translated brief into creative platform with the copy lead, and oversaw production across five films in three languages.",
    results: {
      "3.2M": "Unique reach",
      "AdAge": "India Feature",
      "15%+": "Brand consideration"
    }
  },

  /* ============ SAMSUNG INDIA ============ */
  "galaxy-s22-ultra": {
    brand: "Samsung India",
    brandTag: "Flagship Launch",
    title: "Galaxy S22 Ultra Launch",
    subtitle: "A launch moment so large, it entered the Guinness Book of World Records.",
    outcome: "Guinness World Record 2022",
    cover: "https://picsum.photos/seed/samsung-s22/1200/900",
    mediaType: "youtube",
    mediaSrc: "M7lc1UVf-VE", // REPLACE with actual YouTube ID
    problem: "Samsung's flagship launch needed to decisively reclaim premium smartphone mindshare in India at a moment of intense category competition. The brief was nothing less than the biggest tech launch of the year.",
    solution: "Architected an unprecedented launch weekend spectacle — combining influencer storytelling at scale, retail experiences across 20+ cities, and a digital-first film narrative centred on the S22 Ultra's Nightography capability. The campaign culminated in a record-setting activation that entered the Guinness Book of World Records.",
    role: "Key Account Manager on the Galaxy mobile business — day-to-day account lead across creative, strategy, and production. Coordinated the Guinness activation with the activation agency partner, managed client approvals across regional and global teams, and owned launch-month scorecards.",
    results: {
      "Guinness": "World Record 2022",
      "#1": "Launch-day SOV",
      "480M+": "Total reach",
      "2.5x": "Vs prior S-series"
    }
  },
  "samsung-filtercopy": {
    brand: "Samsung India",
    brandTag: "Brand × Creator",
    title: "Samsung × FilterCopy",
    subtitle: "A brand-creator partnership that collapsed the line between branded content and cultural storytelling.",
    outcome: "Won AdGully SCREENXX",
    cover: "https://picsum.photos/seed/samsung-filtercopy/1200/900",
    mediaType: "youtube",
    mediaSrc: "M7lc1UVf-VE", // REPLACE with actual YouTube ID
    problem: "Reaching a young, digital-native audience required moving beyond conventional product integration. FilterCopy's audience was precisely the demographic Samsung needed — but creator-led content had to serve both brand and creative without feeling forced.",
    solution: "Developed a fully co-written content partnership where Samsung product capability drove the plot, not decoration. The resulting film series was distributed across both FilterCopy and Samsung channels, and picked up organic pickups across Instagram communities.",
    role: "Led the brand side of the partnership — crafting the brief with the creative team, negotiating co-created IP, steering script rounds with FilterCopy, and managing approvals across Samsung marketing.",
    results: {
      "AdGully": "SCREENXX Winner",
      "52M+": "Organic views",
      "8.4%": "Engagement rate"
    }
  },
  "hyperlocal-retailer": {
    brand: "Samsung India",
    brandTag: "Retail & Performance",
    title: "Hyperlocal Retailer Engine",
    subtitle: "A retailer-first engagement engine that lifted Share of Voice 2.5x across 2,000+ stores.",
    outcome: "2.5x SOV increase",
    cover: "https://picsum.photos/seed/samsung-retail/1200/900",
    mediaType: "image",
    mediaSrc: "https://picsum.photos/seed/samsung-retail-hero/1600/900",
    problem: "Retailer advocacy is the invisible lever in India's smartphone category. Samsung needed a scalable system to keep 2,000+ retail partners informed, incentivised, and active — at a time when competitor on-ground push was intensifying.",
    solution: "Built a hyperlocal engine combining a retailer-facing content programme, tiered incentive mechanics, and real-time performance dashboards. Creative assets were regionalised into 11 languages and distributed through a retailer-first digital pipeline.",
    role: "Account lead across the retailer engagement stream — partnered with the performance and activation teams, ran quarterly reviews with the client's trade marketing leadership, and owned the measurement framework linking retailer engagement to SOV.",
    results: {
      "2.5x": "Share of Voice increase",
      "2,000+": "Retail partners activated",
      "11": "Languages served",
      "40%+": "Sell-out velocity"
    }
  },
  "bespoke-launch": {
    brand: "Samsung India",
    brandTag: "Home Appliances", // PLACEHOLDER — rename to your real 4th case
    title: "Bespoke Home Launch",
    subtitle: "Turning appliance launch from product demo into lifestyle narrative.",
    outcome: "Category-first launch approach",
    cover: "https://picsum.photos/seed/samsung-bespoke/1200/900",
    mediaType: "image",
    mediaSrc: "https://picsum.photos/seed/samsung-bespoke-hero/1600/900",
    problem: "Bespoke was a premium lifestyle line entering a category dominated by spec-driven communication. The challenge was to make design and personalisation the hero without losing Samsung's technology credentials.",
    solution: "Built a lifestyle-first narrative universe anchored in interior design creators, home tours, and a modular content approach where every touchpoint showcased personalisation. Retail experience was reimagined to echo the lifestyle aesthetic.",
    role: "Account lead across the Bespoke campaign — coordinated lifestyle creative and product marketing, managed creator partnerships and retail experience rollouts.",
    results: {
      "+65%": "Premium category sentiment",
      "3.1M": "Campaign reach",
      "12": "Creator partners"
    }
  }
};

/* Order matters — grid renders in this order */
const MG_ORDER = ["evsahihai", "windsor-hector", "linkedin-strategy", "astor-campaign"];
const SAMSUNG_ORDER = ["galaxy-s22-ultra", "samsung-filtercopy", "hyperlocal-retailer", "bespoke-launch"];

/* ============================================================
   2. GALLERY DATA
   Types: "image" | "carousel" | "video"
   For video, src = YouTube video ID (just the ID, not full URL)
   For carousel, src is an array of image URLs
   Vary 'h' (height suggestion) across tiles for masonry variety
   ============================================================ */
const GALLERY = [
  { type: "image", src: "https://picsum.photos/seed/g01/800/1000", caption: "Galaxy S22 Ultra · Launch Key Visual", h: 1000 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g02/800/450", caption: "MG Astor · Launch Film" },
  { type: "image", src: "https://picsum.photos/seed/g03/800/600", caption: "Samsung × FilterCopy · Film Stills", h: 600 },
  { type: "carousel", src: ["https://picsum.photos/seed/g04a/800/1000", "https://picsum.photos/seed/g04b/800/1000", "https://picsum.photos/seed/g04c/800/1000", "https://picsum.photos/seed/g04d/800/1000"], caption: "Windsor EV · Campaign Carousel" },
  { type: "image", src: "https://picsum.photos/seed/g05/800/500", caption: "#EVSahiHai · OOH Installation", h: 500 },
  { type: "image", src: "https://picsum.photos/seed/g06/800/900", caption: "Galaxy Unpacked India · Event", h: 900 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g07/800/450", caption: "Hector Facelift · TVC" },
  { type: "image", src: "https://picsum.photos/seed/g08/800/700", caption: "Samsung Retail · Hyperlocal Mural", h: 700 },
  { type: "carousel", src: ["https://picsum.photos/seed/g09a/800/800", "https://picsum.photos/seed/g09b/800/800", "https://picsum.photos/seed/g09c/800/800"], caption: "LinkedIn Series · Leadership Edits" },
  { type: "image", src: "https://picsum.photos/seed/g10/800/1100", caption: "Bespoke Home · Lifestyle Frames", h: 1100 },
  { type: "image", src: "https://picsum.photos/seed/g11/800/550", caption: "Galaxy Z Flip · Pop-up Experience", h: 550 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g12/800/500", caption: "Samsung Nightography · Creator Film" },
  { type: "image", src: "https://picsum.photos/seed/g13/800/800", caption: "MG Gloster · Outdoor", h: 800 },
  { type: "carousel", src: ["https://picsum.photos/seed/g14a/800/950", "https://picsum.photos/seed/g14b/800/950", "https://picsum.photos/seed/g14c/800/950", "https://picsum.photos/seed/g14d/800/950", "https://picsum.photos/seed/g14e/800/950"], caption: "Samsung Bespoke · Print Series" },
  { type: "image", src: "https://picsum.photos/seed/g15/800/620", caption: "EV Drive · Documentary BTS", h: 620 },
  { type: "image", src: "https://picsum.photos/seed/g16/800/900", caption: "Galaxy AI · Billboard", h: 900 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g17/800/450", caption: "MG Windsor · Walkthrough" },
  { type: "image", src: "https://picsum.photos/seed/g18/800/750", caption: "Samsung Café · Retail Pop-up", h: 750 },
  { type: "carousel", src: ["https://picsum.photos/seed/g19a/800/600", "https://picsum.photos/seed/g19b/800/600", "https://picsum.photos/seed/g19c/800/600"], caption: "Hector · Social Story Series" },
  { type: "image", src: "https://picsum.photos/seed/g20/800/1050", caption: "Samsung × Influencer · Key Art", h: 1050 },
  { type: "image", src: "https://picsum.photos/seed/g21/800/500", caption: "Creator Day · Agency Offsite", h: 500 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g22/800/450", caption: "Samsung Retailer · Recognition Film" },
  { type: "image", src: "https://picsum.photos/seed/g23/800/820", caption: "Galaxy Launch · Press Stand", h: 820 },
  { type: "carousel", src: ["https://picsum.photos/seed/g24a/800/700", "https://picsum.photos/seed/g24b/800/700", "https://picsum.photos/seed/g24c/800/700"], caption: "MG × LinkedIn · Editorial Frames" },
  { type: "image", src: "https://picsum.photos/seed/g25/800/680", caption: "EV Charging · Brand Takeover", h: 680 },
  { type: "image", src: "https://picsum.photos/seed/g26/800/900", caption: "Samsung × Ambassador Shoot", h: 900 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g27/800/450", caption: "MG Astor · AI Vignette 01" },
  { type: "image", src: "https://picsum.photos/seed/g28/800/600", caption: "Samsung Bespoke · Pairing Visual", h: 600 },
  { type: "carousel", src: ["https://picsum.photos/seed/g29a/800/850", "https://picsum.photos/seed/g29b/800/850", "https://picsum.photos/seed/g29c/800/850", "https://picsum.photos/seed/g29d/800/850"], caption: "MG Windsor · Dealer Collateral" },
  { type: "image", src: "https://picsum.photos/seed/g30/800/720", caption: "Galaxy S22 Ultra · Product Shot", h: 720 },
  { type: "image", src: "https://picsum.photos/seed/g31/800/900", caption: "Samsung · Retailer Engagement", h: 900 },
  { type: "image", src: "https://picsum.photos/seed/g32/800/560", caption: "#EVSahiHai · Typographic Poster", h: 560 },
  { type: "video", src: "M7lc1UVf-VE", thumb: "https://picsum.photos/seed/g33/800/450", caption: "Hyperlocal Engine · Case Film" },
  { type: "image", src: "https://picsum.photos/seed/g34/800/780", caption: "Samsung Home · Editorial Frame", h: 780 },
  { type: "carousel", src: ["https://picsum.photos/seed/g35a/800/1000", "https://picsum.photos/seed/g35b/800/1000", "https://picsum.photos/seed/g35c/800/1000"], caption: "MG Gloster · Owner Stories" },
  { type: "image", src: "https://picsum.photos/seed/g36/800/640", caption: "Cheil × Client Workshop", h: 640 }
];

/* ============================================================
   3. TOOLS (grayscale SVG logos — no text labels)
   Uses simpleicons.org CDN which returns inline SVG per icon name
   Hover reveals name via tooltip span
   ============================================================ */
const TOOLS = [
  { name: "Figma", icon: "figma" },
  { name: "Adobe Photoshop", icon: "adobephotoshop" },
  { name: "Adobe Illustrator", icon: "adobeillustrator" },
  { name: "Adobe Premiere Pro", icon: "adobepremierepro" },
  { name: "Microsoft PowerPoint", icon: "microsoftpowerpoint" },
  { name: "Google Analytics", icon: "googleanalytics" },
  { name: "Meta", icon: "meta" },
  { name: "Notion", icon: "notion" },
  { name: "Slack", icon: "slack" },
  { name: "Asana", icon: "asana" },
  { name: "Canva", icon: "canva" },
  { name: "Miro", icon: "miro" }
];

/* ============================================================
   4. THEME TOGGLE
   ============================================================ */
(function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("pm-theme");

  // Respect stored preference, else system
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("pm-theme", next);
  });
})();

/* ============================================================
   5. MOBILE NAV TOGGLE
   ============================================================ */
(function initNavToggle() {
  const toggle = document.getElementById("navMenuToggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.innerHTML = open ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
  });

  // Close menu when a link is clicked (mobile)
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.innerHTML = '<i class="ph ph-list"></i>';
    })
  );
})();

/* ============================================================
   6. SCROLL PROGRESS RING + BACK TO TOP
   ============================================================ */
(function initScrollProgress() {
  const btn = document.getElementById("scrollProgress");
  const bar = btn.querySelector(".progress-bar");
  const nav = document.getElementById("nav");
  const CIRC = 2 * Math.PI * 20; // r = 20

  const update = () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.max(0, Math.min(1, scrollTop / docH));
    bar.style.strokeDashoffset = String(CIRC * (1 - pct));

    // Show after 400px
    btn.classList.toggle("visible", scrollTop > 400);

    // Nav border after 20px
    nav.classList.toggle("scrolled", scrollTop > 20);
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
})();

/* ============================================================
   7. RENDER CASE STUDY CARDS
   ============================================================ */
function renderCaseCards(slugs, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = slugs.map(slug => {
    const c = CASE_STUDIES[slug];
    return `
      <button class="case-card" data-case="${slug}" aria-label="Open case study: ${c.title}">
        <div class="case-cover">
          <span class="case-tag">${c.brandTag}</span>
          <img src="${c.cover}" alt="${c.title}" loading="lazy" />
          <span class="case-open-cue"><i class="ph ph-arrow-up-right"></i></span>
        </div>
        <div class="case-body">
          <h4>${c.title}</h4>
          <p>${c.subtitle}</p>
          <span class="case-outcome">◆ ${c.outcome}</span>
        </div>
      </button>
    `;
  }).join("");

  container.querySelectorAll(".case-card").forEach(card => {
    card.addEventListener("click", () => openCaseStudy(card.dataset.case));
  });
}

/* ============================================================
   8. CASE STUDY MODAL — open / close / focus trap / ESC
   ============================================================ */
const modal = document.getElementById("caseModal");
const modalContent = document.getElementById("modalContent");
const modalPanel = document.getElementById("modalPanel");
const modalClose = document.getElementById("modalClose");

function renderModalMedia(c) {
  if (c.mediaType === "youtube") {
    return `
      <div class="modal-media">
        <iframe
          src="https://www.youtube.com/embed/${c.mediaSrc}?rel=0"
          title="${c.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    `;
  }
  return `
    <div class="modal-media">
      <img src="${c.mediaSrc}" alt="${c.title}" loading="lazy" />
    </div>
  `;
}

function renderResults(results) {
  if (!results) return "";
  return `
    <div class="modal-results-grid">
      ${Object.entries(results).map(([val, label]) =>
        `<div><strong>${val}</strong><span>${label}</span></div>`
      ).join("")}
    </div>
  `;
}

function openCaseStudy(slug) {
  const c = CASE_STUDIES[slug];
  if (!c) return;

  modalContent.innerHTML = `
    ${renderModalMedia(c)}

    <div class="modal-eyebrow">
      <strong>${c.brand}</strong>
      <span>·</span>
      <span>${c.brandTag}</span>
    </div>

    <h3 class="modal-title" id="modalTitle">${c.title}</h3>
    <p class="modal-subtitle">${c.subtitle}</p>

    <div class="modal-sections">
      <div class="modal-section">
        <div class="modal-section-label">Business Problem</div>
        <div class="modal-section-body"><p>${c.problem}</p></div>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">The Solution</div>
        <div class="modal-section-body"><p>${c.solution}</p></div>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">My Role</div>
        <div class="modal-section-body"><p>${c.role}</p></div>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">Results &amp; Outcome</div>
        <div class="modal-section-body">
          ${renderResults(c.results)}
        </div>
      </div>
    </div>
  `;

  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  // Reset scroll to top of modal
  modalPanel.scrollTop = 0;
  // Move focus into modal for accessibility
  setTimeout(() => modalPanel.focus(), 50);
}

function closeCaseStudy() {
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  // Clear iframe src after transition to stop YouTube playback
  setTimeout(() => {
    const iframe = modalContent.querySelector("iframe");
    if (iframe) iframe.src = "";
    modalContent.innerHTML = "";
  }, 300);
}

modalClose.addEventListener("click", closeCaseStudy);
modal.querySelector(".modal-backdrop").addEventListener("click", closeCaseStudy);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    closeCaseStudy();
  }
});

/* ============================================================
   9. RENDER CREATIVE GALLERY (masonry)
   ============================================================ */
function badge(type) {
  const icons = {
    image: "ph-image",
    carousel: "ph-stack",
    video: "ph-play-circle"
  };
  return `<span class="gallery-badge"><i class="ph ${icons[type]}"></i></span>`;
}

function renderGalleryItem(item, index) {
  if (item.type === "image") {
    return `
      <div class="gallery-item" data-type="image">
        ${badge("image")}
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <div class="gallery-caption">${item.caption}</div>
      </div>
    `;
  }

  if (item.type === "carousel") {
    return `
      <div class="gallery-item carousel" data-type="carousel" data-carousel-index="${index}">
        ${badge("carousel")}
        <div class="carousel-track" style="transform: translateX(0%)">
          ${item.src.map(s => `<img src="${s}" alt="${item.caption}" loading="lazy" />`).join("")}
        </div>
        <button class="carousel-arrow prev" aria-label="Previous"><i class="ph ph-caret-left"></i></button>
        <button class="carousel-arrow next" aria-label="Next"><i class="ph ph-caret-right"></i></button>
        <div class="carousel-dots">
          ${item.src.map((_, i) => `<span class="carousel-dot ${i === 0 ? "active" : ""}"></span>`).join("")}
        </div>
        <div class="gallery-caption">${item.caption}</div>
      </div>
    `;
  }

  if (item.type === "video") {
    return `
      <div class="gallery-item lite-yt" data-type="video" data-video-id="${item.src}">
        ${badge("video")}
        <img class="lite-yt-thumb" src="${item.thumb}" alt="${item.caption}" loading="lazy" />
        <div class="lite-yt-play" aria-label="Play video"></div>
        <div class="gallery-caption">${item.caption}</div>
      </div>
    `;
  }
}

function renderGallery() {
  const el = document.getElementById("masonry");
  el.innerHTML = GALLERY.map((item, i) => renderGalleryItem(item, i)).join("");

  /* Carousel logic — arrows, dots, prevent click bubbling */
  el.querySelectorAll(".carousel").forEach(car => {
    const track = car.querySelector(".carousel-track");
    const dots = car.querySelectorAll(".carousel-dot");
    const total = dots.length;
    let idx = 0;

    const go = (n) => {
      idx = (n + total) % total;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    };

    car.querySelector(".carousel-arrow.prev").addEventListener("click", e => {
      e.stopPropagation();
      go(idx - 1);
    });
    car.querySelector(".carousel-arrow.next").addEventListener("click", e => {
      e.stopPropagation();
      go(idx + 1);
    });
    dots.forEach((d, i) =>
      d.addEventListener("click", e => {
        e.stopPropagation();
        go(i);
      })
    );
  });

  /* Lazy YouTube — replace poster + play button with iframe on click */
  el.querySelectorAll(".lite-yt").forEach(yt => {
    yt.addEventListener("click", function () {
      const id = this.dataset.videoId;
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("title", "YouTube video");
      this.innerHTML = "";
      this.appendChild(iframe);
    }, { once: true });
  });
}

/* ============================================================
   10. RENDER TOOLS GRID
   ============================================================ */
function renderTools() {
  const el = document.getElementById("toolsGrid");
  el.innerHTML = TOOLS.map(t => `
    <div class="tool-tile" title="${t.name}">
      <img src="https://cdn.simpleicons.org/${t.icon}/888888" alt="${t.name}" loading="lazy" />
      <span>${t.name}</span>
    </div>
  `).join("");
}

/* ============================================================
   11. REVEAL ON SCROLL (subtle)
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll(".section-header, .brand-block, .timeline-item, .edu-tools-grid > *");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

  els.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)";
    io.observe(el);
  });
}

/* ============================================================
   12. INIT
   ============================================================ */
renderCaseCards(MG_ORDER, "mgGrid");
renderCaseCards(SAMSUNG_ORDER, "samsungGrid");
renderGallery();
renderTools();
initReveal();
