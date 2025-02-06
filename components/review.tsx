import React, { useEffect } from "react";
import Slider from "react-slick";
import ReviewComponent from "./reviewComponent";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchReviews } from "@/redux/store/reviewsSlice";


interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Custom arrow component
const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

// Slider settings with arrows
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow className="slick-next"         style={{ right: "10px", top: "50%", color: "white" }}
/>,
    prevArrow: <CustomArrow className="slick-prev"         style={{ right: "10px", top: "50%", color: "white" }}
/>,
    responsive: [
        {
          breakpoint: 1280, // xl: >=1280px
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024, // lg: >=1024px
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // md: >=768px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640, // sm: >=640px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        }
      ],
};

// Review Data


// Get reviews from reviewsSlice
// Reviews Component
const ReviewsComponent: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ref }) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  return (
    <div ref={ref} id={"reviews"} className="w-full bg-transparent p-9 ">
      <h2 className=" text-2xl w-[200px] lg:w-[500px] mx-auto md:text-4xl lg:text-5xl  rounded-md bg-black p-4 text-center font-bold text-[#928c6b] mb-8">
         Clients Reviews
        </h2>

      <Slider {...sliderSettings} className="w-full m-auto h-auto">
        {reviews.map((review) => (
          <ReviewComponent key={review.id} imageUrl={review.reviewImgUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsComponent;
