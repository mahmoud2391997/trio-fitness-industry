import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Increase progress smoothly
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed px-10 inset-0 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500">
          <img src="/image.png" />
          <img src="/name.png" />
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#928c6b] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
