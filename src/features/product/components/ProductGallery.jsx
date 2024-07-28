import { useState } from "react";
import shirtImg1 from "../../../assets/shirt/shirt_b-b-b1.jpg";
import shirtImg2 from "../../../assets/shirt/shirt_b-b-b3.jpg";
import shirtImg3 from "../../../assets/shirt/shirt_b-b-b4.jpg";
import trouserImg1 from "../../../assets/trouser/trouser1.jpg";
import trouserImg2 from "../../../assets/trouser/trouser3.jpg";
import trouserImg3 from "../../../assets/trouser/trouser4.jpg";

export default function ProductGallery() {
  const [currentImg, setCurrentImg] = useState(0);
  const productImg = [
    shirtImg1,
    shirtImg2,
    shirtImg3,
    trouserImg1,
    trouserImg2,
    trouserImg3,
  ];
  return (
    <div className="flex">
      <img
        src={productImg[currentImg]}
        width={600}
        height={600}
        alt="productImg"
        className="rounded-md"
      />
      <div className="flex flex-col">
        {productImg.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            width={100}
            height={100}
            alt="productImg"
            onMouseOver={() => setCurrentImg(index)}
            className="rounded-md cursor-pointer  hover:border-2 hover:border-gray-300 hover:ring-1 hover:ring-gray-200"
          />
        ))}
      </div>
    </div>
  );
}
