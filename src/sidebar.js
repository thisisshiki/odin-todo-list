// sidebar.js
export function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  
  // Sidebar structure
  sidebar.innerHTML = `
      <div class="sidebar-header">
          <button class="toggle-btn">☰</button>
          <button class="add-btn">+</button>
      </div>
      
      <div class="sidebar-content">
          <div class="user-section dropdown">
              <div class="dropdown-header">
                  <i class="fas fa-user"></i>
                  <span>Username</span>
              </div>
          </div>

          <div class="timeline-section dropdown">
              <div class="dropdown-header">
                  <i class="fas fa-calendar"></i>
                  <span>Timeline</span>
              </div>
              <div class="dropdown-content">
                  <div class="menu-item"><i class="fas fa-today"></i>Today</div>
                  <div class="menu-item"><i class="fas fa-week"></i>This Week</div>
                  <div class="menu-item"><i class="fas fa-month"></i>This Month</div>
              </div>
          </div>

          <div class="categories-section dropdown">
              <div class="dropdown-header">
                  <i class="fas fa-tags"></i>
                  <span>Categories</span>
              </div>
              <div class="dropdown-content">
                  <div class="menu-item"><i class="fas fa-briefcase"></i>Work</div>
                  <div class="menu-item"><i class="fas fa-book"></i>Study</div>
                  <div class="menu-item"><i class="fas fa-user"></i>Personal</div>
                  <div class="menu-item add-category">
                      <i class="fas fa-plus"></i>Add Category
                  </div>
              </div>
          </div>
      </div>
  `;

  // Add event listeners
  const toggleBtn = sidebar.querySelector('.toggle-btn');
  toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
  });

  // Make dropdowns clickable
  const dropdowns = sidebar.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
      const header = dropdown.querySelector('.dropdown-header');
      const content = dropdown.querySelector('.dropdown-content');
      
      if (header && content) {
          header.addEventListener('click', () => {
              dropdown.classList.toggle('active');
          });
      }
  });

  return sidebar;
}
