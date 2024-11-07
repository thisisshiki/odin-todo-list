export function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.innerHTML = `
      <div class="sidebar-header">
        <div class="hamburger-icon">☰</div>
        <div class="add-icon">+</div>
      </div>
      <div class="user-info">
        <div class="user-icon">👤</div>
        <div class="username">Username</div>
      </div>
      <div class="menu">
        <div class="menu-item">Today</div>
        <div class="menu-item">This Week</div>
        <div class="menu-item">This Month</div>
      </div>
      <div class="classification">
        <div class="classification-header">
          <div>Work</div>
          <div>Study</div>
          <div>Personal</div>
          <div class="add-genre-icon">+</div>
        </div>
      </div>
    `;
  
    document.body.appendChild(sidebar);
  
    const hamburgerIcon = sidebar.querySelector('.hamburger-icon');
    hamburgerIcon.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  
    const menuItems = sidebar.querySelectorAll('.menu-item, .classification-header div');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('visible');
      });
    });
  }
  