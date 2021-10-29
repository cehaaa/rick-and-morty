import axios from "../utils/axios";

export const getEpisode = (episode) => {
  return axios.get(`/episodes/${episode}`);
};

export const getEpisodeName = (episode) => {
  return axios.get(`/episode/${episode}`).then((res) => res.data.name);
};
