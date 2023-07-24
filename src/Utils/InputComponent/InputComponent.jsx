function InputComponent({
  type,
  name,
  placeholder,
  onChange,
  className,
  value,
}) {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        required
      />
    </>
  );
}

export default InputComponent;
