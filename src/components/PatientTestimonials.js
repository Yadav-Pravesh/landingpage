import React, { useState, useEffect } from "react";
import "../styles/PatientTestimonials.css";
import quoteIcon from "../assets/quote-icon.png";
import img1 from "../assets/patient1.png";
import img2 from "../assets/patient2.png";
import img3 from "../assets/patient3.png";


const testimonialsData = [
  {
    message:
      "Dr. Stonehart is not only a great cardiologist but also a kind human being. He explained my condition clearly, eased my fears, and guided me through successful treatment.",
    name: "Sarah Thomas",
    location: "Mumbai",
    image: img1,
  },
  {
    message:
      "The doctor was very patient and attentive, making sure I understood every step of the process. I felt cared for and supported throughout.",
    name: "Amit Verma",
    location: "Delhi",
    image: img2,
  },
  {
    message:
      "Thanks to the expertise and dedication, my health improved drastically. I highly recommend their services.",
    name: "Priya Singh",
    location: "Bangalore",
    image: img3,
  },
];

export default function PatientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-bg-custom">
      <div className="pt-container">
        <h2 className="pt-title-custom">Patients Testimonials</h2>
        <p className="pt-subtitle-custom">
          Learn from leading doctors and specialists through focused, digestible
          video content.
        </p>

        <div className="pt-slider-custom">
          <div className="pt-card-custom">
            <div className="pt-text-section">
              <p className="pt-message-custom">
                {testimonialsData[currentIndex].message}
              </p>
              <h4 className="pt-name-custom">
                {testimonialsData[currentIndex].name}
              </h4>
              <p className="pt-location-custom">
                {testimonialsData[currentIndex].location}
              </p>
              <img
                src={quoteIcon}
                alt="Quote"
                className="pt-quote-icon-custom"
              />
            </div>

            <div className="pt-image-wrapper">
              <img
                src={testimonialsData[currentIndex].image}
                alt={testimonialsData[currentIndex].name}
                className="pt-image-custom"
              />
            </div>
          </div>

          <div className="pt-dots-custom">
            {testimonialsData.map((_, idx) => (
              <span
                key={idx}
                className={`pt-dot-custom ${
                  currentIndex === idx ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
