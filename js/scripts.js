var headerNav = document.querySelector ('.header__navigation');
var headerToggle = document.querySelector ('.header__menu-toggle');

headerToggle.addEventListener ('click', function() {
  if (headerNav.classList.contains ('header__navigation--closed'))
    {
      headerNav.classList.remove ('header__navigation--closed');
      headerNav.classList.add ('header__navigation--opened');
    } else {
      headerNav.classList.add ('header__navigation--closed');
      headerNav.classList.remove ('header__navigation--opened');
    }
});

var order = document.querySelector ('.week-product__default-button');
var modalSize = document.querySelector ('.modal');
var modalOverlay = document.querySelector ('.modal-overlay');
var modalClose = document.querySelector ('.modal__close-button');

order.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalSize.classList.add ('modal-show');
  modalOverlay.classList.add ('modal-overlay-show');
});

modalClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modalSize.classList.remove ('modal-show');
  modalOverlay.classList.remove ('modal-overlay-show');
});
