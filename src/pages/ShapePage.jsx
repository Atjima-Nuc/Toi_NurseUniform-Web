import { useEffect, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ShapeForm from "../features/shape/ShapeForm";
import useShape from "../hooks/useShape";
import { useNavigate } from "react-router-dom";

export default function ShapePage() {
  const { shapeData, setIsShapeDataLoading, fetchShapeData } = useShape();
  const [index, setIndex] = useState();
  const [times, setTimes] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    fetchShapeData();
  }, []);

  const handleClick = (id, index) => {
    setIndex(id);
    setTimes(index);
    console.log("index", setIndex(id));
  };

  // if (setIsShapeDataLoading) return <Spinner />;
  // console.log("shapedata", shapeData[0].createdAt);

  return (
    <div className="flex justify-center">
      <div className=" w-[300px] pl-8 mt-14">
        <table>
          <tr className="bg-gray-200 rounded-t-xl">
            <td className="w-[60px] font-semibold text-center">ครั้งที่</td>
            <td className="w-[100x] font-semibold text-center">Created Date</td>

            <td className="w-[115px] font-semibold text-center">
              Show Your Shape Data
            </td>
          </tr>

          {shapeData.map((el, i) => (
            <tr key={i} className=" border-freezingVapor border-b-2">
              <td className="text-center">{i + 1}</td>
              <td className="text-center">
                {new Date(el.createdAt).toLocaleDateString("en-gb")}
              </td>
              <td className="flex justify-center">
                <Button onClick={() => handleClick(el.id, i + 1)}>Click</Button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="w-[75%] mt-4 ">
        <ShapeForm index={index} times={times} />
      </div>
    </div>
  );
}
