import ImageSlider from "../components/ImageSlider";
import portImg1 from "../assets/port/1.jpg";
import portImg2 from "../assets/port/2.jpg";
import portImg3 from "../assets/port/3.jpg";
import portImg4 from "../assets/port/4.jpg";

const Portfolio = () => {
  const slides = [portImg1, portImg2, portImg3, portImg4];
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
