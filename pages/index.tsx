import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Import Image from next/image
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageSection from "@/components/PackageSection";
import ServicesCard from "@/components/servicesCard";
import LimitedOffersSection from "@/components/limitedOffersSection";

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

const transformations = [
  {
    image: "/transform2.jpg",
    description: "6-Week transformation",
  },
  {
    image: "/tranform3.jpg",
    description: "10-Week transformation",
  },
  {
    image: "/transform1.jpg",
    description: "From 69kg to 96 kg transformation",
  },
  {
    image: "/tranform4.jpg",
    description: "6-Week transformation",
  },
  {
    image: "/tranform5.jpg",
    description: "6-Week transformation",
  },
  {
    image: "/transform6.jpg",
    description: "1-month transformation",
  },
];

interface TransformationCardProps {
  image: string;
  description: string;
}

const TransformationCard: React.FC<TransformationCardProps> = ({
  image,
  description,
}) => (
  <div className="flex m-auto flex-col items-center w-[97%] p-1 pb-0 bg-black rounded-lg h-[55vh]"         style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}
>
    <div className="relative w-full h-[90%] ">
      <Image
        src={image}
        alt={description}
        layout="fill"
        objectFit="contain"
        className="rounded-lg px-5"
      />
    </div>
    <p className="text-center my-3">{description}</p>
  </div>
);

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", zIndex: 1 }}
    onClick={onClick}
  />
);

