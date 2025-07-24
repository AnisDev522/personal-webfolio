import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Education.css";

// <-- แก้ไข path ให้ถูกต้อง

// 2. อัปเดต educationData เปลี่ยน key 'icon' เป็น 'logo' และใส่ตัวแปรที่ import เข้ามา
const educationData = [
  {
    institution: "Ban Aibatu School",
    duration: "S.Y 2008 - 2014",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppOYQpDYjRAbP7ekHvFVQtsigTeiexg9Ubw&s",
    highlights: [
      "Primary Education",
      "Key Activity: Sports",
      "Outstanding Student Certificate",
    ],
  },
  {
    institution: "Saengthamwitthaya School",
    duration: "S.Y 2015 - 2021",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvQ-Dnv0Ji9vi98GaK4Nw6NKY2aqzjHK09w&s",
    highlights: [
      "Secondary Education",
      "Program: Arts and Languages",
      "Elected as Class President",
    ],
  },
  {
    institution: "Yala Rajabhat University",
    duration: "S.Y 2022 - Present",
    logo: "https://www.yru.ac.th/th/uploads/about/logomaster-e6d914f3fa.png",
    highlights: [
      "Faculty of Science, Technology and Agriculture",
      "Major in Information Technology",
      "Current GPA: 3.78",
    ],
    transcriptUrl: "/transcript.pdf", // <-- เพิ่ม key และ path ของไฟล์ Transcript
  },
];

const TimelineItem = ({ item, index }) => {
  const [ref, classes] = useFadeIn();
  return (
      <div
          ref={ref}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${classes}`}
          key={index}
      >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
              <div className="timeline-icon">
                  <img
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      className="w-full h-full object-contain"
                  />
              </div>
              <h3 className="timeline-institution">{item.institution}</h3>
              <span className="timeline-duration">{item.duration}</span>
              <ul className="timeline-highlights">
                  {item.highlights.map((highlight, i) => (
                      <li key={i} className="timeline-highlight-item">
                          <span className="timeline-check">✓</span>
                          {highlight}
                      </li>
                  ))}
              </ul>
              
              {/* {item.transcriptUrl && (
                  <a
                      href={item.transcriptUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-download-btn"
                  >
                      Download Transcript
                  </a>
              )} */}
          </div>
      </div>
  );
};

const Education = () => {
  const [titleRef, titleClasses] = useFadeIn();
  const [descRef, descClasses] = useFadeIn();

  return (
    <section
      id="education"
      className="py-20 lg:py-28 relative overflow-hidden bg-slate-800/30"
    >
      <div className="floating-elements absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center">
          <div ref={titleRef} className={titleClasses}>
            <h2
              className={`text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent`}
            >
              Educational Background
            </h2>
          </div>
          <div ref={descRef} className={descClasses}>
            <p className={`text-lg text-slate-400 max-w-2xl mx-auto`}>
              My education reflects my strong commitment to continuous learning
              and growth in my field.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="timeline-container">
            {educationData.map((item, index) => (
              <TimelineItem item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
