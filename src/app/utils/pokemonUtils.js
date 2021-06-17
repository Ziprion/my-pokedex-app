export const totalPokemonsCount = 949;

export const getNextId = (currentId) => {
  const nextId = currentId + 1 === 803 ? 10001 : currentId + 1;
  return nextId === 10148 ? 1 : nextId;
};

export const getPreviousId = (currentId) => {
  const prevId = currentId - 1 === 0 ? 10147 : currentId - 1;
  return prevId === 10000 ? 802 : prevId;
};