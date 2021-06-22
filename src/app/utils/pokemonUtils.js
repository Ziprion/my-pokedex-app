import _ from 'lodash';

export const isFound = ({ name, id }, searchText) => {
  const searchBy = (attr, text) => String(attr).includes(text);
  const normalizedText = _.trimStart(searchText.trim().toLowerCase(), '#');
  return searchBy(name, normalizedText) || searchBy(id, normalizedText);
};

export const getNextId = (currentId) => {
  const nextId = currentId + 1 === 803 ? 10001 : currentId + 1;
  return nextId === 10148 ? 1 : nextId;
};

export const getPreviousId = (currentId) => {
  const prevId = currentId - 1 === 0 ? 10147 : currentId - 1;
  return prevId === 10000 ? 802 : prevId;
};

export const mappingSortPokemons = {
  idAsc: (array) => _.orderBy(array, 'id', 'asc'),
  idDesc: (array) => _.orderBy(array, 'id', 'desc'),
  nameAsc: (array) => _.orderBy(array, 'name', 'asc'),
  nameDesc: (array) => _.orderBy(array, 'name', 'desc'),
};
