import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  error,
  fullWidth = true,
  className = "",
  ...props
}: InputProps) => {
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <div className={`${widthStyle} space-y-2`}>
      {label && (
        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-5 py-4 bg-surface-container-low border border-outline-variant/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-on-surface-variant/50 font-medium ${error ? "border-error focus:ring-error/10 focus:border-error" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-error ml-1 mt-1 font-bold">{error}</p>}
    </div>
  );
};
