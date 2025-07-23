import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(interval); // Stop when the full text is displayed

                setTimeout(() => {
                    onComplete(); // Call the onComplete callback after the text is fully displayed
                }, 1000); // Adjust the delay before calling onComplete if needed
            }
        }, 100); // Adjust for timing of character display
        // Cleanup function to clear the interval when the component unmounts

        return () => clearInterval(interval); // Cleanup on unmount
    }, [onComplete]);

    return (
        <div className="loading-screen fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    );
}