export default function Input({ value, onChange, ...rest }) {
  return (
    <input
      value={value}
      onChange={(e) => {
        const { value } = e.target;
        onChange(value);
      }}
      {...rest}
    />
  );
}
