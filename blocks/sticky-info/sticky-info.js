export default function decorate(block) {
const button = block.querySelector('.button');

// Create the <picture> element
const picture = document.createElement('picture');

// Create a new <source> element
const source = document.createElement('source');
source.srcset = 'image.webp'; 
source.type = 'image/webp'; 


const img = document.createElement('img');
img.src = 'image.jpg'; 
img.alt = 'Description of the image'; 

// Append the <source> and <img> elements to the <picture> tag
picture.append(source, img);

// Add classes to the picture and button
picture.classList.add('sticky-info-image');
button.classList.add('sticky-info-button');

// Append the <picture> element to the button
button.prepend(picture);
}
