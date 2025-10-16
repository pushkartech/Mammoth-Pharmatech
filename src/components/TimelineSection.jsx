import React from "react";
import "../styles/TimelineSection.css";
import TimelineItem from "./Cards/TimelineItem";

function TimelineSection() {
  const timelineData = [
    {
      year: "2021",
      desc: "Company founded with a vision to revolutionize pharmaceutical infrastructure solutions.",
    },
    {
      year: "2022",
      desc: "Established strategic partnerships with international leaders in pharmaceutical technology.",
    },
    {
      year: "2023",
      desc: "Expanded product portfolio to serve growing needs of pharmaceutical and healthcare industries.",
    },
    {
      year: "2024",
      desc: "We deliver complete turnkey solutions — from concept to commissioning — ensuring end-to-end responsibility for the entire plant.",
    },
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} year={item.year} desc={item.desc} />
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
