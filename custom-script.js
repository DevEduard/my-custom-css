// custom-script.js
(function() {
  console.log('🚀 Custom script loaded in Unlayer editor');
  
  // Așteaptă ca documentul să fie gata
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStyles);
  } else {
    injectStyles();
  }
  
  function injectStyles() {
    // Verifică dacă stilurile au fost deja injectate
    if (document.getElementById('my-custom-unlayer-styles')) {
      console.log('⚠️ Styles already injected');
      return;
    }
    
    // Creează elementul style
    const style = document.createElement('style');
    style.id = 'my-custom-unlayer-styles';
    style.textContent = `
      /* Stiluri custom pentru Unlayer Editor */
      
      .nav-item.tab-contents {
        background-color: #2196F3 !important;
        color: white !important;
        border-radius: 4px !important;
        padding: 12px !important;
        margin: 4px !important;
      }
      
      .nav-item.tab-contents:hover {
        background-color: #1976D2 !important;
        transform: translateX(4px) !important;
        transition: all 0.3s ease !important;
      }
      
      .blockbuilder-topbar {
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%) !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
      }
      
      .blockbuilder-sidebar {
        background-color: #f8f9fa !important;
      }
      
      .blockbuilder-button {
        border-radius: 6px !important;
        transition: all 0.3s ease !important;
      }
      
      .blockbuilder-button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
      }
      
      /* Tab-uri active */
      .nav-item.active {
        background-color: #4CAF50 !important;
      }
    `;
    
    document.head.appendChild(style);
    console.log('✅ Custom styles injected successfully!');
  }
  
  // Re-aplică stilurile când se schimbă conținutul (pentru SPA behavior)
  const observer = new MutationObserver(function(mutations) {
    if (!document.getElementById('my-custom-unlayer-styles')) {
      injectStyles();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
