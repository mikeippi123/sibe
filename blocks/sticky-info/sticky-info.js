import { blockData, ranNum } from '../../scripts/aem.js';

export default function decorate(block) {
  const ranNumber = ranNum();
  const randomNumber = `sticky-info-${ranNumber}`;
  const dataObject = blockData(randomNumber);
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

  block.dataset.blockDataLayer = JSON.stringify(dataObject);
}
