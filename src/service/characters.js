import axios from "../utils/axios";

export const getCharacters = () => {
  const page = Math.floor(Math.random() * (34 - 1) + 1);

  return axios.get(`/character/?page=${page}`);
};
