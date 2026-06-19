const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

function openModal(el) {
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(el) {
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

const story = document.getElementById('storyModal');

['openStoryBtn', 'openStoryPhoto'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', () => openModal(story));
});

document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => document.querySelectorAll('.modal.open').forEach(closeModal));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal);
});

function setupMini(name) {
  const root = document.querySelector(`[data-carousel="${name}"]`);
  if (!root) return;

  const imgs = [...root.querySelectorAll('img')];
  let i = 0;
  imgs[0]?.classList.add('active');

  const show = n => {
    imgs[i].classList.remove('active');
    i = (n + imgs.length) % imgs.length;
    imgs[i].classList.add('active');
  };

  root.querySelector('.next')?.addEventListener('click', () => show(i + 1));
  root.querySelector('.prev')?.addEventListener('click', () => show(i - 1));
}

setupMini('about');
setupMini('mom');

const expList = document.getElementById('experienceList');
document.getElementById('expDown')?.addEventListener('click', () => {
  expList.scrollBy({ top: 244, behavior: 'smooth' });
});
document.getElementById('expUp')?.addEventListener('click', () => {
  expList.scrollBy({ top: -244, behavior: 'smooth' });
});

const track = document.getElementById('projectTrack');
const projectSlides = track ? [...track.querySelectorAll('.project-slide')] : [];
let projectIndex = 0;

function setProject(i) {
  if (!track || !projectSlides.length) return;
  projectIndex = (i + projectSlides.length) % projectSlides.length;
  track.style.transform = `translateX(-${projectIndex * 100}%)`;
}

document.getElementById('projectNext')?.addEventListener('click', () => setProject(projectIndex + 1));
document.getElementById('projectPrev')?.addEventListener('click', () => setProject(projectIndex - 1));

const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightboxImage');
let lightItems = [];
let lightIndex = 0;

function showLight(i) {
  lightIndex = (i + lightItems.length) % lightItems.length;
  lightImg.src = lightItems[lightIndex].src;
}

document.getElementById('lightNext')?.addEventListener('click', () => showLight(lightIndex + 1));
document.getElementById('lightPrev')?.addEventListener('click', () => showLight(lightIndex - 1));

function scrollLoop(strip, direction) {
  const maxScroll = strip.scrollWidth - strip.clientWidth;
  const step = Math.min(420, Math.max(260, strip.clientWidth * .65));
  const nearStart = strip.scrollLeft <= 4;
  const nearEnd = strip.scrollLeft >= maxScroll - 4;

  if (direction > 0 && nearEnd) {
    strip.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }

  if (direction < 0 && nearStart) {
    strip.scrollTo({ left: maxScroll, behavior: 'smooth' });
    return;
  }

  strip.scrollBy({ left: step * direction, behavior: 'smooth' });
}

document.querySelectorAll('.manual-carousel').forEach(car => {
  const strip = car.querySelector('.photo-strip');

  car.querySelector('.right')?.addEventListener('click', () => scrollLoop(strip, 1));
  car.querySelector('.left')?.addEventListener('click', () => scrollLoop(strip, -1));

  let down = false;
  let startX;
  let scrollLeft;

  strip.addEventListener('mousedown', e => {
    down = true;
    strip.style.cursor = 'grabbing';
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    down = false;
    strip.style.cursor = 'grab';
  });

  strip.addEventListener('mousemove', e => {
    if (!down) return;
    e.preventDefault();
    const x = e.pageX - strip.offsetLeft;
    strip.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });

  strip.querySelectorAll('img').forEach((img, idx) => {
    img.addEventListener('click', () => {
      lightItems = [...strip.querySelectorAll('img')];
      showLight(idx);
      openModal(lightbox);
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: .12 });

document.querySelectorAll('section').forEach(section => observer.observe(section));
