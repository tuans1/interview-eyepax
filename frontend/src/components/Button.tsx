import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant;
    fullWidth?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  ghost: "btn--ghost",
};

export function Button({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variantClass = variantClassMap[variant];
  const widthClass = fullWidth ? "btn--full" : "";
  const combinedClassName =
    `btn ${variantClass} ${widthClass} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
