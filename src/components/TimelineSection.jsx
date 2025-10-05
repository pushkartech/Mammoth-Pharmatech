import React from "react";
import '../styles/TimelineSection.css';
function TimelineSection() {
            return (
                // <section className="section" style={{backgroundColor: '#f9f9f9'}}>
                //     <div className="container">
                //         <h2 className="section-title">Our Journey</h2>
                //         <div className="timeline">
                //             <div className="timeline-item">
                //                 <div className="timeline-content">
                //                     <h3 className="timeline-year">2021</h3>
                //                     <p className="timeline-desc">
                //                         Company founded with a vision to revolutionize pharmaceutical infrastructure solutions.
                //                     </p>
                //                 </div>
                //             </div>
                //             <div className="timeline-item">
                //                 <div className="timeline-content">
                //                     <h3 className="timeline-year">2022</h3>
                //                     <p className="timeline-desc">
                //                         Established strategic partnerships with international leaders in pharmaceutical technology.
                //                     </p>
                //                 </div>
                //             </div>
                //             <div className="timeline-item">
                //                 <div className="timeline-content">
                //                     <h3 className="timeline-year">2023</h3>
                //                     <p className="timeline-desc">
                //                         Expanded product portfolio to serve growing needs of pharmaceutical and healthcare industries.
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </section>
                <section className="timeline-section">
      <h2 className="timeline-title">Our Journey</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <h3>2021</h3>
            <p>
              Company founded with a vision to revolutionize pharmaceutical
              infrastructure solutions.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <h3>2022</h3>
            <p>
              Established strategic partnerships with international leaders in
              pharmaceutical technology.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <h3>2023</h3>
            <p>
              Expanded product portfolio to serve growing needs of
              pharmaceutical and healthcare industries.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <h3>2024</h3>
            <p>
              -
            </p>
          </div>
        </div>
      </div>
    </section>

            );
        }
export default TimelineSection;