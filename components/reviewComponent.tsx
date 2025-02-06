import Image from 'next/image';
import React from 'react';

interface ReviewProps {

    imageUrl: string;
}

const ReviewComponent: React.FC<ReviewProps> = ({ imageUrl }) => {

    return (
        <div  className="flex m-auto flex-col items-center w-[97%] p-1  bg-black rounded-lg h-[55vh]"
            style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
            >
            
            <div className="relative w-full h-full">
              <Image
                src={imageUrl}
                alt={imageUrl}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
      
    );
};

export default ReviewComponent;