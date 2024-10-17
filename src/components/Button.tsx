import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-6 py-3 rounded-md font-semibold transition-colors duration-300 ease-in-out';
  const variantClasses = {
    primary: 'bg-secondary text-white hover:bg-hover-primary',
    secondary: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;