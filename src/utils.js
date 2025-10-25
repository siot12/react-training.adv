export const fetchPhotos = async (callback) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

    const data = await response.json();
    callback(data);
  } catch (e) {
    console.error(e);
  }
};
