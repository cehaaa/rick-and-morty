import axios from "../utils/axios";

export const getRandomIdeas = () => {
  return axios.get("/activity");
};
