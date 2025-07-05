import { useState, useEffect } from "react";

interface FlapComponentProps {
  num: number;
  targetLetter?: string | null;
}

function FlapComponent({ num, targetLetter = null }: FlapComponentProps) {
  const [currentChar, setCurrentChar] = useState(" ");
  const [isAnimating, setIsAnimating] = useState(false);
  const chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZ01248,.";

  useEffect(() => {
    if (targetLetter === null) {
      setCurrentChar(" ");
      return;
    }
    
    setIsAnimating(true);
    
    let startChar = chars.indexOf(currentChar);
    if (startChar === -1) startChar = 0;
    
    const targetIndex = chars.indexOf(targetLetter);
    if (targetIndex === -1) {
      setCurrentChar(targetLetter);
      setIsAnimating(false);
      return;
    }
    
    let currentIndex = startChar;
    
    // Animate through characters
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % chars.length;
      setCurrentChar(chars[currentIndex]);
      
      // Stop when we reach the target character
      if (chars[currentIndex] === targetLetter) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100 + Math.random() * 50); // Slightly randomize animation speed
    
    return () => clearInterval(interval);
  }, [targetLetter]);


    return (
        <div className="rounded-xs border-x-[.4px] border-x-neutral-700 bg-[#18181A] w-7 h-8 flex justify-center items-center">
            <h4 className="text-lg font-medium" id={`field_${num}`}>{currentChar}</h4>
        </div>
    )
}

export default FlapComponent