export default function Button({
  children,
  onclick,
  disabled,
  icon,
  className,
}) {
  const baseClasses =
    "text-white rounded text-sm flex items-center transition duration-200 hover:bg-[#2a3e5d] ";
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
