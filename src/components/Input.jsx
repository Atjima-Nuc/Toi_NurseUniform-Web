export default function Input({
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  name,
  id,
  width = "w-full",
  ring = "ring-1",
  check,
  textPosition = "text-left",
  padding = "px-3",
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`block ${width} rounded-md border-0 ${padding} py-1.5 shadow-sm ${ring} ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 ${textPosition} ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-sky-700"
        }`}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        defaultChecked={check}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </>
  );
}
