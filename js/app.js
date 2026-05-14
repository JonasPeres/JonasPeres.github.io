/* =========================================================
 * CONFIGURAÇÃO — troque os arrays/textos abaixo para
 * adicionar imagens, logos e ícones reais sem mexer no resto.
 * Se um array vier vazio, a UI mostra um placeholder azul.
 * ========================================================= */

// Banners (4 células: topo-esq, topo-dir, rodapé-esq, rodapé-dir).
// Cada item aceita { img | video, bg, fit, overlay }.
const BANNER_TL = [
  {
    img: "assets/banners/voiston.webp",
    fit: "cover",
    bg: "#622056", // roxo institucional Vöiston
    overlay: {
      img: "assets/logos/logo-voiston-branco.png",
      position: "top-right",
    },
  },
];

const BANNER_TR = [
  {
    img: "assets/portal/brascrs-conecta360.png",
    fit: "contain",
    bg: "#FFFFFF",
  },
];

const BANNER_BL = [
  {
    video: "assets/banners/brascrs.mp4",
    bg: "#0A1245",
    fit: "cover", // recorta as bandas navy mortas do vídeo portrait
  },
];

const BANNER_BR = [
  {
    img: "assets/portal/qr-code.jpg",
    fit: "contain",
    bg: "#FFFFFF",
  },
];

// Logos do rodapé (esquerda → direita). Coloque pngs em assets/logos/
const LOGOS = [
  "assets/logos/logo-voiston.png",
  "assets/logos/logo-brascrs.png",
];

// URLs dos iframes
const URL_PORTAL =
  "https://voiston-ai.github.io/PortalDigitalBrascrs/prototype4/index.html#";
const URL_LIO = "https://brascrs.com.br/voiston/";

const INTERVALO_CARROSSEL_MS = 5000;

/* ========================================================= */

const Views = {
  current: "home",

  show(name) {
    document
      .querySelectorAll(".view")
      .forEach((v) => v.classList.remove("active"));
    const target = document.getElementById("view-" + name);
    if (!target) return;
    target.classList.add("active");
    this.current = name;
    window.scrollTo(0, 0);

    if (name === "laudo") resetLaudo();
    // Sai do portal? Fecha qualquer vídeo aberto.
    if (name !== "portal") {
      if (typeof fecharVideoPortal === "function") fecharVideoPortal();
      if (typeof fecharEnquete === "function") fecharEnquete();
    }
  },
};

/** Pré-carrega os iframes no boot (em background) para evitar tela branca ao abrir. */
function preloadIframes() {
  const p = document.getElementById("iframe-portal");
  const l = document.getElementById("iframe-lio");
  if (p && p.src !== URL_PORTAL) p.src = URL_PORTAL;
  if (l && l.src !== URL_LIO) l.src = URL_LIO;
}

function renderLogos() {
  const slots = [0, 1];
  document.querySelectorAll(".logos").forEach((container) => {
    container.innerHTML = "";
    slots.forEach((i) => {
      const box = document.createElement("div");
      box.className = "logo-box" + (LOGOS[i] ? "" : " placeholder");
      if (i === 0) {
        box.style.display = "flex";
        box.style.flexDirection = "column";
        const newImg = document.createElement("img");
        newImg.src = "assets/logos/logo-jnj.png";
        newImg.alt = "Logo";
        newImg.style.cssText =
          "max-width: 100%; height: 250px !important; max-height: unset; margin: -25px 0px -100px -10px;";
        newImg.onerror = () => {
          box.removeChild(newImg);
          box.classList.add("placeholder");
        };
        box.appendChild(newImg);
      }
      if (LOGOS[i]) {
        const img = document.createElement("img");
        img.src = LOGOS[i];
        img.alt = "Logo";
        if (i === 0) {
          img.style =
            "max-width: 100%; height: 40px !important; max-height: unset;";
        }
        img.onerror = () => {
          box.removeChild(img);
          box.classList.add("placeholder");
        };
        box.appendChild(img);
      }
      container.appendChild(box);
    });
  });
}

function bindActions() {
  document.querySelectorAll("[data-action]").forEach((el) => {
    el.addEventListener("click", () => Views.show(el.dataset.action));
  });
}

/* ============ Modal de vídeo (BRASCRS Conecta 360) ============ */
const VIDEO_PORTAL = "assets/portal/conecta360.mp4";

