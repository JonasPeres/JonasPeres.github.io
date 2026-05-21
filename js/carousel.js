(function () {
  const root = document.getElementById('carousel');
  if (!root) return;
  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const prev = root.querySelector('.carousel__nav--prev');
  const next = root.querySelector('.carousel__nav--next');
  const slides = Array.from(track.children);

  // Dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', `Ir para foto ${i + 1}`);
    b.addEventListener('click', () => scrollToIndex(i));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function visibleCount() {
    const w = window.innerWidth;
    if (w >= 1000) return 3;
    if (w >= 700) return 2;
    return 1;
  }

  function scrollToIndex(i) {
    const max = slides.length - visibleCount();
    const target = Math.max(0, Math.min(i, max));
    const slide = slides[target];
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }

  function currentIndex() {
    const sl = slides[0];
    if (!sl) return 0;
    const slideW = sl.getBoundingClientRect().width + 16;
    return Math.round(track.scrollLeft / slideW);
  }

  prev.addEventListener('click', () => scrollToIndex(currentIndex() - 1));
  next.addEventListener('click', () => scrollToIndex(currentIndex() + 1));

  let rafId = null;
  track.addEventListener('scroll', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const idx = currentIndex();
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    });
  });

  // initial dot
  dots[0] && dots[0].classList.add('is-active');

  // Auto-advance every 6s, pausa quando o mouse está sobre o carrossel
  let autoplay = setInterval(advance, 6000);
  function advance() {
    const max = slides.length - visibleCount();
    const idx = currentIndex();
    scrollToIndex(idx >= max ? 0 : idx + 1);
  }
  root.addEventListener('mouseenter', () => clearInterval(autoplay));
  root.addEventListener('mouseleave', () => autoplay = setInterval(advance, 6000));
  document.addEventListener('visibilitychange', () => {
    clearInterval(autoplay);
    if (!document.hidden) autoplay = setInterval(advance, 6000);
  });
})();
