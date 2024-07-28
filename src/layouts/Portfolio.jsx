import ImageSlider from "../components/ImageSlider";

const Portfolio = () => {
  const slides = [
    "../../port/port1.jpg",
    "../../port/port2.jpg",
    "../../port/port3.jpg",
    "../../port/port4.jpg",
  ];
  const containerStyles = {
    width: "600px",
    height: "400px",
    margin: "0 auto",
  };
  return (
    <div className="flex flex-col items-center gap-3 p-3 bg-neutral-200 h-[32rem]">
      <h1 className="font-bold text-3xl">Our Portfolio</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Portfolio;
