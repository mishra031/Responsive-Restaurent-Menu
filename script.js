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
      about_text: 'Pink Lips Cafe is your cozy corner for premium coffee, delightful pastries, and unforgettable moments. We believe in creating a warm, welcoming space where every guest feels special. Our carefully crafted menu features artisanal drinks and homemade treats that will make your heart sing.',
      menu_title: 'Our Menu',
      specials_title: "Today's Specials",
      contact_title: 'Visit Us',
      location_text: '1st floor, Rajrani Tower, Pilibhit Bypass Rd, opposite Phoenix Mall, North City Extension, Bareilly, Uttar Pradesh 243122',
      phone_text: '91527 03560',
      hours_text: 'Mon-Fri: 7AM-8PM\nWeekends: 8AM-10PM'
    };

    async function onConfigChange(config) {
      const baseFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = 'Georgia, serif';
      const fullFontFamily = `${baseFont}, ${baseFontStack}`;
      const baseSize = config.font_size || defaultConfig.font_size;

      const bgColor = config.background_color || defaultConfig.background_color;
      const surfaceColor = config.surface_color || defaultConfig.surface_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
      const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;

      // Apply colors
      document.getElementById('app').style.backgroundColor = bgColor;
      document.getElementById('app').style.color = textColor;
      document.body.style.fontFamily = fullFontFamily;
      
      // Nav
      const nav = document.querySelector('nav');
      nav.style.backgroundColor = `${surfaceColor}dd`;
      nav.style.color = textColor;
      
      // Section dividers
      document.querySelectorAll('.section-divider').forEach(div => {
        div.style.backgroundColor = primaryColor;
      });
      
      // CTA Button
      const ctaBtn = document.getElementById('cta-button');
      ctaBtn.style.backgroundColor = primaryColor;
      ctaBtn.style.color = '#ffffff';
      
      // Menu cards
      document.querySelectorAll('.menu-card').forEach(card => {
        card.style.backgroundColor = surfaceColor;
        card.style.boxShadow = `0 10px 30px ${primaryColor}20`;
      });
      
      // Feature boxes in about
      document.querySelectorAll('#about .p-4.rounded-lg').forEach(box => {
        box.style.backgroundColor = secondaryColor;
      });
      
      // Specials cards
      document.querySelectorAll('#specials .p-8').forEach(card => {
        card.style.backgroundColor = surfaceColor;
        card.style.border = `2px solid ${primaryColor}`;
      });
      
      // Footer
      document.querySelector('footer').style.borderColor = `${primaryColor}40`;
      
      // Mobile menu button
      document.getElementById('mobile-menu-btn').style.color = textColor;
      document.getElementById('mobile-menu').style.backgroundColor = surfaceColor;

      // Font sizes with responsive scaling
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      document.getElementById('cafe-name').style.fontSize = `${baseSize * (isMobile ? 1.125 : 1.5)}px`;
      document.getElementById('hero-title').style.fontSize = `${baseSize * (isMobile ? 1.875 : isTablet ? 2.5 : 3.75)}px`;
      document.getElementById('hero-subtitle').style.fontSize = `${baseSize * (isMobile ? 1.125 : 1.5)}px`;
      document.getElementById('cta-button').style.fontSize = `${baseSize * (isMobile ? 1 : 1.125)}px`;
      
      document.querySelectorAll('section h3').forEach(h3 => {
        h3.style.fontSize = `${baseSize * (isMobile ? 1.875 : 2.5)}px`;
      });
      
      document.querySelectorAll('.menu-card h4').forEach(h4 => {
        h4.style.fontSize = `${baseSize * (isMobile ? 1.25 : 1.5)}px`;
      });
      
      document.querySelectorAll('.menu-card li').forEach(li => {
        li.style.fontSize = `${baseSize * (isMobile ? 0.875 : 1)}px`;
      });
      
      document.querySelectorAll('#specials h4').forEach(h4 => {
        h4.style.fontSize = `${baseSize * (isMobile ? 1.25 : 1.5)}px`;
      });

      // Update text content
      document.getElementById('cafe-name').textContent = config.cafe_name || defaultConfig.cafe_name;
      document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
      document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      document.getElementById('cta-button').textContent = config.cta_button || defaultConfig.cta_button;
      document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
      document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
      document.getElementById('menu-title').textContent = config.menu_title || defaultConfig.menu_title;
      document.getElementById('specials-title').textContent = config.specials_title || defaultConfig.specials_title;
      document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
      document.getElementById('location-text').textContent = config.location_text || defaultConfig.location_text;
      document.getElementById('phone-text').textContent = config.phone_text || defaultConfig.phone_text;
      document.getElementById('hours-text').textContent = config.hours_text || defaultConfig.hours_text;
    }

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('mobile-menu').classList.add('hidden');
        }
      });
    });

    // CTA button scroll to menu
    document.getElementById('cta-button').addEventListener('click', () => {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    // Handle window resize for responsive font updates
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.elementSdk && window.elementSdk.config) {
          onConfigChange(window.elementSdk.config);
        }
      }, 250);
    });

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                config.surface_color = value;
                window.elementSdk.setConfig({ surface_color: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_action_color || defaultConfig.primary_action_color,
              set: (value) => {
                config.primary_action_color = value;
                window.elementSdk.setConfig({ primary_action_color: value });
              }
            },
            {
              get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
              set: (value) => {
                config.secondary_action_color = value;
                window.elementSdk.setConfig({ secondary_action_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ['cafe_name', config.cafe_name || defaultConfig.cafe_name],
          ['tagline', config.tagline || defaultConfig.tagline],
          ['hero_title', config.hero_title || defaultConfig.hero_title],
          ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
          ['cta_button', config.cta_button || defaultConfig.cta_button],
          ['about_title', config.about_title || defaultConfig.about_title],
          ['about_text', config.about_text || defaultConfig.about_text],
          ['menu_title', config.menu_title || defaultConfig.menu_title],
          ['specials_title', config.specials_title || defaultConfig.specials_title],
          ['contact_title', config.contact_title || defaultConfig.contact_title],
          ['location_text', config.location_text || defaultConfig.location_text],
          ['phone_text', config.phone_text || defaultConfig.phone_text],
          ['hours_text', config.hours_text || defaultConfig.hours_text]
        ])
      });
    }
 
