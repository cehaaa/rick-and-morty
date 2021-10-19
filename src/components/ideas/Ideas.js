import React from "react";

const Ideas = ({ idea }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">"{idea.activity}"</div>
        <button className="btn-primary">Save</button>
      </div>
      <div className="card-body">
        <div> Type: {idea.type} </div>
      </div>
    </div>
  );
};

export default Ideas;
