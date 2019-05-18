var menu = document.getElementById("menu");
var closeIcon = document.getElementById("nav-toggle");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
}
