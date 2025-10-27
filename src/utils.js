export const inflateData = (data, n) => {
  if (!data || data.length === 0) return data;
  if (n <= 1) return data;

  const targetLength = Math.floor(data.length * n);
  const result = new Array(targetLength);

  // Copy original data first
  for (let i = 0; i < data.length; i++) {
    result[i] = data[i];
  }

  // Fill remaining slots by cycling through original data
  let sourceIndex = 0;
  for (let i = data.length; i < targetLength; i++) {
    result[i] = {
      ...data[sourceIndex],
      id: `${data[sourceIndex].id}/${Math.floor(i / data.length)}`,
    };
    sourceIndex = (sourceIndex + 1) % data.length;
  }

  return result;
};

export const fetchPhotos = async (callback) => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=5000',
    );
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

    const data = await response.json();
    callback(inflateData(data, 1));
  } catch (e) {
    console.error(e);
  }
};
