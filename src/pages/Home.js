import React from "react";
import { useState, useEffect } from "react";

import { getRandomIdeas } from "../service/ideas";

import Ideas from "../components/ideas/Ideas";
import Spinner from "../components/spinner/Spinner";
import Skeleton from "../components/skeleton/Skeleton";

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

  return (
    <div>
      <div className="content-wrapper">
        <div className="heading-text">Let's get some ideas.</div>
        <div>
          <button onClick={fetchRandomIdeas} className="btn-primary">
            Random
            {isLoading ? (
              <div style={{ marginLeft: "10px" }}>
                <Spinner />
              </div>
            ) : (
              false
            )}
          </button>
        </div>
      </div>
      <div className="content-wrapper">
        {isLoading ? <Skeleton /> : <Ideas idea={idea} loading={isLoading} />}
      </div>
    </div>
  );
};

export default Home;
