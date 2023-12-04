// cмена актива в бургер меню 
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-items > li');
  
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        menuItems.forEach(function(i) {
          i.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });