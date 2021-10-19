import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
        <div className="skeleton-button"></div>
      </div>
      <div className="skeleton-body">
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
      </div>
    </div>
  );
};

export default Skeleton;
