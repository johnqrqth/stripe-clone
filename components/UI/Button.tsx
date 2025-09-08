import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'transparent-dark' | 'transparent-light';
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, onClick, className = '' }) => {
  const baseClasses = "inline-flex items-center px-6 py-3 text-base font-medium rounded-full shadow-sm transition-all duration-300 ease-in-out";
  let variantClasses = "";

  switch (variant) {
    case 'primary':
      variantClasses = "text-white bg-[#0a2540] hover:bg-[#0c2e4a]";
      break;
    case 'transparent-dark':
      variantClasses = "text-white border border-white border-opacity-50 hover:bg-white hover:bg-opacity-20";
      break;
    case 'transparent-light':
      variantClasses = "text-[#0a2540] border border-[#0a2540] border-opacity-50";
      break;
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;