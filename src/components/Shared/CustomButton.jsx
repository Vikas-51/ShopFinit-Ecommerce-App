import React from "react";


const colorStyles = {
  primary: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    hoverBg: "#0b5ed7",
  },
  secondary: {
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    hoverBg: "#5c636a",
  },
  success: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    hoverBg: "#218838",
  },
  danger: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    hoverBg: "#bb2d3b",
  },
  light: {
    backgroundColor: "#f8f9fa",
    color: "#000",
    border: "1px solid #ddd",
    hoverBg: "#e2e6ea",
  },
};

const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  style = {},
}) => {
  const variantStyles = colorStyles[variant] || colorStyles["primary"];

  return (
    <button
      onClick={onClick}
      className={`custom-btn ${className}`}
      style={{
        backgroundColor: variantStyles.backgroundColor,
        color: variantStyles.color,
        border: variantStyles.border,
        padding: "10px 24px",
        borderRadius: "30px",
        fontWeight: "500",
        fontSize: "1rem",
        transition: "all 0.3s ease-in-out",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = variantStyles.hoverBg;
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = variantStyles.backgroundColor;
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
