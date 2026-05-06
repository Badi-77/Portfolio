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
    //hero
    AboutT : 'I am Badis',
    AboutS : 'Junior developer with a strong interest in full stack Web development, Networking, and Cybersecurity & Automation. I enjoy turning ideas into clean, responsive code and learning new technologies along the way. Focused on building practical solutions, improving my skills, and growing into a well‑rounded professional.',
    AboutS2 : 'My goal is to keep learning, collaborate on meaningful projects, and grow into a versatile developer who bridges creativity with technical expertise.',
    //hero
    
    //stack & study
    secTitle : 'Stack & Study',
    SecSub : '“Here are the languages I work with and the ones I’m currently learning to grow my expertise.”',
    lang : 'Languages I Use',
    front : 'FrontEnd',
    back : 'BackEnd',
    autoM : 'Automation',
    os : 'Operating Systems',
    learn : 'Languages I’m Learning',
    andr : 'Android Apps',
    //stack & study
    //About Page
    
    //Services Page
    //hero
    NavSer : 'Services-Details', // innerHTML
    serTitle : 'My Services',
    serSub : 'Explore the range of services I provide <br> to help you achieve your goals.',// innerHTML
    //hero
    
    //serv content
    //web
    //card1
    serWeb : 'Web Development',
    serWebSub : 'My goal is to craft elegant, scalable web solutions that blend technical precision with creative storytelling.',
    Tweb1 : '✨ Responsive-Design',
    Sweb1 : 'Responsive design is about creating websites that adapt seamlessly to any device. We ensure your content looks polished and functional whether viewed on a desktop, tablet, or smartphone.',
    pointw1 : '<strong>Fluid Layouts:</strong> Flexible grids and containers that adjust automatically to different screen sizes.',// innerHTML
    pointw2 : '<strong>Adaptive Images:</strong> Media that scales gracefully without distortion or loss of quality.',// innerHTML
    pointw3 : '<strong>Mobile‑First Approach:</strong> Prioritizing usability and performance on smaller screens before scaling up to larger ones.',// innerHTML
    pointw4 : '<strong>Consistent Experience:</strong> Harmonized typography, spacing, and interactions across all devices.',// innerHTML
    Sweb2 : 'With responsive design, your website isn’t just accessible — it’s engaging everywhere. We make sure your digital presence feels natural and professional across the entire spectrum of modern devices.',
    //card1
    
    //card2
    Tweb2 : '🎨 UI/UX Design',
    Sweb3 : 'UI/UX design focuses on creating interfaces that are intuitive, engaging, and user‑centered. We blend aesthetics with functionality to deliver experiences that feel effortless',
    pointw5 : '<strong> User‑Focused Layouts:</strong> Designs built around user needs, ensuring clarity and ease of navigation.',// innerHTML// innerHTML
    pointw6 : '<strong> Interactive Elements:</strong> Buttons, forms, and animations that guide users naturally through the journey.',// innerHTML// innerHTML
    pointw7 : '<strong>Visual Consistency:</strong> Harmonized colors, typography, and spacing for a cohesive brand identity.',// innerHTML// innerHTML
    pointw8 : '<strong>Accessibility Standards:</strong> Inclusive design practices that make interfaces usable for everyone.',// innerHTML// innerHTML
    Sweb4 : 'With thoughtful UI/UX, your digital product becomes more than a tool — it becomes an experience. We make sure every interaction feels smooth, meaningful, and memorable.',
    //card2
    
    //card3
    Tweb3 : '⚙️ Scalable Code',
    Sweb5 : 'Scalable code is the foundation of sustainable growth. We write solutions that remain efficient and adaptable as your project evolves.',
    pointw9 : '<strong> Modular Architecture:</strong> Code structured in reusable components for easy expansion.',// innerHTML
    pointw10 : '<strong>Performance Optimization:</strong> Techniques that keep applications fast, even under heavy load.',// innerHTML
    pointw11 : '<strong>Maintainability:</strong> Clean, well‑documented code that teams can understand and extend.',// innerHTML
    pointw12 : '<strong> Future‑Ready:</strong> Built with flexibility to integrate new features and technologies seamlessly.',// innerHTML
    Sweb6 : 'By prioritizing scalability, we ensure your software grows with your ambitions. Our code is designed to stay reliable, efficient, and adaptable over time',
    //card3
    //web
    
    //networking
    //card1
    //card1
    
    //card2
    //card2
    
    //card3
    //card3
    //networking
    
    //cyber
    //serv content
    //Services Page
    
    //Contact Page
    //contact-hero
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
    ContactInfoTitle : 'Contact Information',
    ContactInfoSub : 'Please feel free to reach out using the details below.',
    FormTitle2 : 'Head Office',
    FormSub2 : 'Coming Soon...',
    FormTitle3 : 'Branch Office',
    FormSub3 : 'Coming Soon...',
    FormSocial : 'Social info',
    //contact-info
    //Contact Page
  },
  // english

  // arabic
  ar: {
    //Home Page
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
    FooSub : 'يسعدني التعاون في مشاريع تُحفّز الإبداع وتُلهم. سواءً كانت لديك فكرة محددة أو ترغب فقط في استكشاف الإمكانيات، فأنا هنا لمساعدتك في تحويل رؤيتك إلى واقع. هيا نتواصل ونُبدع معًا شيئًا رائعًا!',
    // footer
    //Home Page
    
    //About Page
    //hero
    AboutT : 'أنا باديس',
    AboutS : 'مطور مبتدئ شغوف بتطوير مواقع الويب المتكاملة، والشبكات، والأمن السيبراني والأتمتة. أستمتع بتحويل الأفكار إلى أكواد برمجية نظيفة وسريعة الاستجابة، وأحرص على تعلم .تقنيات جديدة باستمرار. أركز على بناء حلول عملية، وتطوير مهاراتي، والنمو لأصبح محترفًا متكاملًا.',
    AboutS2 : '.هدفي هو الاستمرار في التعلم، والتعاون في مشاريع ذات مغزى، والنمو لأصبح مطورًا متعدد المهارات يجمع بين الإبداع والخبرة التقنية',
    //hero
    
    //stack & study
    secTitle : 'تكديس ودراسة',
    SecSub : '“إليكم اللغات التي أعمل بها واللغات التي أتعلمها حاليًا لتطوير خبرتي.”',
    lang : 'اللغات التي أستخدمها',
    front : 'الواجهة الأمامية',
    back : 'الواجهة الخلفية',
    autoM : 'الأتمتة',
    os : 'أنظمة التشغيل',
    learn : 'اللغات التي أتعلمها',
    andr : 'تطبيقات أندرويد',
    //stack & study
    //About Page
    
    //Services Page
    //hero
    NavSer : 'التفاصيل - الخدمات', // innerHTML
    serTitle : 'خدماتي',
    serSub : 'استكشف مجموعة الخدمات التي أقدمها <br> .لمساعدتك على تحقيق أهدافك',// innerHTML
    //hero
    
    //serv content
    //web
    //card1
    //card1 header
    serWeb : 'تطوير مواقع الويب',
    serWebSub : '.هدفي هو ابتكار حلول ويب أنيقة وقابلة للتطوير تجمع بين الدقة التقنية وسرد القصص الإبداعي.',
    //card1 header
    Tweb1 : 'التصميم المتجاوب ✨',
    Sweb1 : '.التصميم المتجاوب يعني إنشاء مواقع ويب تتكيف بسلاسة مع أي جهاز. نضمن أن يبدو محتواك أنيقًا وعمليًا سواءً تم عرضه على جهاز كمبيوتر مكتبي أو جهاز لوحي أو هاتف ذكي.',
    pointw1 : '<strong>تخطيطات السوائل:</strong> شبكات وحاويات مرنة تتكيف تلقائيًا مع أحجام الشاشات المختلفة.',// innerHTML
    pointw2 : '<strong>الصور التكيفية:</strong> .وسائط قابلة للتوسيع بسلاسة دون تشويه أو فقدان للجودة',// innerHTML
    pointw3 : '<strong>نهج التركيز على الأجهزة المحمولة أولاً:</strong> .إعطاء الأولوية لسهولة الاستخدام والأداء على الشاشات الصغيرة قبل التوسع إلى الشاشات الأكبر حجماً',// innerHTML
    pointw4 : '<strong>تجربة متسقة:</strong> .تنسيق الطباعة والتباعد والتفاعلات عبر جميع الأجهزة',// innerHTML
    Sweb2 : '.بفضل التصميم المتجاوب، لا يقتصر موقعك الإلكتروني على سهولة الوصول إليه فحسب، بل يصبح جذابًا في كل مكان. نضمن أن يكون حضورك الرقمي طبيعيًا واحترافيًا على جميع الأجهزة الحديثة.',
    
    Tweb2 : '🎨 UI/UX Design',
    Sweb3 : 'UI/UX design focuses on creating interfaces that are intuitive, engaging, and user‑centered. We blend aesthetics with functionality to deliver experiences that feel effortless',
    pointw5 : '<strong> User‑Focused Layouts:</strong> Designs built around user needs, ensuring clarity and ease of navigation.',// innerHTML// innerHTML
    pointw6 : '<strong> Interactive Elements:</strong> Buttons, forms, and animations that guide users naturally through the journey.',// innerHTML// innerHTML
    pointw7 : '<strong>Visual Consistency:</strong> Harmonized colors, typography, and spacing for a cohesive brand identity.',// innerHTML// innerHTML
    pointw8 : '<strong>Accessibility Standards:</strong> Inclusive design practices that make interfaces usable for everyone.',// innerHTML// innerHTML
    Sweb4 : 'With thoughtful UI/UX, your digital product becomes more than a tool — it becomes an experience. We make sure every interaction feels smooth, meaningful, and memorable.',
    
    Tweb3 : '⚙️ Scalable Code',
    Sweb5 : 'Scalable code is the foundation of sustainable growth. We write solutions that remain efficient and adaptable as your project evolves.',
    pointw9 : '<strong> Modular Architecture:</strong> Code structured in reusable components for easy expansion.',// innerHTML
    pointw9 : '<strong>Performance Optimization:</strong> Techniques that keep applications fast, even under heavy load.',// innerHTML
    pointw9 : '<strong>Maintainability:</strong> Clean, well‑documented code that teams can understand and extend.',// innerHTML
    pointw9 : '<strong> Future‑Ready:</strong> Built with flexibility to integrate new features and technologies seamlessly.',// innerHTML
    Sweb6 : 'By prioritizing scalability, we ensure your software grows with your ambitions. Our code is designed to stay reliable, efficient, and adaptable over time',
    //card1
    //web
    //serv content
    //Services Page
    
    //Contact Page
    //contact-hero
    contactnav : '<span>اتصال</span>', // innerHTML
    contactTitle : 'جهة اتصالي',
    contactSub : '?هل لديك مشروع في ذهنك<br>.دعنا نتواصل ونحول رؤيتك إلى واقع ', // innerHTML
    //contact-hero
    
    //contact-form
    FormTitleO : 'هل لديك أي أسئلة؟',
    FormSubO : 'استخدم النموذج أدناه للتواصل معنا.',
    FormNameL : '<span>*</span>اسمك',// innerHTML
    FormNameI : 'اكتب اسمك هنا',
    FormEmailL : '<span>*</span>بريدك الإلكتروني',// innerHTML
    FormEmailI : 'اكتب بريدك الإلكتروني هنا',
    FormPhoneL : 'رقم الهاتف',
    FormPhoneI : 'اكتب رقم هاتفك هنا',
    FormSubjectL : 'الموضوع',
    FormSubjectI : 'اكتب موضوع رسالتك هنا',
    FormML : '<span>*</span>رسالتك',// innerHTML
    FormMI : 'اكتب رسالتك هنا',
    //contact-form
    
    //contact-info
    ContactInfoTitle : 'معلومات الاتصال',
    ContactInfoSub : '.لا تتردد في التواصل معنا باستخدام التفاصيل أدناه',
    FormTitle2 : 'المكتب الرئيسي',
    FormSub2 : '...قريباً',
    FormTitle3 : 'فرع المكتب',
    FormSub3 : '...قريباً',
    FormSocial : 'معلومات التواصل الاجتماعي'
    //contact-info
    //Contact Page
  }
  // arabic
};
// Translation dictionary (object)

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
