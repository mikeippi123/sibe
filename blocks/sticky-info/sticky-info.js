function addEventListeners(block) {
  block.querySelector('.button').addEventListener('mouseover', () => {
    block.querySelector('.image').classList.add('zoom');
  });

  block.querySelector('.button').addEventListener('mouseout', () => {
    block.querySelector('.image').classList.remove('zoom');
  });
}

export default function decorate(block) {
  block.querySelector('picture').classList.add('sticky-info-image');

  block.querySelector('.image-wrapper img').classList.add('image');

  block.querySelector('h1,h2,h3,h4,h5,h6').classList.add('title');

  block.querySelector('p').classList.add('sticky-info-text');

  addEventListeners(block);
}
