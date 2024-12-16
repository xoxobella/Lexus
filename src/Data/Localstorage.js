// localStorage.js
export const readDB = () => {
  const data = localStorage.getItem('db');
  return data ? JSON.parse(data) : { users: [] }; // Return an empty users array if no data
};

export const writeDB = (data) => {
  localStorage.setItem('db', JSON.stringify(data));
};