// Set the images to be displayed in sequence
let images = document.querySelectorAll('.multi-images img');
let currentIndex = 0;

// Function to change images
function changeImage() {
    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Increment the index (cycle back to 0 if at the end)
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.display = 'block';
}

// Change image every 2 seconds
setInterval(changeImage, 2000);

// form

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');

// Faq
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));