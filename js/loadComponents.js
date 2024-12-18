// Function to dynamically load header and footer
async function loadComponents() {
  try {
    // Fetch the combined HTML file
    const response = await fetch('../components/header-footer.html');
    if (!response.ok) {
      throw new Error(`Failed to fetch header-footer.html: ${response.statusText}`);
    }

    // Parse the HTML content
    const content = document.createElement('div');
    content.innerHTML = await response.text();

    // Load the header if the placeholder exists
    const headerPlaceholder = document.getElementById('header');
    if (headerPlaceholder) {
      const headerContent = content.querySelector('#header-content');
      if (headerContent) {
        headerPlaceholder.innerHTML = headerContent.innerHTML;

        // Initialize the mobile menu toggle after the header is loaded
        initializeMobileMenu();
      }
    }

    // Load the footer if the placeholder exists
    const footerPlaceholder = document.getElementById('footer');
    if (footerPlaceholder) {
      const footerContent = content.querySelector('#footer-content');
      if (footerContent) {
        footerPlaceholder.innerHTML = footerContent.innerHTML;
      }
    }
  } catch (error) {
    console.error('Error loading header or footer:', error);
  }
}

// Automatically call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', loadComponents);

// Function to initialize the mobile menu toggle
function initializeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');

  if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
      navList.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
  }
}
