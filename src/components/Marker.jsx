import React, { useState } from "react";

function Marker(mark) {
    const [showContent, setShowContent] = useState(false);

  return (
    <div
      className="box"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="box-content">
        <div dangerouslySetInnerHTML={{ __html: markerSvg }} />
        <span>{mark}</span>
      </div>
      {showContent && (
        <div className="box-hover">
          <div dangerouslySetInnerHTML={{ __html: markerSvg }} />
          <span>{mark}</span>
        </div>
      )}
    </div>
  );
};
export default Marker
