import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import { getRandomIdeas } from "../service/ideas";

import Ideas from "../components/ideas/Ideas";
import Spinner from "../components/spinner/Spinner";

const Home = () => {
  const [idea, setIdea] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandomIdeas();
  }, []);

  const fetchRandomIdeas = async () => {
    setIsLoading(true);
    const res = await getRandomIdeas();
    setIdea(res.data);
    setIsLoading(false);
  };

  return <>{/* <Button variant="contained">Hello World</Button> */}</>;
};

export default Home;
