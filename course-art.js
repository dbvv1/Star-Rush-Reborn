// Decorative menu artwork only. The real route, title and selected state stay
// in the existing button; a failed image never blocks choosing or starting.
export function initCourseArt(document, assets) {
 for (const button of document.querySelectorAll('#trackPicker [data-track]')) {
  const src = assets[button.dataset.track];
  if (!src || button.querySelector('.course-art')) continue;
  const image = document.createElement('img');
  image.className = 'course-art';
  image.alt = '';
  image.setAttribute('aria-hidden', 'true');
  image.draggable = false;
  image.decoding = 'async';
  image.hidden = true;
  image.width = 512;
  image.height = 256;
  image.onload = () => { image.hidden = false; button.dataset.art = 'ready'; };
  image.onerror = () => { image.remove(); delete button.dataset.art; };
  button.prepend(image);
  image.src = src;
 }
}
