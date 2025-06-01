import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className = "",
  type = "text",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`${fullWidth ? "w-full" : ""} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
            {leftIcon}
          </div>
        )}

        <input
          type={inputType}
          className={`
            input-field
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon || isPassword ? "pr-10" : ""}
            ${error ? "border-error-500 focus:ring-error-500" : ""}
          `}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-700"
            onClick={handleTogglePassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {rightIcon && !isPassword && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500">
            {rightIcon}
          </div>
        )}
      </div>

      {(error || helperText) && (
        <p
          className={`mt-1 text-sm ${
            error ? "text-error-500" : "text-neutral-500"
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
