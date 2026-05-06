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
    card3 : '🛡️ Cybersecurity Services',
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
    andr : 'Phone Apps',
    //stack & study
    
    //certificates
    certTitle : 'Certifications',
    certSub : 'I’ve earned certifications that validate my expertise and commitment to growth, each reflecting my dedication to industry standards and real‑world applications.',
    //certificates
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
    pointw5 : '<strong> User‑Focused Layouts:</strong> Designs built around user needs, ensuring clarity and ease of navigation.',// innerHTML
    pointw6 : '<strong> Interactive Elements:</strong> Buttons, forms, and animations that guide users naturally through the journey.',// innerHTML
    pointw7 : '<strong>Visual Consistency:</strong> Harmonized colors, typography, and spacing for a cohesive brand identity.',// innerHTML
    pointw8 : '<strong>Accessibility Standards:</strong> Inclusive design practices that make interfaces usable for everyone.',// innerHTML
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
    //header
    netTitle : 'Networking',
    netSub : 'Designing and programming secure, reliable networks.',
    //header
    
    //card1
    Tnet1 : '⚡ Wired & Wireless Network Solutions',
    Snet1 : 'Building reliable networks means connecting people, devices, and systems seamlessly. We design and implement wired and wireless infrastructures that ensure speed, security, and scalability.',
    pointN1 : ' <strong>Structured Cabling:</strong> Organized wired setups that deliver stable, high-performance connections.',// innerHTML
    pointN2 : ' <strong>Wireless Coverage:</strong> Optimized Wi-Fi solutions for consistent access across all environments.',// innerHTML
    pointN3 : ' <strong>Secure Configuration:</strong> Firewalls, encryption, and protocols that protect your data and traffic.',// innerHTML
    pointN4 : ' <strong>Scalable Deployment:</strong> Networks designed to grow with your business needs and future technologies.',// innerHTML
    Snet2 : 'With our networking solutions, you gain a foundation that is both robust and adaptable. We make sure your connections remain fast, secure, and ready for tomorrow’s demands.',
    //card1
    
    //card2
    Tnet2 : '🔒 Secure Network Solutions',
    Snet3 : 'A secure network is the backbone of modern business operations. We design infrastructures that safeguard data, protect users, and maintain trust across every connection.',
    pointN5 : ' <strong>Advanced Firewalls:</strong> Robust protection against unauthorized access and external threats.',// innerHTML
    pointN6 : ' <strong>Data Encryption:</strong> Ensuring sensitive information remains private during transmission and storage.',// innerHTML
    pointN7 : ' <strong>Access Control:</strong> Role‑based permissions that keep systems safe while allowing smooth collaboration.',// innerHTML
    pointN8 : ' <strong>Threat Monitoring:</strong> Continuous oversight to detect and respond to vulnerabilities in real time.',// innerHTML
    Snet4 : 'With secure networking, your organization gains resilience against evolving cyber risks. We make sure your systems remain protected, reliable, and ready to support growth with confidence.',
    //card2
    
    //card3
    Tnet3 : '🔧 Maintain Network Solutions',
    Snet5 : 'Maintaining a network is about keeping systems reliable, secure, and efficient over time. We provide proactive support to ensure your wired and wireless infrastructures run smoothly every day.',
    pointN9 : ' <strong>Regular Monitoring:</strong> Continuous checks to detect issues before they disrupt operations.',// innerHTML
    pointN10 : ' <strong>Performance Tuning:</strong> Optimizing bandwidth, latency, and configurations for peak efficiency.',// innerHTML
    pointN11 : ' <strong>Security Updates:</strong> Applying patches and upgrades to protect against evolving threats.',// innerHTML
    pointN12 : ' <strong>Troubleshooting & Support:</strong> Fast resolution of connectivity problems to minimize downtime.',// innerHTML
    Snet6 : 'With ongoing maintenance, your network stays resilient and dependable. We make sure your connections remain strong, secure, and ready to support your business without interruption.',
    //card3
    //networking
    
    //cybersecurity
    //header
    cybTitle : 'CyberSecurity',
    cybSub : 'Building resilience through advanced security solutions.',
    //header
    
    //card1
    Tcyb1 : '🛡️ Firewall Protection & Threat Prevention',
    Scyb1 : 'Firewalls are the first line of defense in securing your network. We combine intelligent filtering with proactive threat prevention to keep your systems safe and reliable.',
    pointC1 : ' <strong>Next‑Generation Firewalls:</strong> Advanced barriers that block unauthorized access and filter harmful traffic.',// innerHTML
    pointC2 : ' <strong>Threat Prevention Rules:</strong> Automated policies that stop malware, phishing, and intrusion attempts before they spread.',// innerHTML
    pointC3 : ' <strong>- Traffic Monitoring:</strong> Real‑time inspection of data flows to detect suspicious activity instantly.',// innerHTML
    pointC4 : ' <strong>Layered Security:</strong> Integration with other defense systems for comprehensive protection across your network.',// innerHTML
    Scyb2 : 'With strong firewall protection, your business gains resilience against evolving cyber threats. We ensure your network remains secure, efficient, and ready to support growth with confidence.',
    //card1
    
    //card2
    Tcyb2 : '🌐 VPN Solutions & Secure Remote Access',
    Scyb3 : 'Secure remote access is essential in today’s connected world. Our VPN solutions provide encrypted pathways that protect data while enabling teams to work from anywhere.',
    pointC5 : ' <strong>Encrypted Connections:</strong> Strong tunneling protocols that safeguard sensitive information during transmission.',// innerHTML
    pointC6 : ' <strong>Remote Workforce Support:</strong> Reliable access for employees working from home or on the go.',// innerHTML
    pointC7 : ' <strong>Privacy Protection:</strong> Shielding user activity from unauthorized tracking and external threats.',// innerHTML
    pointC8 : ' <strong>Scalable Deployment:</strong> VPN infrastructures that grow with your organization’s size and needs.',// innerHTML
    Scyb4 : 'With secure VPN solutions, your business gains flexibility without sacrificing safety. We ensure remote access remains private, efficient, and trusted across all devices.',
    //card2
    
    //card3
    Tcyb3 : '🕵️ IDS /IPS Monitoring & Intrusion Defense',
    Scyb5 : 'Intrusion Detection and Prevention Systems (IDS/IPS) are vital for spotting and stopping malicious activity. We deploy intelligent monitoring tools that keep your network safe in real time.',
    pointC9 : ' <strong>Intrusion Detection:</strong> Identifies suspicious patterns and alerts administrators before damage occurs.',// innerHTML
    pointC10 : ' <strong>Intrusion Prevention:</strong> Actively blocks harmful traffic and neutralizes threats as they emerge.',// innerHTML
    pointC11 : ' <strong>Real‑Time Monitoring:</strong> Continuous oversight of network activity to ensure immediate response.',// innerHTML
    pointC12 : ' <strong>Integrated Defense:</strong> Works alongside firewalls and VPNs for a layered, comprehensive security strategy.',// innerHTML
    Scyb6 : 'With IDS/IPS solutions, your business gains proactive defense against evolving cyber threats. We make sure your systems remain secure, resilient, and ready to withstand attacks.',
    //card3
    //cybersecurity
    
    //automation
    //header
    Tauto : 'Automation',
    Sauto : 'Transforming ideas into automated solutions through programming.',
    //header
    
    //card1
    Tauto1 : '⚙️ Automation Retrofit for Manual Machinery',
    Sauto1 : 'Upgrading manual machines into automated systems unlocks efficiency and precision. We retrofit existing equipment with modern controls to extend its value and performance.',
    pointA1 : ' <strong>Smart Retrofits:</strong> Adding sensors, actuators, and controllers to modernize manual operations.',// innerHTML
    pointA2 : ' <strong>Programmable Logic Control (PLC):</strong> Implementing automated logic for consistent, repeatable tasks.',// innerHTML
    pointA3 : ' <strong>Productivity Enhancement:</strong> Boosting speed and accuracy while reducing human error and repetitive labor.',// innerHTML
    pointA4 : ' <strong>Cost-effective Modernization:</strong> Extending the lifespan of existing machinery without full replacement.',// innerHTML
    Sauto2 : 'With automation retrofits, your machines evolve into reliable, future-ready systems. We ensure your equipment delivers smarter workflows and higher productivity',
    //card1
    
    //card2
    Tauto2 : '🔧 Maintenance of Automated Machinery & Robotics',
    Sauto3 : 'Automated systems require consistent care to remain efficient and safe. We provide specialized maintenance services that keep machines and robots performing at their best.',
    pointA5 : ' <strong>Preventive Maintenance:</strong> Regular inspections and tune-ups to prevent breakdowns and extend equipment life.',// innerHTML
    pointA6 : ' <strong>Technical Support:</strong> Expert troubleshooting and repairs to minimize downtime and ensure reliability.',// innerHTML
    pointA7 : '<strong>Software & Firmware Updates:</strong> Ensuring automation systems stay secure and up to date.',// innerHTML
    pointA8 : '<strong>Rapid Troubleshooting:</strong> Quick response to faults and errors to minimize downtime.',// innerHTML
    Sauto4 : 'With proper maintenance, automated machinery delivers long‑term reliability and productivity. We make sure your systems remain safe, efficient, and ready for continuous operation.',
    //card2
    
    //card3
    Tauro3 : '🛡️ Industrial Safety & Reliability Systems',
    Sauto5 : 'Safety is the foundation of every automated environment. We design systems that protect workers and ensure machines operate reliably without interruptions.',
    pointA9 : '<strong>Automated Safety Controls:</strong> Emergency stops, interlocks, and protective barriers integrated into machinery.',// innerHTML
    pointA10 : '<strong>Monitoring Systems:</strong> Sensors and alarms that detect hazards and prevent accidents in real time.',// innerHTML
    pointA11 : '<strong>Reliability Engineering:</strong> Building automation solutions that minimize downtime and extend equipment lifespan.',// innerHTML
    pointA12 : '<strong>Compliance Standards:</strong> Ensuring systems meet industrial safety regulations and international certifications.',// innerHTML
    Sauto6 : 'With safety and reliability at the core, your automation systems run smoothly and securely. We make sure productivity never comes at the expense of protection.',
    //card3
    //automation
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
    card3 : 'خدمات الأمن السيبراني 🛡️',
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
    andr : 'تطبيقات الهاتف',
    //stack & study
    
    //certification
    certTitle : 'الشهادات',
    certSub : 'لقد حصلت على شهادات تثبت خبرتي والتزامي بالتطور، وكل منها يعكس تفاني في تطبيق معايير الصناعة والتطبيقات العملية',
    //certification
    //About Page
    
    //Services Page
    //hero
    NavSer : 'التفاصيل - الخدمات', // innerHTML
    serTitle : 'خدماتي',
    serSub : 'استكشف مجموعة الخدمات التي أقدمها <br> .لمساعدتك على تحقيق أهدافك',// innerHTML
    //hero
    
    //serv content
    //web
    //header
    serWeb : 'تطوير مواقع الويب',
    serWebSub : '.هدفي هو ابتكار حلول ويب أنيقة وقابلة للتطوير تجمع بين الدقة التقنية وسرد القصص الإبداعي.',
    //header
    
    //card1 
    Tweb1 : 'التصميم المتجاوب ✨',
    Sweb1 : '.التصميم المتجاوب يعني إنشاء مواقع ويب تتكيف بسلاسة مع أي جهاز. نضمن أن يبدو محتواك أنيقًا وعمليًا سواءً تم عرضه على جهاز كمبيوتر مكتبي أو جهاز لوحي أو هاتف ذكي.',
    pointw1 : '<strong>تخطيطات السوائل:</strong> شبكات وحاويات مرنة تتكيف تلقائيًا مع أحجام الشاشات المختلفة',// innerHTML
    pointw2 : '<strong>الصور التكيفية:</strong> وسائط قابلة للتوسيع بسلاسة دون تشويه أو فقدان للجودة',// innerHTML
    pointw3 : '<strong>نهج التركيز على الأجهزة المحمولة أولاً:</strong> إعطاء الأولوية لسهولة الاستخدام والأداء على الشاشات الصغيرة قبل التوسع إلى الشاشات الأكبر حجماً',// innerHTML
    pointw4 : '<strong>تجربة متسقة:</strong> تنسيق الطباعة والتباعد والتفاعلات عبر جميع الأجهزة',// innerHTML
    Sweb2 : '.بفضل التصميم المتجاوب، لا يقتصر موقعك الإلكتروني على سهولة الوصول إليه فحسب، بل يصبح جذابًا في كل مكان. نضمن أن يكون حضورك الرقمي طبيعيًا واحترافيًا على جميع الأجهزة الحديثة',
    //card1
    
    //card2
    Tweb2 : 'تصميم واجهة المستخدم/تجربة المستخدم 🎨',
    Sweb3 : 'يركز تصميم واجهة المستخدم وتجربة المستخدم على إنشاء واجهات سهلة الاستخدام وجذابة ومتمحورة حول المستخدم. نمزج بين الجماليات والوظائف لتقديم تجارب سلسة ومريحة.',
    pointw5 : '<strong> تصميمات تركز على المستخدم:</strong> تصاميم مبنية على احتياجات المستخدم، مما يضمن الوضوح وسهولة التصفح',// innerHTML// innerHTML
    pointw6 : '<strong> العناصر التفاعلية:</strong>أزرار ونماذج ورسوم متحركة توجه المستخدمين بشكل طبيعي خلال رحلتهم',// innerHTML// innerHTML
    pointw7 : '<strong> الاتساق البصري:</strong> ألوان متناسقة، وخطوط كتابة متناغمة، ومسافات متناسقة لخلق هوية علامة تجارية متماسكة',// innerHTML// innerHTML
    pointw8 : '<strong> معايير إمكانية الوصول:</strong> ممارسات التصميم الشاملة التي تجعل واجهات المستخدم قابلة للاستخدام للجميع',// innerHTML// innerHTML
    Sweb4 : 'بفضل تصميم واجهة المستخدم وتجربة المستخدم المدروسة، يصبح منتجك الرقمي أكثر من مجرد أداة، بل تجربة متكاملة. نضمن أن يكون كل تفاعل سلسًا وهادفًا ولا يُنسى',
    //card2
    
    //card3
    Tweb3 : 'كود قابل للتوسع ⚙️',
    Sweb5 : 'يُعدّ الكود القابل للتطوير أساس النمو المستدام. فنحن نكتب حلولاً تظل فعّالة وقابلة للتكيّف مع تطوّر مشروعك',
    pointw9 : '<strong> بنية معمارية:</strong> تم تنظيم الكود في مكونات قابلة لإعادة الاستخدام لتسهيل التوسع',// innerHTML
    pointw10 : '<strong> تحسين الأداء:</strong> تقنيات تحافظ على سرعة التطبيقات، حتى في ظل الأحمال الثقيلة',// innerHTML
    pointw11 : '<strong> سهولة الصيانة:</strong> كود نظيف وموثق جيدًا يمكن للفرق فهمه وتطويره',// innerHTML
    pointw12 : '<strong> جاهز للمستقبل:</strong> صُممت بمرونة تسمح بدمج الميزات والتقنيات الجديدة بسلاسة',// innerHTML
    Sweb6 : 'من خلال إعطاء الأولوية لقابلية التوسع، نضمن نمو برامجك مع طموحاتك. صُممت برمجياتنا لتبقى موثوقة وفعالة وقابلة للتكيف مع مرور الوقت',
    //card3
    //web
    
    //networking
    //header
    netTitle : 'الشبكات',
    netSub : 'تصميم وبرمجة شبكات آمنة وموثوقة',
    //header
    
    //card1
    Tnet1 : 'حلول الشبكات السلكية واللاسلكية ⚡',
    Snet1 : 'بناء شبكات موثوقة يعني ربط الأشخاص والأجهزة والأنظمة بسلاسة. نصمم وننفذ بنى تحتية سلكية ولاسلكية تضمن السرعة والأمان وقابلية التوسع.',
    pointN1 : ' <strong>تمييز الكابلات:</strong> تنظيم الكابلات السلكية يمكنها ان تحافظ على سلاسة وسرعة الاتصالات',// innerHTML
    pointN2 : ' <strong>تغطية لاسلكية:</strong> حلول واي فاي مُحسّنة لتوفير وصول متسق في جميع البيئات',// innerHTML
    pointN3 : ' <strong>تكوين آمن:</strong> جدران حماية، تشفير، وبروتوكولات تحمي بياناتك وحركة المرور',// innerHTML
    pointN4 : ' <strong> نشر قابل للتوسع:</strong> شبكات مصممة لتنمو مع احتياجات أعمالك والتقنيات المستقبلية',// innerHTML
    Snet2 : 'مع حلول الشبكات الخاصة بنا، تحصل على أساس قوي ومرن. نضمن أن تظل اتصالاتك سريعة وآمنة وجاهزة لتلبية متطلبات الغد.',
    //card1
    
    //card2
    Tnet2 : 'حلول الشبكات الآمنة 🔒', 
    Snet3 : 'حماية شبكاتك من التهديدات السيبرانية هي أولوية لدينا. نصمم وننفذ حلولاً آمنة تحمي بياناتك وخصوصيتك.',
    pointN5 : ' <strong>جدران حماية متقدمة:</strong> حماية قوية ضد الوصول غير المصرح به والتهديدات الخارجية',// innerHTML
    pointN6 : ' <strong>تشفير البيانات:</strong> ضمان بقاء المعلومات الحساسة خاصة أثناء النقل والتخزين',// innerHTML
    pointN7 : ' <strong>التحكم في الوصول:</strong> أذونات قائمة على الأدوار تحافظ على سلامة الأنظمة مع السماح بالتعاون السلس',// innerHTML
    pointN8 : ' <strong>مراقبة التهديدات:</strong> إشراف مستمر للكشف عن الثغرات والاستجابة لها في الوقت الحقيقي',// innerHTML
    Snet4 : 'مع الشبكات الآمنة، تكتسب مؤسستك القدرة على الصمود ضد المخاطر السيبرانية المتطورة. نضمن أن تظل أنظمتك محمية وموثوقة وجاهزة لدعم النمو بثقة.',
    //card2
    
    //card3
    Tnet3 : 'حلول صيانة الشبكات 🔧',
    Snet5 : 'صيانة الشبكة تعني الحفاظ على أنظمتك موثوقة وآمنة وفعالة مع مرور الوقت. نحن نقدم دعمًا استباقيًا لضمان تشغيل بنيتك التحتية السلكية واللاسلكية بسلاسة كل يوم.',
    pointN9 : ' <strong>مراقبة مستمرة:</strong> التحقق من المشكلات قبل تأثيرها في العمليات',// innerHTML
    pointN10 : ' <strong>تحسين الصيانة:</strong> تحسين عرض النطاق الترددي وزمن الاستجابة والتكوينات لتحقيق أقصى قدر من الكفاءة',// innerHTML
    pointN11 : ' <strong>تحديثات الأمان:</strong> تطبيق التصحيحات والترقيات لحماية ضد التهديدات المتطورة',// innerHTML
    pointN12 : ' <strong>دعم وتصحيح المشكلات:</strong> دعم سريع لتصحيح المشاكل في الاتصالات لضمان الصحة والسلامة',// innerHTML
    Snet6 : 'مع الصيانة المستمرة، تظل شبكتك مرنة وموثوقة. نضمن أن تظل اتصالاتك قوية وآمنة وجاهزة لدعم عملك دون انقطاع.',
    //card3
    //networking
    
    //cybersecurity
    //header
    cybTitle : 'الاستقبال السيبراني',
    cybSub : 'بناء القدرة على استقبال السيبرانية المتطورة.',
    //header
    
    //card1
    Tcyb1 : 'حماية الجدران النارية ومنع التهديدات 🛡️',
    Scyb1 : 'الجدران النارية هي خط الدفاع الأول في تأمين شبكتك. نحن نجمع بين التصفية الذكية ومنع التهديدات الاستباقي للحفاظ على أنظمتك آمنة وموثوقة.',
    pointC1 : ' <strong>جدران النارية المتقدمة:</strong> الحقول الذكية التي تحمل الوصولات وتنقل المحتوى المخططة.',// innerHTML
    pointC2 : ' <strong>قواعد منع التهديدات:</strong> السياسات الآلية التي توقف البرامج الضارة، والتصيد الاحتيالي، ومحاولات الاختراق قبل انتشارها.',// innerHTML
    pointC3 : ' <strong>مراقبة حركة المرور:</strong> فحص البيانات في الوقت الحقيقي للكشف عن النشاط المشبوه على الفور.',// innerHTML
    pointC4 : ' <strong>الأمن متعدد الطبقات:</strong> التكامل مع أنظمة الدفاع الأخرى لاستراتيجية حماية شاملة عبر شبكتك.',// innerHTML
    Scyb2 : 'مع حماية الجدران النارية القوية، تكتسب عملك القدرة على الصمود ضد التهديدات السيبرانية المتطورة. نضمن أن تظل شبكتك آمنة وفعالة وجاهزة لدعم النمو بثقة.',
    //card1
    
    //card2
    Tcyb2 : 'حلول VPN والوصول الآمن عن بُعد 🌐',
    Scyb3 : 'الوصول الآمن عن بُعد هو مفتاح النجاح في عصر العمل عن بُعد. نحن نقدم حلولاً قوية تضمن أمان اتصالاتك وخصوصيتك أثناء العمل من أي مكان.',
    pointC5 : ' <strong>تشفير البيانات:</strong> ضمان بقاء المعلومات الحساسة خاصة أثناء النقل والتخزين.',// innerHTML
    pointC6 : ' <strong>التحكم في الوصول:</strong> أذونات قائمة على الأدوار تحافظ على سلامة الأنظمة مع السماح بالتعاون السلس.',// innerHTML
    pointC7 : ' <strong>حماية الخصوصية:</strong> حماية نشاط المستخدم من التتبع غير المصرح به والتهديدات الخارجية.',// innerHTML
    pointC8 : ' <strong>نشر قابل للتوسع:</strong> بنى تحتية VPN تنمو مع حجم واحتياجات مؤسستك.',// innerHTML
    Scyb4 : 'مع حلول VPN الآمنة، تكتسب عملك المرونة دون التضحية بالأمان. نضمن أن يظل الوصول عن بُعد خاصًا وفعالًا وموثوقًا عبر جميع الأجهزة.',
    //card2
    
    //card3
    Tcyb3 : 'مراقبة IDS / IPS والدفاع ضد التسلل 🕵️',
    Scyb5 : 'أنظمة كشف ومنع التسلل (IDS/IPS) ضرورية لرصد وإيقاف النشاط الضار. نحن ننشر أدوات مراقبة ذكية تحافظ على أمان شبكتك في الوقت الحقيقي.',
    pointC9 : ' <strong>كشف التسلل:</strong> يحدد الأنماط المشبوهة وينبه المسؤولين قبل حدوث الضرر.',// innerHTML
    pointC10 : ' <strong>منع التسلل:</strong> يمنع حركة المرور الضارة ويقضي على التهديدات أثناء ظهورها.',// innerHTML
    pointC11 : ' <strong>المراقبة في الوقت الحقيقي:</strong> إشراف مستمر على نشاط الشبكة لضمان الاستجابة الفورية.',// innerHTML
    pointC12 : ' <strong>الدفاع المتكامل:</strong> يعمل جنبًا إلى جنب مع الجدران النارية وVPNs لاستراتيجية أمان شاملة متعددة الطبقات.',// innerHTML
    Scyb6 : 'مع حلول IDS/IPS، تكتسب عملك دفاعًا استباقيًا ضد التهديدات السيبرانية المتطورة. نضمن أن تظل أن  نظمتك آمنة ومرنة وجاهزة لتحمل الهجمات.',
    //card3
    //cybersecurity
    
    //automation
    //header
    Tauto : 'الأتمتة',
    Sauto : 'تحويل الفكرة إلى حلول تلقائية من خلال البرمجة.',
    //header
    
    //card1
    Tauto1 : 'تحديث الأتمتة للآلات اليدوية ⚙️',
    Sauto1 : 'ترقية الآلات اليدوية إلى أنظمة آلية تفتح الأبواب أمام الكفاءة والدقة. نحن نعيد تجهيز المعدات الحالية بأجهزة تحكم حديثة لتمديد قيمتها وأدائها.',
    pointA1 : ' <strong>تحديثات ذكية:</strong> إضافة أجهزة استشعار، ومشغلات، وأجهزة تحكم لتحديث العمليات اليدوية.',// innerHTML
    pointA2 : ' <strong>التحكم المنطقي القابل للبرمجة (PLC):</strong> تنفيذ منطق آلي للمهام المتسقة والقابلة للتكرار.',// innerHTML
    pointA3 : ' <strong>تعزيز الإنتاجية:</strong> زيادة السرعة والدقة مع تقليل الخطأ البشري والجهد المتكرر.',// innerHTML
    pointA4 : ' <strong>التحديث الفعال من حيث التكلفة:</strong> تحسين الكفاءة وتقليل التكاليف من خلال الأتمتة.',// innerHTML
    Sauto2 : 'مع تحديثات الأتمتة، تتطور آلاتك إلى أنظمة موثوقة وجاهزة للمستقبل. نضمن أن تقدم معداتك سير عمل أكثر ذكاءً وإنتاجية أعلى.',
    //card1
    
    //card2
    Tauto2 : 'صيانة الآلات والروبوتات الآلية 🔧',
    Sauto2 : 'تتطلب الأنظمة الآلية رعاية مستمرة لتظل فعالة وآمنة. نحن نقدم خدمات صيانة متخصصة تحافظ على أداء الآلات والروبوتات في أفضل حالاتها.',
    pointA5 : ' <strong>الصيانة الوقائية:</strong> عمليات تفتيش منتظمة وضبط لمنع الأعطال وتمديد عمر المعدات.',// innerHTML
    pointA6 : ' <strong>الدعم الفني:</strong> استكشاف الأخطاء وإصلاحها من قبل الخبراء لتقليل وقت التوقف وضمان الموثوقية.',// innerHTML
    pointA7 : '<strong>تحديثات البرامج الثابتة والبرامج:</strong> ضمان بقاء أنظمة الأتمتة آمنة ومحدثة.',// innerHTML
    pointA8 : '<strong>استكشاف الأخطاء وإصلاحها السريع:</strong> استجابة سريعة للأعطال والأخطاء لتقليل وقت التوقف.',// innerHTML
    Sauto4 : 'مع الصيانة المناسبة، توفر الآلات الآلية موثوقية وإنتاجية طويلة الأمد. نضمن أن تظل أنظمتك آمنة وفعالة وجاهزة للتشغيل المستمر.',
    //card2
    
    //card3
    Tauro3 : 'نظامات السلامة والسلامة الصناعية 🛡️',
    Sauto5 : 'السلامة هي أساس كل بيئة آلية. نحن نصمم أنظمة تحمي العمال وتضمن تشغيل الآلات بشكل موثوق دون انقطاع.',
    pointA9 : '<strong>ضوابط السلامة الآلية:</strong> إيقاف الطوارئ، وأقفال الأمان، والحواجز الواقية المدمجة في الآلات.',// innerHTML
    pointA10 : '<strong>أنظمة المراقبة:</strong> أجهزة استشعار وإنذارات تكتشف المخاطر وتمنع الحوادث في الوقت الحقيقي.',// innerHTML
    pointA11 : '<strong>هندسة الموثوقية:</strong> بناء حلول الأتمتة التي تقلل من وقت التوقف وتمدد عمر المعدات.',// innerHTML
    pointA12 : '<strong>معايير الامتثال:</strong> ضمان أن تفي الأنظمة بلوائح السلامة الصناعية والشهادات الدولية.',// innerHTML
    Sauto6 : 'مع السلامة والموثوقية في صميمها، تعمل أنظمة الأتمتة الخاصة بك بسلاسة وأمان. نضمن أن لا تأتي الإنتاجية على حساب الحماية.',
    //card3
    //automation
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

