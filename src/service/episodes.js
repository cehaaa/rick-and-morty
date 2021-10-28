import axios from "../utils/axios";

export const getEpisode = (episode) => {
  return axios.get(`/episodes/${episode}`);
};
