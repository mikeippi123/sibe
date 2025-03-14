import { createOptimizedPicture, blockData, ranNum } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  let counter = 0;
  const ranNumber = ranNum();
  const randomNumber = `teaser-${ranNumber}`;
  const dataObject = blockData(randomNumber);
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    const divs = [...row.children].filter((child) => child.tagName === 'DIV');
    if (divs.length > 0) {
      const teaserImageDiv = divs.find((div) => div.children.length === 1 && div.querySelector('picture'));
      if (teaserImageDiv) {
        teaserImageDiv.className = 'teaser-image';
        li.append(teaserImageDiv);
        const img = teaserImageDiv.querySelector('img');
        if (img) {
          const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
          moveInstrumentation(img, optimizedPic.querySelector('img'));
          teaserImageDiv.replaceWith(optimizedPic);
        }
      }
      divs.forEach((div) => {
        if (div !== teaserImageDiv) {
          div.className = `teaser-body${counter}`;
          if (div.firstChild && div.firstChild.nextSibling) {
            if (div.firstChild.nextSibling.id) {
              dataObject[randomNumber].id = div.firstChild.nextSibling.id;
            }
          }
          li.append(div);
        }
      });
      counter += 1;
    }
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.dataset.blockDataLayer = JSON.stringify(dataObject);
  block.append(ul);
}
