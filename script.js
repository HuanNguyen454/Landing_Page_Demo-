const navToggle = document.querySelector(".nav-toggle");
const topNav = document.querySelector(".top-nav");
const headerCta = document.querySelector(".header-cta");
const homeMenuToggle = document.querySelector(".home-menu-toggle");
const homeSidebar = document.querySelector(".home-sidebar");

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

homeMenuToggle?.addEventListener("click", () => {
  const isOpen = homeMenuToggle.getAttribute("aria-expanded") === "true";
  homeMenuToggle.setAttribute("aria-expanded", String(!isOpen));
  homeSidebar?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

homeSidebar?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    homeMenuToggle?.setAttribute("aria-expanded", "false");
    homeSidebar.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const demoData = {
  overview: {
    title: "Dashboard giáo viên",
    html: `
      <div class="preview-stat">
        <b>18:00</b>
        <span>Toán 9A bắt đầu sau 25 phút</span>
      </div>
      <div class="preview-list">
        <p><span>Mai Anh</span><b>Cần nhắc học phí</b></p>
        <p><span>Quốc Huy</span><b>Nộp bài muộn</b></p>
        <p><span>Lớp Lý 11</span><b>14/16 có mặt</b></p>
      </div>
      <div class="preview-bars">
        <span style="height: 44%"></span>
        <span style="height: 68%"></span>
        <span style="height: 56%"></span>
        <span style="height: 86%"></span>
      </div>
    `
  },
  attendance: {
    title: "Điểm danh buổi học",
    html: `
      <div class="preview-stat">
        <b>14/16</b>
        <span>Học sinh đã có mặt trong lớp Toán 9A</span>
      </div>
      <div class="preview-list">
        <p><span>An Nhiên</span><b>Có mặt</b></p>
        <p><span>Minh Khôi</span><b>Đi muộn</b></p>
        <p><span>Bảo Trâm</span><b>Xin nghỉ</b></p>
      </div>
      <div class="preview-bars">
        <span style="height: 82%"></span>
        <span style="height: 18%"></span>
        <span style="height: 10%"></span>
        <span style="height: 64%"></span>
      </div>
    `
  },
  tuition: {
    title: "Theo dõi học phí",
    html: `
      <div class="preview-stat">
        <b>42tr</b>
        <span>Học phí đã ghi nhận trong tháng này</span>
      </div>
      <div class="preview-list">
        <p><span>Lớp Hóa 10</span><b>8/12 đã đóng</b></p>
        <p><span>Lớp Toán 9A</span><b>3 khoản quá hạn</b></p>
        <p><span>Lớp Lý 11</span><b>Xuất báo cáo</b></p>
      </div>
      <div class="preview-bars">
        <span style="height: 55%"></span>
        <span style="height: 78%"></span>
        <span style="height: 84%"></span>
        <span style="height: 66%"></span>
      </div>
    `
  }
};

const previewTitle = document.querySelector("#preview-title");
const previewContent = document.querySelector("#preview-content");

document.querySelectorAll("[data-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.demo;
    const demo = demoData[key];

    if (!demo || !previewTitle || !previewContent) return;

    document.querySelectorAll("[data-demo]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    previewTitle.textContent = demo.title;
    previewContent.style.opacity = "0";

    window.setTimeout(() => {
      previewContent.innerHTML = demo.html;
      previewContent.style.opacity = "1";
    }, 160);
  });
});
