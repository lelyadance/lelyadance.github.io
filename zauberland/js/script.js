function createSnowflake(layerId, count){
    const container = document.getElementById(layerId);

    for(let i=0;i<count;i++){
        const snow = document.createElement("div");
        snow.classList.add("snowflake");
        snow.textContent="❄";

        const size = Math.random()*18+12;
        const duration = Math.random()*8+10;
        const opacity = Math.random()*0.6+0.4;
        const amp = Math.random()*6+2;
        const amp2 = Math.random()*6+2;
        const startX = Math.random()*100;

        snow.style.setProperty("--size", size+"px");
        snow.style.setProperty("--duration", duration+"s");
        snow.style.setProperty("--opacity", opacity);
        snow.style.setProperty("--amp", amp);
        snow.style.setProperty("--amp2", amp2);
        snow.style.left = startX+"vw";

        container.appendChild(snow);

        setTimeout(()=>snow.remove(), duration*1000+200);
    }
}
// Загружаем API YouTube
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;

function onYouTubeIframeAPIReady() {
    const block = document.getElementById("yt-player");
    const videoId = block.dataset.videoId;

    block.addEventListener("click", () => {
        // Убираем превью и кнопку
        const thumb = block.querySelector(".yt-thumb");
        const playBtn = block.querySelector(".yt-play");
        if (thumb) thumb.remove();
        if (playBtn) playBtn.remove();
        const iframeContainer = block.querySelector(".yt-iframe-container");
        
        // Создаем плеер
        player = new YT.Player(iframeContainer, {
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                controls: 1,
                rel: 0,
                modestbranding: 1,
                origin: window.location.origin
            }
        });
    });
}







const translations = {
    ru: {
        "title-pre": "ПРИГЛАШАЕМ НА",
        "subtitle": "ТАНЦЕВАЛЬНО-ТЕАТРАЛИЗОВАННЫЙ СПЕКТАКЛЬ",
        "main-title": "«Леля в стране чудес»",
        "description": "Авторская рождественская история о мечте! ✨",
        "feature-1": "Невероятно яркие танцевальные постановки",
        "feature-2": "Волшебные костюмы",
        "feature-3": "Красочные декорации",
        "feature-4": "Профессиональная большая сцена",
        "big-text": "На сцене более 50 участников: дети из танцевальной студии, взрослые артисты и педагоги, которые вместе создадут праздничное чудо! 🎄 Погрузитесь в атмосферу волшебства, сказки и танца — и станьте частью рождественской магии вместе с Lelya Dance!",
        "detail-date": "Дата",
        "detail-date-value": "20 декабря 2025",
        "detail-time": "Время",
        "detail-time-value": "16:00",
        "detail-place": "Место",
        "detail-place-value": "Rudolf-Steiner-Schule Wuppertal\nSchluchtstrasse 21, 42285 Wuppertal",
        "title-video": "Видео о мероприятии",
        "register-btn": "Регистрация",
        "poster": "img/afisha.PNG"
    },
    de: {
        "title-pre": "WIR LADEN EIN ZU",
        "subtitle": "TANZ- UND TANZTHEATERSTÜCK",
        "main-title": "«Lelya im Zauberland»",
        "description": "Eine zauberhafte Weihnachtsgeschichte! ✨",
        "feature-1": "Unglaublich bunte Tanzszenen",
        "feature-2": "Zauberhafte Kostüme",
        "feature-3": "Farbenfrohe Bühnenbilder",
        "feature-4": "Professionelle große Bühne",
        "big-text": "Mehr als 50 Teilnehmer auf der Bühne: Kinder aus der Tanzschule, erwachsene Künstler und Lehrer, die gemeinsam ein festliches Wunder erschaffen! 🎄 Tauchen Sie ein in die Atmosphäre von Zauber, Märchen und Tanz – und werden Sie Teil der Weihnachtsmagie mit Lelya Dance!",
        "detail-date": "Datum",
        "detail-date-value": "20. Dezember 2025",
        "detail-time": "Zeit",
        "detail-time-value": "16:00",
        "detail-place": "Ort",
        "detail-place-value": "Rudolf-Steiner-Schule Wuppertal\nSchluchtstrasse 21, 42285 Wuppertal",
        "title-video": "Video über die Veranstaltung",
        "register-btn": "Registrierung",
        "poster": "img/afisha-de.PNG"
    },
    ua: {
        "title-pre": "ЗАПРОШУЕМО НА",
        "subtitle": "ТАНЦЮВАЛЬНО-ТЕАТРАЛИЗОВАНУ ВИСТАВУ",
        "main-title": "«Леля в країні чудес»",
        "description": "Авторська різдвяна історія про мрію! ✨",
        "feature-1": "Неймовірно яскраві танцювальні постановки",
        "feature-2": "Чарівні костюми",
        "feature-3": "Яскраві декорації",
        "feature-4": "Професійна велика сцена",
        "big-text": "На сцені понад 50 учасників: діти з танцювальної студії, дорослі артисти та педагоги, які разом створять святкове диво! 🎄 Пориньте в атмосферу чарів, казки та танцю — і станьте частиною різдвяної магії разом з Lelya Dance!",
        "detail-date": "Дата",
        "detail-date-value": "20 грудня 2025",
        "detail-time": "Час",
        "detail-time-value": "16:00",
        "detail-place": "Місце",
        "detail-place-value": "Rudolf-Steiner-Schule Wuppertal\nSchluchtstrasse 21, 42285 Wuppertal",
        "title-video": "Відео про подію",
        "register-btn": "Реєстрація",
        "poster": "img/afisha-ua.PNG"
    }
};

// Открытие/закрытие меню
const dropdown = document.querySelector('.lang-dropdown');
const btn = dropdown.querySelector('.lang-btn');
const menu = dropdown.querySelector('.lang-menu');
btn.addEventListener('click', () => menu.style.display = menu.style.display === 'block' ? 'none' : 'block');

// Выбор языка
menu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
        const lang = li.dataset.lang;
        localStorage.setItem('lang', lang);
        document.getElementById('current-lang').textContent = lang.toUpperCase();
        menu.style.display = 'none';
        setLanguage(lang);
    });
});

// Функция смены текста
function setLanguage(lang) {
    for (let key in translations[lang]) {
        const el = document.getElementById(key);
        if (el) el.textContent = translations[lang][key];
    }
    const posterImg = document.getElementById('poster-img');
    if (posterImg && translations[lang].poster) {
    posterImg.src = translations[lang].poster;
    }
}

// Определяем язык при загрузке
const saved = localStorage.getItem('lang') || 'ru';
document.getElementById('current-lang').textContent = saved.toUpperCase();
setLanguage(saved);

// Закрыть меню при клике вне
document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) menu.style.display = 'none';
});


// Три слоя для глубины
setInterval(()=>createSnowflake("snow-container-back",3),700);
setInterval(()=>createSnowflake("snow-container",4),550);
setInterval(()=>createSnowflake("snow-container-front",3),450);










