const defaultConfig = {
  background_color: '#fff0f6',
  surface_color: '#ffffff',
  text_color: '#831843',
  primary_action_color: '#ec4899',
  secondary_action_color: '#fbcfe8',
  font_family: 'Georgia',
  font_size: 16,
  cafe_name: 'Pink Lips Cafe',
  tagline: 'Sip, Smile, Repeat',
  hero_title: 'Welcome to Pink Lips Cafe',
  hero_subtitle: 'Where Every Sip is a Kiss of Flavor',
  cta_button: 'View Our Menu',
  about_title: 'About Us',
  about_text: 'Pink Lips Cafe is your cozy corner for premium coffee, delightful pastries, and unforgettable moments. Our carefully crafted menu features artisanal drinks and homemade treats.',
  menu_title: 'Our Menu',
  specials_title: "Today's Specials",
  contact_title: 'Visit Us',
  location_text: '1st floor, Rajrani Tower, Pilibhit Bypass Rd, opposite Phoenix Mall, North City Extension, Bareilly, Uttar Pradesh 243122',
  phone_text: '91527 03560',
  hours_text: 'Mon-Fri: 7AM-8PM\nWeekends: 8AM-10PM'
};

// Handle mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// CTA scroll
document.getElementById('cta-button').addEventListener('click', () => {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// Initialize config (apply colors, text, fonts, etc.)
async function onConfigChange(config) {
  const baseFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = baseFont + ', Georgia, serif';
  document.getElementById('app').style.backgroundColor = config.background_color;
  document.getElementById('app').style.color = config.text_color;

  document.getElementById('cafe-name').textContent = config.cafe_name;
  document.getElementById('hero-title').textContent = config.hero_title;
  document.getElementById('hero-subtitle').textContent = config.hero_subtitle;
  document.getElementById('cta-button').textContent = config.cta_button;
  document.getElementById('about-title').textContent = config.about_title;
  document.getElementById('about-text').textContent = config.about_text;
  document.getElementById('menu-title').textContent = config.menu_title;
  document.getElementById('specials-title').textContent = config.specials_title;
  document.getElementById('contact-title').textContent = config.contact_title;
  document.getElementById('location-text').textContent = config.location_text;
  document.getElementById('phone-text').textContent = config.phone_text;
  document.getElementById('hours-text').textContent = config.hours_text;
}

// Initial setup
onConfigChange(defaultConfig);
