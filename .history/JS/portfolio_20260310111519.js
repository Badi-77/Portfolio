// start intro animation and show main content

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
// dark mode

// change language (english to arabic)

// Translation dictionary (object)
const translations = {
  // english
  en: {
     //Home Page
    // intro
    IntroTitle : 'BADIS',
    IntroSub : 'Welcome To My Portfolio',
    // intro

    // navbar
    NavHome : 'Home',
    NavAbout : 'About',
    NavSer : 'Services',
    web : 'Web Dev',
    net : 'Networking',
    cyber : 'CyberSecurity',
    auto : 'Automation',
    cont : 'ContactMe',
    // navbar

    // hero
    dev : 'Junior Developer',
    HeroTitle : "Hello I'm<br><span>H.BADIS</span>", // innerHTML
    HeroSub : 'Passionate developer, network engineer, and cybersecurity enthusiast — building and protecting resilient digital systems. Turning challenges into opportunities to innovate, secure, and create with purpose.',
    // hero

    // my skills
    MyTitle : 'My Skills',
    SkillBar1 : '<span>Web Dev</span><span>82%</span>',// innerHTML
    SkillBar2 : '<span>Networking</span><span>78%</span>',// innerHTML
    SkillBar3 : '<span>Cybersecurity</span><span>75%</span>',// innerHTML
    SkillBar4 : ' <span>Automation</span><span>74%</span>',// innerHTML
    MyWhy : 'Why Hire Me ?',
    MySub : ' I bring a unique blend of technical expertise and creative vision. With strong skills in design and development, I craft solutions that are not only functional but visually compelling. My ability to troubleshoot complex problems, adapt quickly, and deliver clear, engaging presentations makes me a reliable partner for any project. I thrive on collaboration, value originality, and always aim to create work that is accessible, scalable, and future‑ready.',
    // my skills

    // what i offer
    OfferTitle : 'What I Offer',
    OfferSub : 'Explore the range of services I provide <br> to help you achieve your goals.',// innerHTML
    card1 : '💻 Web Development',
    sub1 : 'Creating responsive and user-friendly websites using the latest technologies to ensure optimal performance and user experience.',
    card2 : '🌐 Networking Solutions',
    sub2 : 'Designing and implementing robust network infrastructures to ensure seamless connectivity and security for businesses of all sizes.',
    card3 : '🛡 Cybersecurity Services',
    sub3 : 'Providing comprehensive cybersecurity solutions to protect digital assets from threats and vulnerabilities in an ever-evolving landscape.',
    card4 : '⚙ Automation Services',
    sub4 : 'Implementing automated workflows and processes to increase efficiency, reduce manual effort, and streamline operations across various domains.',
    // what i offer

    // portfolio
    PortTitle : 'Portfolio',
    PortSub : 'Explore my portfolio to see a selection of my work',
    PhoTitle1 : 'Secure Systems',
    PhoTitle2 : 'Build Wireless Network',
    PhoTitle3 : 'Automate Machines & Tasks',
    PhoTitle4 : 'Build Modern Websites',
    PhoTitle5 : 'Secure Local Network',
    PhoTitle6 : 'Maintain Network',
    link : 'Learn More...',
    // portfolio

    // footer
    FooTitle : "Let's Work Together",
    FooSub : "I'm excited to collaborate on projects that challenge and inspire. Whether you have a specific idea in mind or just want to explore possibilities, I'm here to help bring your vision to life. Let's connect and create something amazing together!",
    // footer
    //Home Page
    
    //About Page
    //About Page
    
    //Services Page
    //Services Page
    
    //Contact Page
    //contact-hero
    contacthome : 'Home',
    contactnav : '<span>Contact</span>', // innerHTML
    contactTitle : 'My Contact',
    contactSub : 'Got a project in mind? <br> Let’s connect and bring your vision to life.', // innerHTML
    //contact-hero
    
    //contact-form
    FormTitleO : 'Got Any Questions?',
    FormSubO : 'Use the form below to get in touch with us.',
    FormNameL : 'Your Name<span>*</span>',// innerHTML
    FormNameI : 'Write Your Name Here',
    FormEmailL : 'Your Email<span>*</span>',// innerHTML
    FormEmailI : 'Write Your Email Here',
    FormPhoneL : 'Phone Number',
    FormPhoneI : 'Phone Number',
    FormSubjectL : 'Subject',
    FormSubjectI : 'Write Your Subject Here',
    FormML : 'Your Message<span>*</span>',// innerHTML
    FormMI : 'Write Your Message Here',
    //contact-form
    
    //contact-info
    //Contact Page
  },
  // english

  // arabic
  ar: {
    // intro
    IntroTitle : 'باديس',
    IntroSub : 'أهلاً بكم في موقعي',
    // intro

    // navbar
    NavHome : 'الرئيسية',
    NavAbout : 'عني',
    NavSer : 'الخدمات',
    web : 'تطوير الويب',
    net : 'الشبكات',
    cyber : 'الأمن السيبراني',
    auto : 'الأتمتة',
    cont : 'تواصل معي',
    // navbar

    // hero
    dev : 'مطور مبتدئ',
    HeroTitle : 'مرحباً، أنا<br><span>ح. باديس</span>',
    HeroSub : 'مطور برامج شغوف، ومهندس شبكات، ومتحمس للأمن السيبراني - أعمل على بناء وحماية أنظمة رقمية مرنة. أحول التحديات إلى فرص للابتكار والتأمين والإبداع الهادف.',
    // hero

    // my skills
    MyTitle : 'مهاراتي',
    SkillBar1 : '<span>تطوير الويب</span><span>82%</span>',
    SkillBar2 : '<span>الشبكات</span><span>78%</span>',
    SkillBar3 : '<span>الأمن السيبراني</span><span>75%</span>',
    SkillBar4 : '<span>الأتمتة</span><span>74%</span>',
    MyWhy : 'لماذا توظفني؟',
    MySub : 'أمتلك مزيجًا فريدًا من الخبرة التقنية والرؤية الإبداعية. بفضل مهاراتي المتميزة في التصميم والتطوير، أصمم حلولًا عملية وجذابة بصريًا. قدرتي على حل المشكلات المعقدة، والتكيف السريع، وتقديم عروض تقديمية واضحة وشيقة، تجعلني شريكًا موثوقًا لأي مشروع. أزدهر في بيئة تعاونية، وأُقدّر الأصالة، وأسعى دائمًا إلى ابتكار أعمال سهلة الاستخدام، وقابلة للتطوير، ومواكبة للمستقبل.',
    // my skills

    // what i offer
    OfferTitle : 'ما أقدمه',
    OfferSub : ' استكشف مجموعة الخدمات التي أقدمها<br>لمساعدتك على تحقيق أهدافك. ',
    card1 : 'تطوير مواقع الويب 💻',
    sub1 : 'إنشاء مواقع ويب سريعة الاستجابة وسهلة الاستخدام باستخدام أحدث التقنيات لضمان الأداء الأمثل وتجربة المستخدم.',
    card2 : 'حلول الشبكات 🌐',
    sub2 : 'تصميم وتنفيذ بنى تحتية شبكية قوية لضمان اتصال سلس وأمان للشركات من جميع الأحجام.',
    card3 : 'خدمات الأمن السيبراني 🛡',
    sub3 : 'توفير حلول شاملة للأمن السيبراني لحماية الأصول الرقمية من التهديدات ونقاط الضعف في بيئة دائمة التطور.',
    card4 : 'خدمات الأتمتة ⚙',
    sub4 : 'تطبيق سير العمليات والآليات الآلية لزيادة الكفاءة، وتقليل الجهد اليدوي، وتبسيط العمليات عبر مختلف المجالات.',
    // what i offer

    // portfolio
    PortTitle : 'ملف أعمالي',
    PortSub : 'تصفح معرض أعمالي للاطلاع على مجموعة مختارة من أعمالي',
    PhoTitle1 : 'أنظمة آمنة',
    PhoTitle2 : 'إنشاء شبكة لاسلكية',
    PhoTitle3 : 'أتمتة الآلات والمهام',
    PhoTitle4 : 'أنشئ مواقع ويب عصرية',
    PhoTitle5 : 'شبكة محلية آمنة',
    PhoTitle6 : 'صيانة الشبكة',
    link : 'اقرأ المزيد...',
    // portfolio

    // footer
    FooTitle : 'هيا نعمل معاً',
    FooSub : 'يسعدني التعاون في مشاريع تُحفّز الإبداع وتُلهم. سواءً كانت لديك فكرة محددة أو ترغب فقط في استكشاف الإمكانيات، فأنا هنا لمساعدتك في تحويل رؤيتك إلى واقع. هيا نتواصل ونُبدع معًا شيئًا رائعًا!'
    // footer
  }
  // arabic
};
// Translation dictionary (object)

