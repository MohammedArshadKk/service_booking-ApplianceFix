import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className = "", onClick }: CardProps) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ${onClick ? "cursor-pointer active:scale-[0.98]" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
