import React from "react";
import LocalPresistent from "../../service/localPresistent";

const Ideas = ({ idea }) => {
  const localPresistent = new LocalPresistent();

  const save = (data) => {
    localPresistent.save(data);
  };

  return (
    <div className="card">
      <div className="card-inner-left">
        <div style={{ height: "100%" }}>
          <div style={{ fontWeight: 600 }} className="card-title">
            #{idea.key}
          </div>
          <div className="card-title" style={{ marginTop: "2rem" }}>
            {idea.activity}
          </div>
        </div>
      </div>
      <div className="card-inner-right">
        <div className="card-inner-container">
          <div className="inner-right-header">
            <div className="card-heading">Detail</div>
          </div>
          <div className="inner-right-container">
            <div className="inner-right-content">
              <div>
                <div>Type: {idea.type}</div>
                <div>Participants: {idea.participants}</div>
              </div>
              <div>
                <div>Accessibility: {idea.accessibility}</div>
                <div>Price: {idea.price}</div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn-primary" onClick={() => save(idea)}>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
