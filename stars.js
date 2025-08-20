document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.stars');
  if (!container) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  container.appendChild(canvas);

  const STAR_COUNT = 140;       
  const SPEED_MIN = 8;           
  const SPEED_MAX = 22;         
  const SIZE_MIN  = 0.8;         
  const SIZE_MAX  = 2.2;
  const TWINKLE   = true;        

  let dpr = Math.max(1, window.devicePixelRatio || 1);
  let width = 0, height = 0;
  const stars = [];

  const rand = (a, b) => Math.random() * (b - a) + a;

  function resize() {
    
    width  = container.clientWidth;
    height = container.clientHeight;
    canvas.width  = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width  = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeStars() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: rand(0, width),
        y: rand(0, height),        
        r: rand(SIZE_MIN, SIZE_MAX),
        v: rand(SPEED_MIN, SPEED_MAX),  
        phase: rand(0, Math.PI * 2),   
        flicker: rand(0.15, 0.5)       
      });
    }
  }

  let last = performance.now();
  function tick(now) {
    const dt = (now - last) / 1000; 
    last = now;

    ctx.clearRect(0, 0, width, height);

    for (const s of stars) {
      // move upward
      s.y -= s.v * dt;

      // wrap to bottom when off top
      if (s.y < -s.r) {
        s.y = height + s.r;
        s.x = rand(0, width);
        s.v = rand(SPEED_MIN, SPEED_MAX);
        s.r = rand(SIZE_MIN, SIZE_MAX);
        s.phase = rand(0, Math.PI * 2);
        s.flicker = rand(0.15, 0.5);
      }

      // twinkle (subtle)
      let alpha = 0.8;
      if (TWINKLE) {
        alpha = 0.6 + Math.sin(now / 1000 + s.phase) * s.flicker; // ~0.1–1.1
        alpha = Math.max(0.15, Math.min(alpha, 1));
      }

      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }

  // init
  resize();
  makeStars();
  requestAnimationFrame(t => { last = t; tick(t); });

  // handle resizes
  window.addEventListener('resize', () => {
    resize();
    makeStars();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Keeret Mahi";  
  const target = document.getElementById("hero-title");
  let i = 0;

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 300); 
    }
  }

  type();
});

document.querySelectorAll(".download-resume").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "/assets/Keeret Mahi.pdf";    
    a.download = "Keeret_Mahi_Resume.pdf";        
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
});

document.getElementById("gallery-btn").addEventListener("click", () => {
  window.location.href = "gallery.html";
});