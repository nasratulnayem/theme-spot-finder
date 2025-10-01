import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Countdown and redirect
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [location.pathname, navigate]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gpl-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gpl-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 text-gpl-primary/20 animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-5a1 1 0 100 2 1 1 0 000-2z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 text-gpl-primary/20 animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }}>
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl animate-fade-in">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gpl-primary via-gpl-accent to-gpl-primary animate-pulse mb-4">
            404
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gpl-primary to-transparent mx-auto mb-6"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Oops! Page Not Found
        </h2>
        
        <p className="text-lg text-gray-400 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="bg-gpl-dark/50 backdrop-blur-sm border border-gpl-primary/20 rounded-xl p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-white mb-2">
            Redirecting you to home in <span className="text-gpl-primary font-bold text-2xl">{countdown}</span> seconds...
          </p>
          <p className="text-gray-400 text-sm">
            Please wait while we take you back to safety
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a 
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-gpl-primary to-gpl-accent text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105"
          >
            Go Home Now
          </a>
          
          <a 
            href="/request-quote"
            className="px-8 py-3 bg-transparent border-2 border-gpl-primary text-gpl-primary font-semibold rounded-lg hover:bg-gpl-primary hover:text-black transition-all duration-300 hover:scale-105"
          >
            Request a Quote
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8 animate-fade-in" style={{ animationDelay: "1s" }}>
          Have a question? Feel free to{" "}
          <a href="/request-quote" className="text-gpl-primary hover:text-gpl-accent transition-colors underline">
            submit it here
          </a>
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
