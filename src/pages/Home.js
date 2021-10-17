import React from 'react'
import { fetchRandomIdeas } from '../service/ideas.js'

const Home = () => {

  function getRandomIdeas(){
      fetchRandomIdeas()
  }

  return (
    <div>
      <div className="content-wrapper">
        <div className="heading-text">Let's get some ideas.</div>
        <div>
          <button onClick={getRandomIdeas} className="btn-primary">Random</button>
        </div>
      </div>
    </div>
  )
}

export default Home