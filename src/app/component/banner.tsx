"use client";
import { useState, useEffect } from "react";
export default function Banner() {
  const originalText: string =
    "Vaccines are instrumental in global health, offering immunity against infectious diseases. They stimulate the immune system to recognize and fight pathogens, curbing severe illnesses. Over time, vaccines have eradicated diseases like smallpox and curtailed polio and measles. Despite skepticism, rigorous research and trials ensure vaccine safety. Beyond individual well-being, vaccines establish herd immunity, safeguarding vulnerable groups. Advancements like mRNA technology drive vaccine innovation, fortifying our defenses against emerging diseases. As a symbol of medical progress, vaccines stand as a testament to humanity's commitment to health, embodying our potential to conquer present and future health challenges.";

  const initialTypingDelay: number = 10;
  const typingSpeed: number = 60;

  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      if (currentIndex <= originalText.length) {
        setTypedText(originalText.slice(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
        timeout = setTimeout(startTyping, typingSpeed + Math.random() * 20);
      }
    };

    timeout = setTimeout(startTyping, initialTypingDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, initialTypingDelay, typingSpeed]);

  return (
    <>
      <div
        style={{
          border: "2px solid yellow",
          marginTop: "10px",
          borderRadius: "20px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        }}
      >
        {typedText}
        <span
          style={{
            opacity: typedText.length % 2 === 0 ? 0 : 1,
          }}
        >
          |
        </span>
      </div>
    </>
  );
}