// Keys that require innerHTML instead of textContent
const HtmlKeys = ['HeroTitle', 'SkillBar1', 'SkillBar2', 'SkillBar3', 'SkillBar4', 'OfferSub'];

// default language
let CurrentLang = 'en';

// add event listener to the button
document.getElementById('lang-toggle').addEventListener('click', ()=>{
  //switch language
  CurrentLang = CurrentLang === 'en'?'ar' : 'en';

  // Update text direction
  // document.body.dir = CurrentLang === "ar" ? "rtl" : "ltr";

  //update button text
  document.getElementById('lang-toggle').textContent=CurrentLang === 'en'? '🌐 العربية': '🌐 English'; // switch lang
  document.getElementById('start-btn').textContent= CurrentLang === 'en'?'START' : 'ابدأ';// start button
  document.getElementById('get').textContent= CurrentLang === 'en'? 'GET IN TOUCH' : 'تواصل معي';//get in touch button
  document.getElementById('btnText').textContent= CurrentLang === 'en'? 'DOWNLOAD CV' : 'السيرة الذاتية';//download cv button
  document.getElementById('hire').textContent = CurrentLang === 'en'? 'Hire ME' : 'وظفني';//hire me button
  document.getElementById('contbtn').textContent= CurrentLang === 'en'? 'CONTACT ME' : 'تواصل معي';// footer button
  document.getElementById('check').textContent= CurrentLang === 'en'? 'Check Services' : 'تحقق من الخدمات';// check services button
  //update button text

  // Update all translatable elements
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key = el.getAttribute('data-key');
    const value = translations[CurrentLang][key];
    const formTags = ['input', 'textarea', 'select'];
    if (HtmlKeys.includes(key)) {
      el.innerHTML = value; // Use innerHTML for keys that require it
    }else if (formTags.includes(el.tagName.toLowerCase())) { // Check if the element is an input or textarea
      el.placeholder = value; // Update placeholder for input/textarea
    } else {
      el.textContent = value; // Use textContent for other elements
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
