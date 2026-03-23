document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  // ── Ichumma's Inn images ──────────────────────────────────────────────────
  const innImages = [
    { src: 'images/hero-arial.webp',                    caption: "Arial view of Ichumma's Inn" },
    { src: 'images/ichummas-inn.webp',                  caption: "Ichumma's Inn – front view" },
    { src: 'images/hero-back.webp',                     caption: 'Backyard view of the homestay' },
    { src: 'images/bedroom1-cot-view.webp',             caption: 'Classic wooden cot in Bedroom 1' },
    { src: 'images/bedroom1-side-table-close-view.webp',caption: 'Decorative side table arrangement' },
    { src: 'images/bedroom-1-side-table-view.webp',     caption: 'Bedroom with side table and window view' },
    { src: 'images/bedroom-2-cot-view.webp',            caption: 'Spacious bedroom with traditional cot' },
    { src: 'images/bedroom-2-side-table-view.webp',     caption: 'Cozy reading nook in Bedroom 2' },
    { src: 'images/hero-bedroom.webp',                  caption: 'Bedroom corner used in our cover' },
    { src: 'images/dinning-hall-light-view.webp',       caption: 'Dining hall lit with natural ambiance' },
    { src: 'images/dinning-table-full-view.webp',       caption: 'Spacious dining setup with clay pots' },
    { src: 'images/dinning-table-pots-view.webp',       caption: 'Traditional pots at dining table' },
    { src: 'images/hero-dining-landscape.webp',         caption: 'Wide view of the dining area' },
    { src: 'images/hero-dining.webp',                   caption: 'Dining room filled with sunlight' },
    { src: 'images/hall-bench-view.webp',               caption: 'Heritage bench in hallway' },
    { src: 'images/hall-chair-view.webp',               caption: 'Elegant wooden chair with rustic charm' },
  ];

  // ── Ichumma's Neo images ──────────────────────────────────────────────────
  const neoImages = [
    { src: 'images/Neo/neo-pool-jungle-view.webp',          caption: 'Private pool with jungle view' },
    { src: 'images/Neo/neo-pool-jacuzzi-daytime.webp',      caption: 'Pool with jacuzzi step' },
    { src: 'images/Neo/neo-entrance-porch.webp',            caption: 'Main entrance porch' },
    { src: 'images/Neo/neo-bedroom-leather-headboard.webp', caption: 'Bedroom with leather headboard' },
    { src: 'images/Neo/neo-bedroom-grey-walls.webp',        caption: 'Bedroom with courtyard window' },
    { src: 'images/Neo/neo-bedroom-twin-beds.webp',         caption: 'Bedroom with twin beds' },
    { src: 'images/Neo/neo-bedroom-bed-closeup.webp',       caption: 'Bedroom bed detail' },
    { src: 'images/Neo/neo-bedroom-open-wardrobe.webp',     caption: 'Bedroom wardrobe and mirror' },
    { src: 'images/Neo/neo-bedroom-wardrobe-bathroom.webp', caption: 'Wardrobe and bathroom entrance' },
    { src: 'images/Neo/neo-bathroom-rainfall-shower.webp',  caption: 'Bathroom with rainfall shower' },
    { src: 'images/Neo/neo-living-room-teal-sofa.webp',     caption: 'Living room with teal sofa' },
    { src: 'images/Neo/neo-living-room-tv.webp',            caption: 'Living room with TV and wall art' },
    { src: 'images/Neo/neo-lounge-black-sofa.webp',         caption: 'Lounge with black sofa' },
    { src: 'images/Neo/neo-dining-area-living-room.webp',   caption: 'Open dining and living area' },
    { src: 'images/Neo/neo-dining-table-stone-wall.webp',   caption: 'Dining table with stone wall backdrop' },
    { src: 'images/Neo/neo-dining-living-open-plan.webp',   caption: 'Open plan dining and living' },
    { src: 'images/Neo/neo-dining-kitchen-wide.webp',       caption: 'Wide view of dining and kitchen' },
    { src: 'images/Neo/neo-dining-stone-courtyard.webp',    caption: 'Dining area with courtyard window' },
    { src: 'images/Neo/neo-kitchen-island-bar-stool.webp',  caption: 'Kitchen island with bar stools' },
    { src: 'images/Neo/neo-kitchen-counter-shelves.webp',   caption: 'Kitchen counter and shelves' },
    { src: 'images/Neo/neo-games-room-ping-pong.webp',      caption: 'Games room with ping pong table' },
    { src: 'images/Neo/neo-terrace-rattan-seating.webp',    caption: 'Outdoor terrace with rattan seating' },
    { src: 'images/Neo/neo-terrace-open-sky.webp',          caption: 'Stone terrace under open sky' },
    { src: 'images/Neo/neo-terrace-palms.webp',             caption: 'Terrace with palm trees' },
    { src: 'images/Neo/neo-garden-lawn-steps.webp',         caption: 'Garden lawn with stone steps' },
    { src: 'images/Neo/neo-garden-lawn-railing.webp',       caption: 'Garden lawn and treeline' },
    { src: 'images/Neo/neo-garden-steps-lamp.webp',         caption: 'Garden steps with lamp post' },
    { src: 'images/Neo/neo-garden-treeline.webp',           caption: 'Garden treeline view' },
  ];

  // ── Render helper ────────────────────────────────────────────────────────
  function renderGallery(images, containerClass) {
    const container = document.querySelector('.' + containerClass);
    if (!container) return;

    container.innerHTML = images.map((img, index) => `
      <div class="image-wrapper" data-aos="fade-up" data-aos-delay="${Math.min(index * 40, 400)}">
        <img src="${img.src}" alt="${img.caption}" loading="lazy"
          onclick="openLightbox('${img.src}', '${img.caption.replace(/'/g, '&apos;')}')" />
        <div class="caption">${img.caption}</div>
      </div>
    `).join('');
  }

  renderGallery(innImages, 'gallery-inn');
  renderGallery(neoImages, 'gallery-neo');

  // ── Lightbox ─────────────────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  window.openLightbox = (src, caption = '') => {
    lightbox.innerHTML = `<img src="${src}" alt="${caption}" />`;
    lightbox.style.display = 'flex';
  };
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});
