(function () {
  'use strict';

  // Basic focus styles for keyboard navigation
  function addFocusRing(el) {
    el.addEventListener('focus', () => el.style.outline = '2px solid rgba(37,99,235,0.6)');
    el.addEventListener('blur', () => el.style.outline = 'none');
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Make touch areas and buttons accessible
    var touch = document.querySelector('#el-1-1829 .touch-area');
    if (touch) {
      touch.setAttribute('tabindex', '0');
      touch.setAttribute('role', 'button');
      addFocusRing(touch);
      touch.addEventListener('click', function () {
        // Back behavior placeholder
        history.back();
      });
      touch.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          history.back();
        }
      });
    }

    // Add hover cues to menu items (no layout change)
    document.querySelectorAll('.menu-item').forEach(function (mi) {
      mi.setAttribute('tabindex', '0');
      addFocusRing(mi);
    });
  });
})();
