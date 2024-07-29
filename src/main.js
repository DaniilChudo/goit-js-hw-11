// main.js

import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const input = document.querySelector('.search-input');
  const loader = document.querySelector('.loader');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();
    if (!query) {
      showError('Please enter a search query.');
      return;
    }

    loader.classList.remove('hidden');

    try {
      const images = await fetchImages(query);
      renderImages(images);
    } catch (error) {
      showError('An error occurred while fetching images.');
    } finally {
   
      loader.classList.add('hidden');
    }
  });
});
