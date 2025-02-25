export default function decorate(block) {
  const button = block.querySelector('.button');

  const existingPicture = block.querySelector('picture');
  button.classList.add('sticky-info-link');
  button.prepend(existingPicture);

  const anchor = document.querySelector('.sticky-info .button-container a');
  anchor.childNodes[1].textContent = '';

  const titleText = anchor.getAttribute('title');

  const span = document.createElement('span');
  span.textContent = titleText;

  span.classList.add('sticky-info-text');

  button.append(span);

  const picture = document.querySelector('.sticky-info .button-container picture');
  picture.classList.add('sticky-info-picture');
}
