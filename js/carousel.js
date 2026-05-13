/**
 * Carrossel simples e reutilizável.
 * Uso: initCarousel(elementoBanner, slides, 5000)
 *
 * `slides` aceita strings (caminho de imagem) ou objetos:
 *   { img, bg, fit, overlay }
 *     - img:     caminho da imagem
 *     - bg:      cor de fundo (ex: "#0A1245") — útil quando o PNG é transparente
 *     - fit:     "cover" (default) | "contain"
 *     - overlay: { img, position }
 *         position: "top-right" | "top-left" | "bottom-right" | "bottom-left"
 *
 * Se a lista vier vazia, mostra um único slide placeholder.
 */
function initCarousel(banner, slides, intervaloMs) {
  const track = banner.querySelector('.banner-track');
  const dots  = banner.querySelector('.banner-dots');     // pode ser null em cells de 1 slide
  track.innerHTML = '';
  if (dots) dots.innerHTML = '';

  const lista = (slides && slides.length) ? slides : [null];

  lista.forEach((item, i) => {
    const slide = document.createElement('div');
    slide.className = 'banner-slide' + (item ? '' : ' placeholder');

    if (item) {
      const conf = typeof item === 'string' ? { img: item } : item;
      if (conf.bg)  slide.style.backgroundColor = conf.bg;

      if (conf.video) {
        // Vídeo no slide — autoplay mudo + loop (autoplay com som é bloqueado pelo navegador)
        const v = document.createElement('video');
        v.src = conf.video;
        v.autoplay = true;
        v.loop     = true;
        v.muted    = true;
        v.playsInline = true;
        v.setAttribute('playsinline', '');
        v.style.objectFit = conf.fit || 'cover';
        v.className = 'banner-video';
        slide.appendChild(v);
      } else if (conf.img) {
        slide.style.backgroundImage = `url("${conf.img}")`;
        if (conf.fit) slide.style.backgroundSize = conf.fit;
      }

      if (conf.overlay && conf.overlay.img) {
        const ov = document.createElement('img');
        ov.src = conf.overlay.img;
        ov.alt = '';
        ov.className = 'banner-overlay banner-overlay-' + (conf.overlay.position || 'top-right');
        slide.appendChild(ov);
      }
    }

    track.appendChild(slide);

    if (lista.length > 1 && dots) {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dots.appendChild(dot);
    }
  });

  let idx = 0;
  let timer = null;

  function goTo(novoIdx) {
    idx = (novoIdx + lista.length) % lista.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    if (dots) Array.from(dots.children).forEach((d, i) => d.classList.toggle('active', i === idx));
    reiniciar();
  }

  function proximo() { goTo(idx + 1); }

  function reiniciar() {
    if (timer) clearInterval(timer);
    if (slides.length > 1) timer = setInterval(proximo, intervaloMs || 5000);
  }

  reiniciar();
  return { goTo, destroy: () => timer && clearInterval(timer) };
}
