const createLetterBtn = document.querySelector('#create-letter');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-button');
const popupContent = document.querySelector('.popup__content');
const letterForm = document.querySelector('.popup__form');
const successMessage = document.querySelector('.popup__sucess-message');

const closePopup = () => {
  popup.classList.remove('active');
  document.body.style.overflow = 'auto';
  setTimeout(() => {
    letterForm.style.display = 'flex';
    successMessage.style.display = 'none';
  }, 1000);
}


createLetterBtn.addEventListener('click', () => {
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', (event) => {
  if (popup.classList.contains('active') && !popupContent.contains(event.target)) {
    closePopup();
  }
});

letterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  letterForm.style.display = 'none';
  successMessage.style.display = 'block';
  letterForm.reset();
});