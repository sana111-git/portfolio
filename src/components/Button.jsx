

import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  asChild = false,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild && children?.type === Link) {
    return (
      <Link {...children.props} className={classes}>
        {children.props.children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
