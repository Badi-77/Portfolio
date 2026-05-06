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