function abrirVideoPortal() {
  fecharVideoPortal();
  const modal = document.createElement("div");
  modal.className = "video-modal";
  modal.id = "video-modal";
  modal.innerHTML = `
    <button class="video-modal-close" type="button" aria-label="Fechar vídeo">×</button>
    <div class="video-modal-content">
      <video id="portal-video" src="${VIDEO_PORTAL}"
             controls playsinline autoplay muted loop
             controlsList="nodownload noremoteplayback noplaybackrate novolumebutton"
             disablepictureinpicture></video>
    </div>
  `;
  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.classList.contains("video-modal-close")
    ) {
      fecharVideoPortal();
    }
  });
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  const v = document.getElementById("portal-video");
  v.muted = true; // garante que nenhum áudio toque
  v.volume = 0;
  v.play().catch(() => {});
}

function fecharVideoPortal() {
  const m = document.getElementById("video-modal");
  if (!m) return;
  const v = m.querySelector("video");
  if (v) {
    v.pause();
    v.src = "";
  } // libera buffer
  m.remove();
  document.body.style.overflow = "";
}

function bindPortalVideo() {
  const btn = document.getElementById("btn-portal-video");
  if (btn) btn.addEventListener("click", abrirVideoPortal);
}

/* ============ Modal da Enquete (Google Forms embedado) ============ */
const URL_ENQUETE = "https://forms.gle/Cge51miHdAJCQ7aK8";

function abrirEnquete() {
  fecharEnquete();
  const modal = document.createElement("div");
  modal.className = "video-modal enquete-modal";
  modal.id = "enquete-modal";
  modal.innerHTML = `
    <button class="video-modal-close" type="button" aria-label="Fechar enquete">×</button>
    <div class="video-modal-content enquete-modal-content">
      <iframe id="enquete-iframe"
              src="${URL_ENQUETE}"
              title="Enquete BRASCRS"
              loading="eager"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
      <a class="enquete-fallback" href="${URL_ENQUETE}" target="_blank" rel="noopener">
        Não carregou? Abrir em nova aba ↗
      </a>
    </div>
  `;
  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.classList.contains("video-modal-close")
    ) {
      fecharEnquete();
    }
  });
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
}

function fecharEnquete() {
  const m = document.getElementById("enquete-modal");
  if (!m) return;
  const f = m.querySelector("iframe");
  if (f) f.src = "about:blank"; // libera para evitar bg activity
  m.remove();
  document.body.style.overflow = "";
}

function bindPortalEnquete() {
  const btn = document.getElementById("btn-portal-enquete");
  if (btn) btn.addEventListener("click", abrirEnquete);
}

/* ============ Botão de tela cheia (Fullscreen API) ============ */

function _fsElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
}

function toggleFullscreen() {
  const doc = document;
  const el = doc.documentElement;
  if (_fsElement()) {
    const exit =
      doc.exitFullscreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    if (exit) exit.call(doc);
  } else {
    const req =
      el.requestFullscreen ||
      el.webkitRequestFullscreen ||
      el.msRequestFullscreen;
    if (req) req.call(el).catch(() => {});
  }
}

function updateFullscreenButton() {
  const btn = document.getElementById("btn-fullscreen");
  if (btn) btn.classList.toggle("is-fs", !!_fsElement());
}

function bindFullscreen() {
  const btn = document.getElementById("btn-fullscreen");
  if (btn) btn.addEventListener("click", toggleFullscreen);
  ["fullscreenchange", "webkitfullscreenchange", "msfullscreenchange"].forEach(
    (ev) => document.addEventListener(ev, updateFullscreenButton),
  );
  updateFullscreenButton();
}

document.addEventListener("DOMContentLoaded", () => {
  // 4 células de banner (topo-esq/dir, rodapé-esq/dir)
  initCarousel(
    document.getElementById("banner-tl"),
    BANNER_TL,
    INTERVALO_CARROSSEL_MS,
  );
  initCarousel(
    document.getElementById("banner-tr"),
    BANNER_TR,
    INTERVALO_CARROSSEL_MS,
  );
  initCarousel(
    document.getElementById("banner-bl"),
    BANNER_BL,
    INTERVALO_CARROSSEL_MS,
  );
  initCarousel(
    document.getElementById("banner-br"),
    BANNER_BR,
    INTERVALO_CARROSSEL_MS,
  );

  renderLogos();
  renderExamesGrid();
  bindActions();
  bindPortalVideo();
  bindPortalEnquete();
  bindFullscreen();

  // Pré-carrega iframes assim que o navegador estiver ocioso
  if ("requestIdleCallback" in window) {
    requestIdleCallback(preloadIframes, { timeout: 1500 });
  } else {
    setTimeout(preloadIframes, 800);
  }
});
