import axios from "../utils/axios";

export const getCharacters = () => {
  return axios.get("/character/?page=5");
};
