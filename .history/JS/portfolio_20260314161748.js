// start intro animation and show main content

const { translations } = require("./translations");

// Get DOM elements
const intro = document.getElementById('intro');
const start_btn = document.getElementById('start-btn');
const main_content = document.getElementById('main-content');

// Start button event listener
if (start_btn && main_content && intro){
    start_btn.addEventListener('click', () => {
    intro.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      intro.style.display = 'none';
      main_content.style.display = 'block';
    },2255); // Match the duration of the CSS transition
  });
}

// End button event listener

//navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// End navbar background change on scroll

// my skills progress bars animation
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');

  function animateBars() {
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      const barTop = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (barTop < windowHeight - 50) {
        bar.style.width = value + '%'; // Animate to the target width
      }
    });
  };
  window.addEventListener('scroll', animateBars); // Animate on scroll
  //animateBars(); // Run once on load
});
// end my skills progress bars animation

// section reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in-up");
  if (sections) {
  
    checkVisibility = () => {
      const windowHeight = window.innerHeight;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const topVisible = rect.top < windowHeight - 200; // threshold
        const bottomVisible = rect.bottom > 0;

        if (topVisible && bottomVisible) {
          section.classList.add("visible");
        }
      });
    };
    // Run once on load (only if function was defined)
    if (checkVisibility) {
      checkVisibility();
      // Run on scroll
      window.addEventListener("scroll", checkVisibility);
    }
  }
});
// end section reveal on scroll


// dark mode
const video = document.querySelector('.bg-video');
const source = document.getElementById('videoSource');
const toggleBtn = document.getElementById("theme-toggle");

function updateVideoSource() {
  if (video && source) {
    const videoSrc = getComputedStyle(document.body)
      .getPropertyValue('--video-src')
      .trim()
      .replace(/['"]/g, ""); // remove quotes if any

    source.src = videoSrc;
    video.load(); // reload video with new source
  } else {
    // Safe fallback: do nothing if video elements don't exist
    console.warn("No background video element found on this page.");
  }
}

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
  updateVideoSource();
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }

  updateVideoSource();
});
²// Translation dictionary (object)

// Keys that require innerHTML instead of textContent
const HtmlKeys = ['HeroTitle', 'SkillBar1', 'SkillBar2', 'SkillBar3', 'SkillBar4', 'OfferSub', 'contactnav', 'contactSub', 'FormNameL', 'FormEmailL', 'FormML', 'serSub', 'pointw1', 'pointw2', 'pointw3', 'pointw4', 'pointw5', 'pointw6', 'pointw7', 'pointw8', 'pointw9', 'pointw10', 'pointw11', 'pointw12',];

// default language
let CurrentLang = 'en';

// add event listener to the button
document.getElementById('lang-toggle').addEventListener('click', ()=>{
  //switch language
  CurrentLang = CurrentLang === 'en'?'ar' : 'en';

  // Update text direction
  // document.body.dir = CurrentLang === "ar" ? "rtl" : "ltr";

  //update button text
  const toggleBtn = document.getElementById('lang-toggle');
  if(toggleBtn){
    toggleBtn.textContent=CurrentLang === 'en'? '🌐 العربية': '🌐 English'; // switch lang
  };
  const StarBtn = document.getElementById('start-btn');
  if(StarBtn){
    StarBtn.textContent= CurrentLang === 'en'?'START' : 'ابدأ';// start button
  };
  const GetBtn = document.getElementById('get');
  if(GetBtn){
    GetBtn.textContent= CurrentLang === 'en'? 'GET IN TOUCH' : 'تواصل معي';//get in touch button
  };
  const LoadBtn = document.getElementById('load');
  if(LoadBtn){
    LoadBtn.textContent= CurrentLang === 'en'? 'DOWNLOAD CV' : 'السيرة الذاتية';//download cv button
  };
  const HireBtn = document.getElementById('hire');
  if(HireBtn){
    HireBtn.textContent = CurrentLang === 'en'? 'Hire ME' : 'وظفني';//hire me button
  };
  const ContBtn = document.getElementById('contbtn');
  if(ContBtn){
    ContBtn.textContent= CurrentLang === 'en'? 'CONTACT ME' : 'تواصل معي';// footer button
  };
  const CheckBtn = document.getElementById('check');
  if(CheckBtn){
    CheckBtn.textContent= CurrentLang === 'en'? 'Check Services' : 'تحقق من الخدمات';// check services button 
  };
  const SubmitBtn = document.getElementById('submit');
  if(SubmitBtn){
    SubmitBtn.textContent= CurrentLang === 'en'? 'Submit' : 'إرسال';// submit button
  };
  
  const MyServ = document.getElementById('myserv');
  if(MyServ) {
    MyServ.textContent= CurrentLang === 'en'? 'My Services' : 'خدماتي'; // my services button
  };

  //document.getElementById('start-btn').textContent= CurrentLang === 'en'?'START' : 'ابدأ';// start button
  //document.getElementById('get').textContent= CurrentLang === 'en'? 'GET IN TOUCH' : 'تواصل معي';//get in touch button
  //document.getElementById('load').textContent= CurrentLang === 'en'? 'DOWNLOAD CV' : 'السيرة الذاتية';//download cv button
 //document.getElementById('hire').textContent = CurrentLang === 'en'? 'Hire ME' : 'وظفني';//hire me button
  //document.getElementById('contbtn').textContent= CurrentLang === 'en'? 'CONTACT ME' : 'تواصل معي';// footer button
  //document.getElementById('check').textContent= CurrentLang === 'en'? 'Check Services' : 'تحقق من الخدمات';// check services button
  //document.getElementById('submit').textContent= CurrentLang === 'en'? 'SUBMIT' : 'إرسال';// submit button
  //update button text

  // Update all translatable elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const value = translations[CurrentLang][key];
    const tag = el.tagName.toLowerCase();
  
    if (!value) return; // skip if translation missing
  
    if (HtmlKeys.includes(key)) {
      el.innerHTML = value;
    } else if (tag === 'input' || tag === 'textarea') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });
  
  // Update all translatable elements
  
  //toggle font size
  document.body.classList.toggle('arabic', CurrentLang === 'ar');
});
// change language (english to arabic)


// services page toggle

// selecting the button
document.querySelectorAll('.toggle-btn').forEach((button)=>{
  button.addEventListener("click", ()=>{
    const targetId = button.getAttribute("data-bs-target");
    const target = document.querySelector(targetId);
    target.addEventListener('shown.bs.collapse', ()=>{
      button.textContent = 'Less';
    });
    target.addEventListener("hidden.bs.collapse", ()=>{
      button.textContent = 'More...';
    });
  });
});
// services page toggle


//about page
//swiper slider
// slider configuration
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".about-swiper", {
      slidesPerView: 4, // show 4 slides at a time
      spaceBetween: 40, // space between slides
      loop: true, // enable continuous loop mode
      speed: 5000, // 5 seconds per slide
      autoplay: {
        delay: 0, // no delay between transitions
        disableOnInteraction: false, // keep autoplay running after user interactions
      },
      freeMode: true, // enable free mode for smooth scrolling
      freeModeMomentum: true, // enable momentum for free mode
      breakpoints: { // responsive breakpoints
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
        320: { slidesPerView: 1 }
      }
    });
    const swiperEl = document.querySelector(".about-swiper"); // get the swiper container element
    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop()); // pause autoplay on mouse enter
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start()); // resume autoplay on mouse leave
});
//swiper slider4
//about page
