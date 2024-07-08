export default function Input({ value, ...rest }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return <input value={value} onChange={handleChange} {...rest} />;
}
