
const API_KEY = '45168431-de79dc5356fbae8131b712894'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
