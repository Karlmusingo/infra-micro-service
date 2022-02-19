import styled from "styled-components";

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  label: string;
  size: number;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

export const Button = ({
  backgroundColor = "#0070f3",
  color = "#ffffff",
  label,
  size = 16,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor,
        color,
        fontSize: size,
        position: "relative",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        border: "none",
        outline: "none",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        padding: "7.5px",
      }}
      {...props}
    >
      {label}
    </button>
  );
};
