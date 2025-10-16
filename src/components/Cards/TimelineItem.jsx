import React from "react";

function TimelineItem({ year, desc }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>{year}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
