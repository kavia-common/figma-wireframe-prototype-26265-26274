(function(){
  // Keyboard focus for menu
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(mi=>{
    mi.tabIndex = 0;
    mi.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        mi.click?.();
      }
    });
  });

  // Tabs click handling (visual only)
  const tabs = document.querySelectorAll('.tabs .tab');
  tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Filters dropdown (placeholder)
  document.querySelectorAll('.filter').forEach(f=>{
    f.tabIndex = 0;
    f.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
      }
    });
  });
})();