// web innerHtml list
const WebHtmlKeys = ['pointw1', 'pointw2', 'pointw3', 'pointw4', 'pointw5', 'pointw6', 'pointw7', 'pointw8', 'pointw9', 'pointw10', 'pointw11', 'pointw12'];
// web innerHtml list

// network innerHtml list
const NetHtmlKeys = ['pointN1', 'pointN2', 'pointN3', 'pointN4', 'pointN5', 'pointN6', 'pointN7', 'pointN8', 'pointN9', 'pointN10', 'pointN11', 'pointN12'];
// network innerHtml list

// cyber innerHtml list
const CybHtmlKeys = ['pointC1', 'pointC2', 'pointC3', 'pointC4', 'pointC5', 'pointC6', 'pointC7', 'pointC8', 'pointC9', 'pointC10', 'pointC11', 'pointC12'];
// cyber innerHtml list

// automation innerHtml list
const AutoHtmlKeys = ['pointA1', 'pointA2', 'pointA3', 'pointA4', 'pointA5', 'pointA6', 'pointA7', 'pointA8', 'pointA9', 'pointA10', 'pointA11', 'pointA12'];
// automation innerHtml list

// Keys that require innerHTML instead of textContent
const HtmlKeys = ['HeroTitle', 'SkillBar1', 'SkillBar2', 'SkillBar3', 'SkillBar4', 'OfferSub', 'contactnav', 'contactSub', 'FormNameL', 'FormEmailL', 'FormML', 'serSub', ...WebHtmlKeys, ...NetHtmlKeys, ...CybHtmlKeys, ...AutoHtmlKeys];

