const tabsContainer = document.querySelector('.tabs-content__container');
const tabs = document.querySelectorAll('.tabs-item');
const titleText = document.querySelector('.desc-container__title-text');
const descText = document.querySelector('.desc-text-container');
const descBtn = document.querySelector('.desc-button');
const descContent = document.querySelector('.desc-content-hidden');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tabs-item');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('tabs-item_active'));

  clicked.classList.add('tabs-item_active');
  if (clicked.innerText === 'Основное') {
    titleText.innerText = 'Основная информация';
    descText.style.display = 'none';
    descBtn.style.display = 'none';
    descContent.style.display = 'block';
    descContent.innerText = 'Контент, связанный с основной информацией'
  }
  if (clicked.innerText === 'Объекты') {
    titleText.innerText = 'Описание объекта'
    descText.style.display = 'grid';
    descBtn.style.display = 'block';
    descContent.style.display = 'none';
  }
  if (clicked.innerText === 'Материалы') {
    titleText.innerText = 'Описание материалов'
    descText.style.display = 'none';
    descBtn.style.display = 'none';
    descContent.style.display = 'block';
    descContent.innerText = 'Контент, связанный с материалами'
  }
});