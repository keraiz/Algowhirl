// Apple-Level UI Interactions
document.addEventListener('DOMContentLoaded', () => {
  // 1. Animated Gradient Text (Like Apple's M1 Chip Text)
  const gradientTexts = document.querySelectorAll('.text-gradient');
  gradientTexts.forEach(text => {
    text.style.backgroundImage = 'linear-gradient(45deg, #2997ff, #9b59b6)';
    text.style.webkitBackgroundClip = 'text';
    text.style.backgroundClip = 'text';
    text.style.color = 'transparent';
    text.style.display = 'inline-block';
  });

  // 2. Pro-Level Card Animations
  const cards = document.querySelectorAll('.card, .category-card');
  cards.forEach((card, index) => {
    card.style.transform = 'perspective(1000px) rotateX(10deg)';
    card.style.transformOrigin = 'center bottom';
    card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) translateY(-15px)';
      card.style.boxShadow = '0 30px 60px -20px rgba(41, 151, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(10deg)';
      card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
    });
    
    // Staggered animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.opacity = '1';
      card.style.transform = 'perspective(1000px) rotateX(10deg)';
    }, 100 * index);
  });

  // 3. Cinematic Hero Section Parallax
  const hero = document.querySelector('.hero');
  if (hero) {
    let scrollPos = 0;
    const heroContent = hero.querySelector('.hero-content');
    const heroImage = hero.querySelector('.hero-image img');
    
    heroContent.style.transform = 'translateY(0)';
    heroContent.style.opacity = '1';
    heroContent.style.transition = 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease';
    
    window.addEventListener('scroll', () => {
      scrollPos = window.scrollY;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPos * 0.2}px) scale(${1 + scrollPos * 0.0005})`;
      }
      heroContent.style.transform = `translateY(${scrollPos * 0.1}px)`;
    });
  }

  // 4. Apple-Style Button Hover Effects
  const buttons = document.querySelectorAll('.cta-button, .hero-cta');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.02)';
      button.style.boxShadow = '0 10px 25px rgba(41, 151, 255, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
      button.style.boxShadow = '';
    });
    
    // Ripple effect
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size/2;
      const y = e.clientY - rect.top - size/2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.background = 'rgba(255, 255, 255, 0.4)';
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // 5. Dynamic Spotlight Effect (Like Apple's Product Pages)
  document.addEventListener('mousemove', (e) => {
    const spotlight = document.querySelector('.spotlight');
    if (!spotlight) {
      const newSpotlight = document.createElement('div');
      newSpotlight.classList.add('spotlight');
      document.body.appendChild(newSpotlight);
    }
    
    document.querySelector('.spotlight').style.left = `${e.clientX}px`;
    document.querySelector('.spotlight').style.top = `${e.clientY}px`;
  });

  // 6. Apple-Style Scroll Indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.classList.add('scroll-indicator');
  document.body.appendChild(scrollIndicator);
  
  window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
  });

  // 7. Micro-Interaction: Animated Underline Links
  document.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') && !link.classList.contains('cta-button')) {
      const underline = document.createElement('span');
      underline.classList.add('link-underline');
      underline.style.width = '0%';
      link.appendChild(underline);
      
      link.addEventListener('mouseenter', () => {
        underline.style.width = '100%';
        underline.style.transition = 'width 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
      });
      
      link.addEventListener('mouseleave', () => {
        underline.style.width = '0%';
      });
    }
  });

  // 8. Dynamic Content Loading (Like Apple's Product Grid)
  let isLoading = false;
  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading) {
      isLoading = true;
      // Simulate content loading
      setTimeout(() => {
        console.log('Loading more content...');
        isLoading = false;
      }, 1500);
    }
  });
});

// Add this to your CSS:
/*
.spotlight {
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(41,151,255,0.1) 0%, rgba(41,151,255,0) 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  mix-blend-mode: overlay;
}

.scroll-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #2997ff, #9b59b6);
  z-index: 1000;
}

.link-underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 1px;
  background: currentColor;
}

.ripple-effect {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  to { transform: scale(2.5); opacity: 0; }
}
*/