const Home : React.FC =()=> {
  const imageRef = useRef<HTMLImageElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [bgImage, setBgImage] = useState("/aboutUs");

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

    const currentImageRef = imageRef.current; // Copy imageRef.current to a variable

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutUsRef.current) {
        const rect = aboutUsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setBgImage("/tranformBg.jpg");
          
        } else {
          setBgImage("/aboutUs.png");
        }
       
      }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow className="slick-next" style={{ right: "10px", top: "50%" }} />,
    prevArrow: <CustomArrow className="slick-prev" style={{ left: "10px", top: "50%" }} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint:768 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} relative `} >
      <div
        className="w-full h-screen sticky top-0 z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
        id="background-image"
      ></div>
      <main className="mt-[15vh] absolute top-0 w-full h-[85vh] overflow-hidden row-start-2">
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
            className="xl:text-6xl text-center h-[65vh] lg:text-[62px] md:text-6xl  text-[34px] pt-[15vh] sm:pt-0  w-5/6 sm:text-5xl font-semibold my-auto mx-0 sm:m-auto sm:w-4/6 "
            style={{
              fontFamily: '"Bebas Neue", Helvetica, Arial, sans-serif',
              letterSpacing: "0.1em",
              lineHeight: "2.1em",
            }}
          >
            THE BEST PERSONAL TRAINING EXPERIENCE EVER
          </h1>
          <style jsx>{`
            @media (max-width: 640px) {
              h1 {
                line-height: 3em;
              }
            }
          `}</style>
        </div>
      </main>
      <section
        id="services"
        className="bg-black relative text-[#928c6b] max-w-full flex h-auto p-[5%] flex-col items-center justify-between   px-2  sm:p-8"
        style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}

      >
       
         <div className=" m-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 h-auto text-center">
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
            </section>
            <section
        ref={videoRef}
        id="about"
        className="bg-transparent no-scroll text-white flex flex-col-reverse gap-10 md:flex-row items-center justify-around h-auto py-20"
      >
        <div     className="rounded-xl h-full flex flex-col items-center min-h-[35vh] w-3/4 md:w-2/4  justify-evenly p-5"    style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}
        >

          <h2 className=" text-xl md:text-3xl my-5 text-center md:text-left font-bold text-[#928c6b]">
            ABOUT US
          </h2>
          <p className=" text-md md:text-xl text-center ">
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
        id="about"
        ref={aboutUsRef}
        className="bg-black lg text-white flex flex-col py-4 z-20 overflow-y-hidden items-center justify-around h-auto"
        style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}
      >
        <img src="/image.png" className="w-36 lg:w-48" />
        <h3 className="text-base mt-4 mb-2">Certified Personal Trainer </h3>
        <h2 className="text-3xl text-center font-bold mb-4">HASSAN MOHAMED</h2>
        <h4 className="text-xl text-center mb-3 w-auto">
          Expert Body Building Coach And Nutritionist
          <br /> With Certificate Earned From
          <br />
          <a
            target="_blank"
            href="https://www.nasm.org/"
            className="flex justify-center items-center"
          >
            <svg
              width="117"
              height="48"
              viewBox="0 0 117 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2211_147)">
                <path
                  d="M116.568 23.7958H115.852L115.517 24.8341L115.155 23.7958H114.415L114.305 25.4675H114.835L114.899 24.4748L115.252 25.4675H115.748L116.062 24.4901L116.153 25.4675H116.72L116.568 23.7958Z"
                  fill="#123257"
                />
                <path
                  d="M114.174 23.7958V24.2495H113.727V25.4644H113.157V24.2495H112.707V23.7958H114.174Z"
                  fill="#123257"
                />
                <path
                  d="M29.5598 23.7928L27.1209 46.8822H20.3886L11.5188 33.4116L10.0999 46.8822H3.13928L5.64523 23.7928H12.9347L21.3356 36.694L22.6997 23.7928H29.5598Z"
                  fill="#123257"
                />
                <path
                  d="M49.1537 23.7593H40.4118L28.4728 46.8822H36.0606L38.1586 42.461H47.616L48.7913 46.8822H56.3762L49.1537 23.7593ZM40.3966 37.5161L44.3062 29.2036L46.4407 37.5161H40.3966Z"
                  fill="#123257"
                />
                <path
                  d="M67.5449 47.345C64.9933 47.345 62.8649 47.0436 61.1628 46.4376C59.4576 45.8317 58.1666 44.9426 57.2866 43.7673C56.4067 42.5919 55.9895 41.1669 56.0321 39.4953H63.1572C63.1785 40.1347 63.3764 40.6767 63.7509 41.1274C64.1255 41.578 64.6583 41.9251 65.3495 42.1657C66.0407 42.4093 66.8506 42.528 67.7732 42.528C68.367 42.528 68.8938 42.4671 69.3566 42.3453C69.8194 42.2235 70.1848 42.0317 70.4619 41.7668C70.7359 41.5019 70.8973 41.1517 70.9399 40.7102C70.9826 40.1834 70.8242 39.7602 70.4619 39.4405C70.0995 39.1208 69.5758 38.8528 68.8938 38.6336C68.2117 38.4144 67.4596 38.2164 66.6345 38.0398C65.8093 37.8632 64.9476 37.6592 64.0463 37.4309C63.145 37.1994 62.2803 36.9254 61.4581 36.6057C60.633 36.286 59.9144 35.8475 59.2963 35.2872C58.6812 34.727 58.2031 34.0328 57.8621 33.2106C57.5211 32.3855 57.4176 31.3807 57.5485 30.1931C57.6794 28.6981 58.1849 27.4497 59.0648 26.4479C59.9448 25.4462 61.1323 24.688 62.6274 24.1734C64.1224 23.6558 65.8824 23.3969 67.9042 23.3969C70.2122 23.3969 72.1853 23.6832 73.8265 24.2556C75.4646 24.828 76.7222 25.6745 77.6022 26.795C78.4821 27.9156 78.8993 29.2797 78.8567 30.8843H72.0939C72.0056 30.2906 71.7803 29.7912 71.418 29.3832C71.0556 28.9752 70.5654 28.6677 69.9503 28.4606C69.3353 28.2505 68.641 28.147 67.8707 28.147C67.2982 28.147 66.7837 28.2231 66.3208 28.3784C65.858 28.5337 65.4957 28.7529 65.2308 29.0391C64.9659 29.3253 64.8014 29.6664 64.7375 30.0622C64.6918 30.6133 64.8593 31.0579 65.2308 31.3989C65.6053 31.7399 66.126 32.014 66.7989 32.2241C67.4688 32.4342 68.2269 32.626 69.0734 32.8026C69.9199 32.9792 70.7877 33.171 71.6798 33.3811C72.569 33.5912 73.4398 33.8653 74.2863 34.2063C75.1328 34.5473 75.8635 34.9858 76.4786 35.5247C77.0937 36.0637 77.5656 36.7336 77.8975 37.5374C78.2264 38.3413 78.336 39.3248 78.2264 40.491C78.0711 42.053 77.5626 43.3349 76.6917 44.3336C75.8239 45.3354 74.6151 46.0875 73.0622 46.5929C71.5124 47.0984 69.6702 47.3511 67.5357 47.3511L67.5449 47.345Z"
                  fill="#123257"
                />
                <path
                  d="M111.184 23.7928L110.59 46.8822H103.828L104.065 31.5725L97.6253 46.8822H91.4594L87.6838 31.7065L85.123 46.8822H78.6587L82.5866 23.7928H91.9527L95.6279 38.7402L101.785 23.7928H111.184Z"
                  fill="#123257"
                />
                <path
                  d="M0 23.7684C0 23.7684 51.212 -4.53081 117 14.5028C117 14.5028 71.147 -6.52521 14.7616 11.3148L0 23.7684Z"
                  fill="#123257"
                />
                <path
                  d="M18.3394 8.2882C18.3394 8.2882 47.5551 -1.90001 87.0078 4.90228C87.0078 4.90228 55.4079 -3.56861 26.0856 1.75387L18.3394 8.2882Z"
                  fill="#123257"
                />
              </g>
              <defs>
                <clipPath id="clip0_2211_147">
                  <rect width="117" height="47.345" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </h4>
        <Image
          ref={imageRef}
          src="/certficate.png"
          alt="Certificate"
          width={500}
          height={300}
          className="min-w-[240px] w-1/3 my-1"
        />
       
      </section>

        
      
     
        
      <section
        id="transformations"
        className="bg-transparent overflow-x-hidden px-[2px] sm:px-10 text-white flex flex-col items-center justify-around h-auto m-auto py-7"
        ref={aboutUsRef}
      >
        <h2 className=" text-2xl sm:text-4xl rounded-md bg-black p-4 text-center font-bold text-[#928c6b] mb-8">TRANSFORMATIONS</h2>
        <Slider {...sliderSettings} className="w-full">
          {transformations.map((transformation, index) => (
        <TransformationCard
          key={index}
          image={transformation.image}
          description={transformation.description}
        />
          ))}
        </Slider>
        <div className="w-40 rounded-lg h-4 bg-white mt-[7px]"></div>
      </section>
     

      {/* Add Transformations Section */}
     
      <LimitedOffersSection/>
      <PackageSection />

    </div>
  );
}
export default Home;