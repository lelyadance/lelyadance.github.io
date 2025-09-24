// Частицы (фон)
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.02;
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.3) {
      particlesArray[i] = new Particle();
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

const form = document.getElementById("contact-form");
const modal = document.getElementById("success-modal");
const closeBtn = document.getElementById("close-modal");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity(); // стандартная подсказка браузера
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/meorjvod", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      form.reset();
      modal.style.display = "flex";
    } else {
      alert("Ошибка при отправке. Попробуйте снова.");
    }
  } catch (error) {
    alert("Произошла ошибка. Попробуйте позже.");
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("lang-select");

  // Определяем язык по <html lang="...">
  const currentLang = document.documentElement.lang.toLowerCase();
  select.value = currentLang;

  // Переключение языка (меняем только папку)
  select.addEventListener("change", () => {
    if (select.value === "de") {
      window.location.href = "../de/index.html";
    } else if (select.value === "ua") {
      window.location.href = "../ua/index.html";
    }else if (select.value === "ru") {
      window.location.href = "../ru/index.html";
    }

  });
});

// Получаем кнопку
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Показывать кнопку, когда прокрутили страницу вниз
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Прокрутка вверх при клике
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});