// Load saved language or default to English
let CurrentLang = localStorage.getItem('lang') || 'en';

// Apply translations immediately on page load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
});

// Toggle language when button is clicked
document.getElementById('lang-toggle').addEventListener('click', () => {
  // Switch language
  CurrentLang = CurrentLang === 'en' ? 'ar' : 'en';

  // Save selected language
  localStorage.setItem('lang', CurrentLang);

  // Apply translations again
  applyTranslations();
});

// Function to apply translations everywhere
function applyTranslations() {
  // Update toggle button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = CurrentLang === 'en' ? '🌐 العربية' : '🌐 English';
  }

  // Update specific buttons (safe checks)
  const StarBtn = document.getElementById('start-btn');
  if (StarBtn) StarBtn.textContent = CurrentLang === 'en' ? 'START' : 'ابدأ';

  const GetBtn = document.getElementById('get');
  if (GetBtn) GetBtn.textContent = CurrentLang === 'en' ? 'GET IN TOUCH' : 'تواصل معي';

  const LoadBtn = document.getElementById('load');
  if (LoadBtn) LoadBtn.textContent = CurrentLang === 'en' ? 'DOWNLOAD CV' : 'السيرة الذاتية';

  const HireBtn = document.getElementById('hire');
  if (HireBtn) HireBtn.textContent = CurrentLang === 'en' ? 'Hire ME' : 'وظفني';

  const ContBtn = document.getElementById('contbtn');
  if (ContBtn) ContBtn.textContent = CurrentLang === 'en' ? 'CONTACT ME' : 'تواصل معي';

  const CheckBtn = document.getElementById('check');
  if (CheckBtn) CheckBtn.textContent = CurrentLang === 'en' ? 'Check Services' : 'تحقق من الخدمات';

  const SubmitBtn = document.getElementById('submit');
  if (SubmitBtn) SubmitBtn.textContent = CurrentLang === 'en' ? 'Submit' : 'إرسال';

  const MyServ = document.getElementById('myserv');
  if (MyServ) MyServ.textContent = CurrentLang === 'en' ? 'My Services' : 'خدماتي';.

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

  // Toggle font size / direction for Arabic
  document.body.classList.toggle('arabic', CurrentLang === 'ar');
  document.body.dir = CurrentLang === 'ar' ? 'rtl' : 'ltr';
}


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
