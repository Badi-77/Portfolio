// Load saved language or default to English
let CurrentLang = localStorage.getItem('lang') || 'en';

// add event listener to the button
document.getElementById('lang-toggle').addEventListener('click', ()=>{
  //switch language
  CurrentLang = CurrentLang === 'en'?'ar' : 'en';
  // Save selected language
  localStorage.setItem('lang', CurrentLang);

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
  //update button text
  
  // Function to apply translations everywhere
/**
 * Applies translations to all elements in the page that have a data-key attribute.
 * This function should be called whenever the language is changed.
 * It updates the toggle button text and then updates all translatable elements.
 * If an element has a missing translation, it is skipped.
 * If an element has an HTML key, its innerHTML is updated.
 * If an element is an input or textarea, its placeholder is updated.
 * Otherwise, its textContent is updated.
 * Finally, the Arabic font size class is toggled on the body element.
 */
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