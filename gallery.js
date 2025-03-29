document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const images = [
    { src: 'images/bedroom-1-side-table-view.webp', caption: 'Bedroom with side table and window view' },
    { src: 'images/bedroom-2-cot-view.webp', caption: 'Spacious bedroom with traditional cot' },
    { src: 'images/bedroom-2-side-table-view.webp', caption: 'Cozy reading nook in Bedroom 2' },
    { src: 'images/bedroom1-cot-view.webp', caption: 'Classic wooden cot in Bedroom 1' },
    { src: 'images/bedroom1-side-table-close-view.webp', caption: 'Decorative side table arrangement' },
    { src: 'images/dinning-hall-light-view.webp', caption: 'Dining hall lit with natural ambiance' },
    { src: 'images/dinning-table-full-view.webp', caption: 'Spacious dining setup with clay pots' },
    { src: 'images/dinning-table-pots-view.webp', caption: 'Traditional pots at dining table' },
    { src: 'images/hall-bench-view.webp', caption: 'Heritage bench in hallway' },
    { src: 'images/hall-chair-view.webp', caption: 'Elegant wooden chair with rustic charm' },
    { src: 'images/hero-arial.webp', caption: 'Arial view of Ichumma\'s Inn' },
    { src: 'images/hero-back.webp', caption: 'Backyard view of the homestay' },
    { src: 'images/hero-bedroom.webp', caption: 'Bedroom corner used in our cover' },
    { src: 'images/hero-dining-landscape.webp', caption: 'Wide view of the dining area' },
    { src: 'images/hero-dining.webp', caption: 'Dining room filled with sunlight' }
  ];

  const gallerySection = document.querySelector('.gallery');
  if (!gallerySection) return;

  gallerySection.innerHTML = images.map((img, index) => `
    <div class="image-wrapper" data-aos="fade-up" data-aos-delay="${index * 50}">
      <img src="${img.src}" alt="${img.caption}" loading="lazy" onclick="openLightbox('${img.src}')" />
      <div class="caption">${img.caption}</div>
    </div>
  `).join('');

  const lightbox = document.getElementById('lightbox');
  window.openLightbox = (src) => {
    lightbox.innerHTML = `<img src="${src}" alt="Preview" />`;
    lightbox.style.display = 'flex';
  };
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});

