const API_URL = process.env.REACT_APP_API_URL;

export async function listCards(page, search) {
  const res = await fetch(
    `${API_URL}/api/cards.list?page=${page}&name=${search}`
  );
  const result = await res.json();
  return result.cards;
}
