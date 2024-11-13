// import React from "react";
// import "./homeherobanner.scss";

// import banner1 from "../../../assets/images/banner1.png";
// import banner2 from "../../../assets/images/banner2.png";
// import banner3 from "../../../assets/images/banner3.png";

// import Homeherobannerimag1 from "../../../assets/images/herobannerimage1.jpg";
// import Homeherobannerimag2 from "../../../assets/images/herobannerimage2.jpg";
// import Homeherobannerimag3 from "../../../assets/images/herobannerimage3.jpg";

// export default function Homeherobanner() {
//   return (
//     <div className="home-herobanner-alignment">
//       <div className="home-herobanner-main">
//         <div className="home-herobanner-slider-slides-main">
//           <div className="home-herobanner-slider-slide-1-main">
//             <div className="home-herobanner-slider-slide-1-image">
//               <img src={banner1} alt="banner1" />
//             </div>
//             <div className="home-herobanner-slider-slide-1-content">
//               <span>Sofas</span>
//               <h1>Bonaparte</h1>
//             </div>
//           </div>
//           <div className="home-herobanner-slider-slide-1-main">
//             <div className="home-herobanner-slider-slide-1-image">
//               <img src={banner3} alt="banner3" />
//             </div>
//             <div className="home-herobanner-slider-slide-1-content">
//               <span>dinning table</span>
//               <h1>camus</h1>
//             </div>
//           </div>
//           <div className="home-herobanner-slider-slide-1-main">
//             <div className="home-herobanner-slider-slide-1-image">
//               <img src={banner2} alt="banner2" />
//             </div>
//             <div className="home-herobanner-slider-slide-1-content">
//               <span>cofee table</span>
//               <h1>Bonaparte</h1>
//             </div>
//           </div>
//         </div>
//         <div className="home-herobanner-slider-pagination">
//           <div className="home-herobanner-slider-pagination-box">
//             <img src={Homeherobannerimag1} alt="Homeherobannerimag1" />
//             <div className="home-herobanner-slider-pagination-box-overlay"></div>
//           </div>
//           <div className="home-herobanner-slider-pagination-box">
//             <img src={Homeherobannerimag2} alt="Homeherobannerimag2" />
//             <div className="home-herobanner-slider-pagination-box-overlay"></div>
//           </div>
//           <div className="home-herobanner-slider-pagination-box">
//             <img src={Homeherobannerimag3} alt="Homeherobannerimag3" />
//             <div className="home-herobanner-slider-pagination-box-overlay"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











import React, { useState, useEffect } from "react";
import "./homeherobanner.scss";

import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";

import Homeherobannerimag1 from "../../../assets/images/herobannerimage1.jpg";
import Homeherobannerimag2 from "../../../assets/images/herobannerimage2.jpg";
import Homeherobannerimag3 from "../../../assets/images/herobannerimage3.jpg";

export default function Homeherobanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [banner1, banner2, banner3];
  const paginationImages = [
    Homeherobannerimag1,
    Homeherobannerimag2,
    Homeherobannerimag3,
  ];
  const slideDuration = 10000; // 10 seconds

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-herobanner-alignment">
      <div className="home-herobanner-main">
        <div
          className="home-herobanner-slider-slides-main"
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="home-herobanner-slider-slide-1-main">
              <div className="home-herobanner-slider-slide-1-image">
                <img src={slide} alt={`banner${index + 1}`} />
              </div>
              <div className="home-herobanner-slider-slide-1-content">
                <span>
                  {index === 0
                    ? "Sofas"
                    : index === 1
                    ? "Dining Table"
                    : "Coffee Table"}
                </span>
                <h1>{index === 1 ? "Camus" : "Bonaparte"}</h1>
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
