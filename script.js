const navToggle = document.querySelector(".nav-toggle");
const topNav = document.querySelector(".top-nav");
const headerCta = document.querySelector(".header-cta");

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  topNav?.classList.toggle("open", !isOpen);
  headerCta?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

topNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    topNav.classList.remove("open");
    headerCta?.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

const revealGroups = document.querySelectorAll(
  ".logo-marquee, .feature-board, .module-grid, .workflow-grid, .testimonial-grid, .pain-board, .solution-cards, .show-tabs, .start-steps, .site-footer nav"
);

revealGroups.forEach((group) => {
  Array.from(group.children).forEach((child, index) => {
    child.classList.add("reveal-item");
    child.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
  });
});

const revealElements = document.querySelectorAll(".reveal, .reveal-item");
const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!("IntersectionObserver" in window) || shouldReduceMotion) {
  revealElements.forEach((el) => el.classList.add("in-view"));
} else {
  document.body.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      rootMargin: "-8% 0px -12% 0px",
      threshold: 0.12,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

const railLinks = document.querySelectorAll(".landing-rail a[data-rail-target]");
const railSections = Array.from(railLinks)
  .map((link) => document.getElementById(link.dataset.railTarget))
  .filter(Boolean);

function setActiveRailLink(sectionId) {
  railLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.railTarget === sectionId);
  });
}

if ("IntersectionObserver" in window && railLinks.length > 0) {
  const railObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveRailLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-35% 0px -50% 0px",
      threshold: 0,
    }
  );

  railSections.forEach((section) => railObserver.observe(section));
}

let currentShowRole = "teacher";

function updateShowRolePanels() {
  document.querySelectorAll(".show-panel").forEach((panel) => {
    panel.querySelectorAll(".show-role-panel").forEach((rolePanel) => {
      rolePanel.classList.toggle(
        "active",
        panel.classList.contains("active") && rolePanel.dataset.showRole === currentShowRole
      );
    });
  });
}

document.querySelectorAll(".role-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentShowRole = button.dataset.role;
    document.querySelectorAll(".role-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    updateShowRolePanels();
  });
});

document.querySelectorAll(".show-tab").forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.dataset.tab;
    document.querySelectorAll(".show-tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".show-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === panelId);
    });
    button.classList.add("active");
    updateShowRolePanels();
  });
});

document.querySelectorAll(".start-role-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.dataset.startRole;
    document.querySelectorAll(".start-role-btn").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".start-role-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.startPanel === role);
    });
    button.classList.add("active");
  });
});
