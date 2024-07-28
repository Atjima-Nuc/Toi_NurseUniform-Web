import ImageSlider from "../components/ImageSlider";
// import portImg1 from "../../public/port/1.jpg";
// import portImg2 from "../../public/port/2.jpg";
// import portImg3 from "../../public/port/3.jpg";
// import portImg4 from "../../public/port/4.jpg";

const Portfolio = () => {
  const slides = [
    "../../public/port/1.jpg",
    "../../public/port/2.jpg",
    "../../public/port/3.jpg",
    "../../public/port/4.jpg",
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
