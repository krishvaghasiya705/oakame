import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./homeherobanner.scss";

import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";

import Homeherobannerimag1 from "../../../assets/images/herobannerimage1.jpg";
import Homeherobannerimag2 from "../../../assets/images/herobannerimage2.jpg";
import Homeherobannerimag3 from "../../../assets/images/herobannerimage3.jpg";

export default function Homeherobanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0); // Track previous slide index
  const slides = [banner1, banner2, banner3];
  const paginationImages = [
    Homeherobannerimag1,
    Homeherobannerimag2,
    Homeherobannerimag3,
  ];
  const slideDuration = 10000; // 10 seconds

  // Refs for the text elements to animate
  const titleRef = useRef([]);
  const subtitleRef = useRef([]);
  const slideRef = useRef([]);

  const handlePaginationClick = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  // Function to animate letters one by one
  const animateText = (textRefs) => {
    gsap.fromTo(
      textRefs,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1 }
    );
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  // Trigger text animation only when the slide changes
  useEffect(() => {
    animateText(titleRef.current);
    animateText(subtitleRef.current);
  }, [currentIndex]);

  // Slide transition animation
  useEffect(() => {
    if (slideRef.current[prevIndex] && slideRef.current[currentIndex]) {
      const tl = gsap.timeline();

      // Animate outgoing slide
      tl.fromTo(
        slideRef.current[prevIndex],
        { width: "100%" },
        { width: "0%", duration: 1, ease: "power2.out" },
        // { opacity: ".3"},
      );
      
      // Animate incoming slide
      tl.fromTo(
        slideRef.current[currentIndex],
        { width: "0%" },
        { width: "100%", duration: 1, ease: "power2.in" },
        "<"
      );
    }
  }, [currentIndex, prevIndex]);

  return (
    <div className="home-herobanner-alignment">
      <div className="home-herobanner-main">
        <div className="home-herobanner-slider-slides-main">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (slideRef.current[index] = el)}
              className={`home-herobanner-slider-slide-1-main ${
                index === currentIndex ? "active-slide" : ""
              }`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: index === currentIndex ? "100%" : "0%",
                overflow: "hidden",
              }}
            >
              <div className="home-herobanner-slider-slide-1-image">
                <img src={slide} alt={`banner${index + 1}`} />
              </div>
              <div className="home-herobanner-slider-slide-1-content">
                <span
                  ref={(el) => {
                    subtitleRef.current[index] = el;
                  }}
                >
                  {index === 0
                    ? "Sofas"
                    : index === 1
                    ? "Dining Table"
                    : "Coffee Table"}
                </span>
                <h1
                  ref={(el) => {
                    titleRef.current[index] = el;
                  }}
                >
                  {index === 1 ? "Camus" : "Bonaparte"}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="home-herobanner-slider-pagination">
          {paginationImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`home-herobanner-slider-pagination-box ${
                currentIndex === index ? "active" : ""
              } ${
                (currentIndex + 1) % slides.length === index
                  ? "nextpaginationactive"
                  : ""
              }`}
            >
              <img src={image} alt={`Homeherobannerimag${index + 1}`} />
              <div className="home-herobanner-slider-pagination-box-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
