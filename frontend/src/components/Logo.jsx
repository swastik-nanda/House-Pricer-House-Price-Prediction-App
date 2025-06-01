import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ size = "md", variant = "dark", withText = true }) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const colorClasses = {
    light: "text-white",
    dark: "text-primary",
  };

  return (
    <Link to="/" className={`flex items-center ${colorClasses[variant]}`}>
      <div
        className="p-1.5 text-black rounded-lg mr-2"
        style={{ backgroundColor: "rgb(12, 182, 167)" }}
      >
        <Home className={sizeClasses[size]} />
      </div>
      {withText && (
        <span className={`font-heading font-bold ${textSizeClasses[size]}`}>
          <span style={{ color: "rgb(12, 182, 167)" }}>Home</span>
          <span style={{ color: "rgb(98 70 234)" }}>Pricer</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
