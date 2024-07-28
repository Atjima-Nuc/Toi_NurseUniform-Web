const bgMap = {
  darkBlue: "bg-sky-900 hover:bg-sky-700",
  lightBlue: "bg-sky-600 hover:bg-sky-700",
};

const colorMap = {
  white: "text-white",
};

const widthMap = {
  full: "w-full",
  registB: "w-[100px]",
  save: "w-[20%]",
};

export default function Button({
  children,
  bg = "darkBlue",
  color = "white",
  width = "w-full",
  onClick,
}) {
  return (
    <button
      className={`flex ${widthMap[width]} justify-center rounded-md ${bgMap[bg]} px-3 py-1.5 text-sm font-semibold leading-6 ${colorMap[color]} shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
