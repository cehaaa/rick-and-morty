import React from 'react'
import { getRandomIdeas } from '../service/ideas'
import Ideas from '../components/ideas/Ideas'
import { useState, useEffect } from "react";

const Home = () => {
  const [idea, setIdea] = useState({});

  const fetchRandomIdeas = async () => {
    const res = await getRandomIdeas()
    setIdea(res.data)
  }

  return (
    <div>
      <div className="content-wrapper">
        <div className="heading-text">Let's get some ideas.</div>
        <div>
          <button onClick={fetchRandomIdeas} className="btn-primary">Random</button>
        </div>
      </div>
      <div className="content-wrapper">
        <Ideas idea={idea} />
      </div>
    </div>
  )
}

export default Home