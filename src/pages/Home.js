import React from "react";
import { useState, useEffect } from "react";

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

  return (
    <div>
      <div className="content-wrapper">
        <div>
          <div className="heading-text">Let's get some ideas.</div>
          <div className="content-text" style={{ marginTop: ".25rem" }}>
            Save it, if you think it's a cool idea
          </div>
        </div>
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
        <Ideas idea={idea} />
      </div>
    </div>
  );
};

export default Home;
