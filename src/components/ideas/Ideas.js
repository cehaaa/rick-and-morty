import React from "react";
import { useState, useEffect } from "react";
import LocalPresistent from "../../service/localPresistent";

const Ideas = ({ idea, isLoading }) => {
  const localPresistent = new LocalPresistent();

  const [isShow, setIsShow] = useState(false);

  const save = (data) => {
    localPresistent.save(data);
    setIsShow(true);
    closeToast();
  };

  const closeToast = () => {
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  };

  return (
    <>
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
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="card-heading">Detail</div>
            <div className="card-inner-container">
              <div>
                <div>type: {idea.type}</div>
                <div>type: {idea.type}</div>
              </div>
              <div>
                <div>type: {idea.type}</div>
                <div>type: {idea.type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ideas;
