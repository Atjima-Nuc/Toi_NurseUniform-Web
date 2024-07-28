import ImageSlider from "../components/ImageSlider";

const Gallery = () => {
  const slides = [
    { url: "src/assets/port/1.jpg" },
    { url: "src/assets/port/2.jpg" },
    { url: "src/assets/port/3.jpg" },
    { url: "src/assets/port/4.jpg" },
  ];
  const containerStyles = {
    width: "200px",
    height: "300px",
    margin: "0 auto",
  };
  return (
    <div className="flex flex-col items-center gap-3 p-3 bg-neutral-200 ">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Gallery;
