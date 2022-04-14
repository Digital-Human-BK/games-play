const baseUrl = 'http://localhost:3030/data/games';

export async function getAll() {
  const res = await fetch(`${baseUrl}?sortBy=_createdOn%20desc`);
  if (res.ok === false) {
    throw new Error('Someting went wrong!');
  }
  return res.json();
}

export async function getById(id) {
  const res = await fetch(baseUrl + `/${id}`);

  if (res.ok === false) {
    throw new Error('Someting went wrong!');
  }
  return res.json();
}
