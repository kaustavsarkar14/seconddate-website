import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    // 1. The Play Store Link
    const link = "https://play.google.com/store/apps/details?id=com.bongdate.bongDate";
    
    // 2. Redirect immediately
    // .replace() is better than .href because it prevents the 'Back' button 
    // from getting stuck in a loop.
    window.location.replace(link);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center space-y-4">
        {/* Optional: Add your App Logo here */}
        <div className="animate-pulse text-xl font-semibold text-pink-500">
          Opening Play Store...
        </div>
        
        <p className="text-sm text-gray-400">
          If it doesn't open automatically,{" "}
          <a 
            href="https://play.google.com/store/apps/details?id=com.bongdate.bongDate"
            className="text-white underline decoration-pink-500 underline-offset-4"
          >
            click here
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Download;