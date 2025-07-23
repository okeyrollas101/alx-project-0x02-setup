import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ onClick, children, className, shape = 'rounded-lg', size = 'medium' }) => {

    const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const baseClasses = 'font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-75';
  const colorClasses = 'bg-blue-500 hover:bg-blue-600 text-white'; // Default button color

    return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${sizeClasses[size || "medium"]} ${shape} ${className || ''}`}
    >
      {children}
    </button>
  );
}

export default Button;