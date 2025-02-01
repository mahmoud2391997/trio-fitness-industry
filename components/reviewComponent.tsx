import React from 'react';

interface ReviewProps {

    imageUrl: string;
}

const ReviewComponent: React.FC<ReviewProps> = ({ imageUrl }) => {
    return (
        <div className="flex my-auto  justify-center h-[90vh] mx-auto items-center p-3 rounded-lg w-full sm:w-[90%]" style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}>   
            <img src={imageUrl} alt={`profile`} />
        </div>
    );
};

export default ReviewComponent;