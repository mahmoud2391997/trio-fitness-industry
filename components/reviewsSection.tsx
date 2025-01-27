import React from 'react';

interface Review {
    id: number;
    name: string;
    date: string;
    content: string;
}

const reviews: Review[] = [
    { id: 1, name: 'John Doe', date: '2023-10-01', content: 'Great service and friendly staff!' },
    { id: 2, name: 'Jane Smith', date: '2023-10-02', content: 'Loved the atmosphere and the trainers are very professional.' },
    { id: 3, name: 'Sam Wilson', date: '2023-10-03', content: 'A fantastic place to work out and stay fit.' },
];

const ReviewsSection: React.FC = () => {
    return (
        <section className='bg-black text-white p-4'>
            <h2>Customer Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.name}</h3>
                        <p>{review.date}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ReviewsSection;