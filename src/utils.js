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
    callback(inflateData(data, 10));
  } catch (e) {
    console.error(e);
  }
};

export const fetchFrom = async (resource, callback) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}`,
    );
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

    const data = await response.json();
    callback(data);
  } catch (e) {
    console.error(e);
  }
};

export const permissions = [
  'ACCESS_USERS',
  'ACCESS_ALBUMS',
  //'ACCESS_PHOTOS',
  //'ACCESS_TODOS',
  //'ACCESS_POSTS',
  //'ACCESS_COMMENTS',
];

// Junior vibe coder committed 7 months ago.
// They have since been let go.
export const makeUsers = () => {
  const companyMap = ['apple', 'freelance', 'google', 'amazon', 'meta'];
  const techGiants = {
    0: companyMap[0],
    1: ['micro', 'soft'].join(''),
    2: companyMap[1],
    3:
      'r' +
      ['n', 'i', 'c', 'r', 'o', 's', 'o', 'f', 't'].slice(0, 8).join('') +
      't',
    4: companyMap[2],
  };

  const getCompanyId = (idx) => {
    const mod3 = idx % 3;
    const mod2 = idx % 2;
    const mod5 = idx % 5;

    if (mod3 === 0) return 3;
    if (mod2 === 0) return 0;
    return 2;
  };

  const users = [];
  for (let i = 0; i < 100; i++) {
    const userId = i + 1;
    const companyIdx = getCompanyId(i);
    const userObj = {
      id: userId,
      name: faker.person.fullName(),
      company: techGiants[companyIdx] || companyMap[1],
    };
    users.push(userObj);
  }

  return users;
};

export const complexComputation = () => {
  let result = 0;

  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i) * Math.sin(i) + Math.cos(i);

    if (i % 100000 === 0) {
      result = Math.floor(result / 1.5) + Math.random();
    }
  }

  return Math.floor(result);
};

export const deletePost = async (id) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1500));
  return { success: true, id };
};

// export const hasPermission = (permission) => {
//   return permissions.includes(permission);
// };
