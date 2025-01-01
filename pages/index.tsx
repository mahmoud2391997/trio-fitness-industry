import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect, useRef } from "react";
import {
  FaAppleAlt,
  FaDumbbell,
  FaBook,
  FaHeartbeat,
  FaRunning,
  FaWeight,
  FaClipboardList,
  FaUserShield,
} from "react-icons/fa"; // Import icons
import Slider from "react-slick"; // Import Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageSection from "@/components/PackageSection";
import Image from 'next/image';

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

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="flex flex-col w-5/6 items-center min-h-[400px] md:min-h-[240px] sm:min-h-[270px] justify-around mx-auto p-4 bg-gray-100 rounded-lg shadow-lg m-10">
    <Icon className="text-6xl mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} relative `}>
    <div
      className="w-full h-screen sticky top-0 z-[-1]"
      style={{
        backgroundImage:
          "url('https://miamiirongym.com/wp-content/uploads/2013/08/composition_1.jpg')",
        backgroundSize: "cover",
      }}
    ></div>
          <main className="absolute top-0 w-full h-[100vh] overflow-hidden row-start-2">
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
            className="lg:text-7xl md:text-6xl text-3xl sm:text-5xl font-semibold  w-4/6"
            style={{
              fontFamily: '"Bebas Neue", Helvetica, Arial, sans-serif',
              letterSpacing: "0.1em",
              lineHeight: "2em",
            }}
          >
            THE BEST PERSONAL TRAINIG EXPERIENCE EVER
          </h1>
        </div>
      </main>

      <section
        id="about"
        className="bg-black text-[#928c6b] flex flex-col py-4 z-20   items-center justify-around h-auto"
      >
        <h3 className="text-base mt-4 mb-2">Certified Personal Trainer </h3>
        <h2 className="text-3xl text-center font-bold mb-4">HASSAN MOHAMED</h2>
        <h4 className="text-xl text-center mb-3">
          Expert Body Building Coach And Nutritionist
          <br /> With Certificate Earned From{" "}
          <a
            target="_blank"
            href="https://www.nasm.org/"
            className=" underline"
          >
            NASM
          </a>
        </h4>
        <Image
          ref={imageRef}
          src="certficate.png"
          alt="Certificate"
          width={500}
          height={300}
          className="min-w-[240px] w-1/3 my-1"
        />
        <div className="bg-black text-white py-12 px-6">
          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center h-full">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center border border-[#928c6b] p-4">
                  <p className="text-4xl font-bold text-[#928c6b]">
                    {stat.value}
                  </p>
                  <p className="text-lg font-semibold mt-2">{stat.title}</p>
                  <p className="text-sm mt-1">{stat.description}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="bg-transparent no-scroll text-white flex flex-col-reverse gap-10 md:flex-row items-center justify-around h-auto p-8"
      >
        <div className="flex flex-col space-y-4 items-center  justify-around w-full md:w-2/4  ">
          <h2 className="text-3xl text-center md:text-left font-bold">
            ABOUT US
          </h2>
          <p className="text-lg text-center ">
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
      </section>
      <section
        id="services"
        className="bg-black relative text-[#928c6b] max-w-full flex flex-col items-center justify-around h-auto  p-12"
      >
        <div className="sm:h-5 hidden sm:block h-10 absolute bottom-[22px]  bg-white w-[250px] m-auto rounded-xl"></div>
        <h2 className="text-3xl text-center font-bold mb-8">OUR SERVICES</h2>
        <Slider
          {...sliderSettings}
          className="w-full text-[#928c6b] h-full  bg-transparent"
        >
          <ServiceCard
            icon={FaAppleAlt}
            title="Follow-Up Nutrition Programs"
            description="Personalized nutrition plans to help you achieve your fitness goals."
          />
          <ServiceCard
            icon={FaDumbbell}
            title="Training Programs"
            description="Customized workout plans tailored to your needs and fitness level."
          />
          <ServiceCard
            icon={FaBook}
            title="Books and Ebooks"
            description="Access to a variety of fitness and nutrition books and ebooks."
          />
          <ServiceCard
            icon={FaHeartbeat}
            title="Track Client Medical History"
            description="Comprehensive tracking of your medical history to ensure safe and effective training."
          />
          <ServiceCard
            icon={FaRunning}
            title="Fat Loss"
            description="Effective programs designed to help you lose fat and maintain a healthy weight."
          />
          <ServiceCard
            icon={FaWeight}
            title="Building Muscles"
            description="Specialized training plans to help you build muscle mass and strength."
          />
          <ServiceCard
            icon={FaClipboardList}
            title="Workout Plans"
            description="Comprehensive workout plans tailored to your fitness goals."
          />
          <ServiceCard
            icon={FaUserShield}
            title="Private Gym Sessions"
            description="Exclusive private gym sessions for personalized training."
          />
        </Slider>
      </section>
      <PackageSection />
    </div>
  );
}
