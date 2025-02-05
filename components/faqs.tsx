import React, { useState } from 'react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle answer visibility
    };

    const faqData = [
        {
            question: "What types of training do you offer?",
            answer: "I offer personalized training programs for:\n- Weight Loss\n- Muscle Building & Strength Training\n- Sports-Specific Training\n- Flexibility & Mobility\n- Functional Training\n- Post-Rehabilitation\nEach program is tailored to your individual goals and fitness level.",
        },
        {
            question: "How do I get started with personal training?",
            answer: "Getting started is simple! Just reach out to me through the contact form or schedule a free consultation. During the consultation, we'll discuss your goals, fitness history, and create a personalized training plan.",
        },
        {
            question: "What is the cost of personal training?",
            answer: "The cost depends on the type of package and frequency of sessions you choose. Please contact me for detailed pricing based on your specific needs and goals.",
        },
        {
            question: "Can I train with you remotely?",
            answer: "Yes! I offer virtual personal training sessions via video calls. You can train from the comfort of your own home while receiving real-time guidance and feedback.",
        },
        {
            question: "What do I need to bring to my training sessions?",
            answer: "You should bring comfortable workout clothes, a water bottle, and a towel. If you’re training at the gym, I’ll provide all the necessary equipment. For remote training, make sure you have a stable internet connection and a clear space for movement.",
        },
        {
            question: "Do I need to be experienced to train with you?",
            answer: "No experience is required! I work with clients of all fitness levels, from beginners to athletes. Every program is tailored to meet your needs and gradually progresses at a pace you're comfortable with.",
        },
    ];

    return (
        <section className="py-8 px-4 w-full rounded-lg shadow-lg  mx-auto"         style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
>
            <h2 className="text-3xl font-semibold text-center text-[#928c6b]  mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl m-auto">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md shadow-gray-400">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                            <span className="text-lg text-gray-600">{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-3 text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
