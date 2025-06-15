'use client';
import { useEffect, useState } from "react";

export default function AnimatedProfileImages() {
  const [show, setShow] = useState([false, false, false]);

  useEffect(() => {
    setTimeout(() => setShow([true, false, false]), 100);
    setTimeout(() => setShow([true, true, false]), 400);
    setTimeout(() => setShow([true, true, true]), 700);
  }, []);

  const images = [
    { src: "/images/Tech_Greeting_simple_profile1.gif", alt: "Profile 1" },
    { src: "/images/Image_me.jpg", alt: "Profile Center" },
    { src: "/images/Tech_Greeting_simple_profile2.gif", alt: "Profile 2" },
  ];

  return (
    <div className="flex gap-4 mb-4 items-center justify-center">
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={200}
          height={200}
          className={`
            rounded-full border-4 border-blue-100 shadow-lg
            transition-all duration-500
            ${show[idx] ? "scale-100 opacity-100" : "scale-50 opacity-0"}
          `}
          style={{ transitionDelay: `${idx * 0.2}s` }}
        />
      ))}
    </div>
  );
} 