import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    const divs = [...row.children].filter((child) => child.tagName === 'DIV');
    if (divs.length > 0) {
      const cardImageDiv = divs.find((div) => div.children.length === 1 && div.querySelector('picture'));
      if (cardImageDiv) {
        cardImageDiv.className = 'cards-card-image';
        li.append(cardImageDiv);
        const img = cardImageDiv.querySelector('img');
        if (img) {
          const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
          moveInstrumentation(img, optimizedPic.querySelector('img'));
          cardImageDiv.replaceWith(optimizedPic);
        }
      }
      divs.forEach((div) => {
        if (div !== cardImageDiv) {
          div.className = 'cards-card-body';
          li.append(div);
        }
      });
    }
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
