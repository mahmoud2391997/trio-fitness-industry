import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect, useRef } from "react";
import "../styles/globals.css";
const stats = [
  {
    value: "96%",
    title: "Client Satisfaction",
    description: "Our Members Love Their Results And Experience",
  },
  {
    value: "+5",
    title: "Years Of Experience",
    description: "Trust In Our Proven Track Record Of Transforming",
  },
  {
    value: "+800",
    title: "Active Members",
    description: "Join Our Thriving Fitness Community",
  },
  {
    value: "24/7",
    title: "Support Available",
    description: "Expert Assistance Whenever You Need It",
  },
];
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-right");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <main className="relative w-full h-screen overflow-hidden row-start-2">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="/WhatsApp Video 2024-12-30 at 10.40.39.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1
            className="text-7xl font-semibold leading-relaxed letter-spacing-[0.1em] "
            style={{ fontFamily: '"Bebas Neue", Helvetica, Arial, sans-serif' }}
          >
            THE BEST PERSONAL <br /> TRAINIG EXPERIENCE
            <br /> EVER
          </h1>
        </div>
      </main>
      <section
        id="about"
        className="bg-white text-[#928c6b] flex  items-center justify-around h-[80vh]"
      >
        <div className="flex flex-col space-y-4 items-start justify-around w-2/5">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <p className="text-lg">
            Welcome to Trio fitness industry platform, where we offer a
            comprehensive and personalized approach to fitness. Our platform
            connects you with certified personal trainer coach HASSAN MOHAMED
            who will create customized workout plans tailored to your goals and
            fitness level. Whether you are looking to lose weight, build muscle,
            or improve your overall health, our trainers are here to guide and
            motivate you every step of the way. Join us and experience the best
            personal training experience ever.
          </p>
        </div>
        <img ref={imageRef} src="image2-Photoroom.jpg" className="w-1/3 my-1" />
      </section>
      <section
        id="about"
        className="bg-black text-[#928c6b] flex flex-col    items-center justify-around h-[40vh]"
      >
        <h2 className="text-3xl font-bold">MORE ABOUT COACH HASSAN MOHAMED</h2>
        <div className="bg-black text-white py-12 px-6">
          <div className=" mx-auto flex flex-wrap text-center h-full">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold text-[#928c6b]">
                    {stat.value}
                  </p>
                  <p className="text-lg font-semibold mt-2">{stat.title}</p>
                  <p className="text-sm mt-1">{stat.description}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="border-l border-[#928c6b] h-full mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
