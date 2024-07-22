export default function Button({
  children,
  onclick,
  disabled,
  icon,
  className,
}) {
  const baseClasses = "px-4 py-3  text-white rounded  text-sm";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : ""
      } ${className}`}
    >
      {children}
      {icon ? icon : ""}
    </button>
  );
}
