// References
var $mobileMenu = $('#header-mobile-container');
var $menuIcon = $('#header-menu-icon');
var $closeIcon = $('#header-mobile-close-icon');
var $mobileMenuClickAbsorber = $('#header-mobile-click-absorber');

// Functions
function openMobileMenu() {
  $mobileMenu.toggleClass('is-open', true);
}

function closeMobileMenu() {
  $mobileMenu.toggleClass('is-open', false);
}

// Interactions
// Menu icon
$menuIcon.click(openMobileMenu);
$menuIcon.keydown(function onMenuIconKeyDown(event) {
  switch (event.key) {
    case 'Enter':
    case ' ':
      openMobileMenu();
      event.preventDefault();
      event.stopPropagation();
      break;
  }
});

// Close icon
$closeIcon.click(closeMobileMenu);
$closeIcon.keydown(function onCloseIconKeyDown(event) {
  switch (event.key) {
    case 'Enter':
    case ' ':
      closeMobileMenu();
      event.preventDefault();
      event.stopPropagation();
      break;
  }
});

// Invisibility cloak / click absorber
$mobileMenuClickAbsorber.click(closeMobileMenu);
