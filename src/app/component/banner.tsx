"use client";
import React, { useState, useEffect } from "react";
import styles from "../style/card.module.css";

const images = [
  "/vaccine1.webp",
  "/vaccine2.webp",
  "/vaccine3.webp",
  "/vaccine4.jpeg",
]; // Add your image URLs here

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div
      onClick={() => {
        console.log("Hi");
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            top: 0,
            zIndex: currentImageIndex === index ? -1 : -10,
            position: "absolute",
            filter: "brightness(53%)",

            opacity: currentImageIndex === index ? 1 : 0, // Fade in/out effect
            transition: "opacity 1s ease-in-out",
          }}
          className='image'
        />
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "50px",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h2 style={{ fontSize: "50px", fontWeight: "300" }}>
          ประชาสัมพันธ์การให้บริการวัคซีน{" "}
        </h2>
        <button className={styles.button}>
          ต้องการความช่วยเหลืออยู่หรือเปล่า -&gt;
        </button>
      </div>
    </div>
  );
}
