import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.png";
import Footer from "./Footer";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image, image2, image3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* <div className="home-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index}`}
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </div> */}

      <div className="home-content">
        <div className="home-header">
          <h1>Welcome to My Job Finder</h1>
          <p>Find your dream job with ease</p>
        </div>

        <div className="home-features">
          <div className="feature">
            <h2>Search Jobs</h2>
            <p>Explore thousands of job listings</p>
          </div>

          <div className="feature">
            <h2>Apply Easily</h2>
            <p>Apply to jobs with just a few clicks</p>
          </div>
        </div>

      </div>

      <Footer/>
    </>
  );
}

export default Home;
