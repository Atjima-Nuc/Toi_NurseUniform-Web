import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditShapeForm from "../features/shape/EditShapeForm";
import useShape from "../hooks/useShape";
import Button from "../components/Button";
import shapeApi from "../apis/shape";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function EditShapePage() {
  // const { shapeData, setIsShapeDataLoading, fetchShapeData } = useShape();
  const { userId } = useParams();
  const [index, setIndex] = useState();
  const [times, setTimes] = useState();
  const [shapeByUser, setShapeByUser] = useState([]);
  const [shapeByItem, setShapeByItem] = useState([]);

  useEffect(() => {
    const fetchShapeData = async () => {
      const result = await shapeApi.getShapeDataByUserId(+userId);

      setShapeByUser(result.data);
    };
    fetchShapeData();
  }, []);

  const handleClick = (id, data) => {
    console.log("data------", data);
    setIndex(id);
    setTimes(id);
    setShapeByItem(data);
  };
  console.log("shapeByItem==", shapeByItem);
  console.log("result", shapeByUser);

  return (
    <div className="flex justify-center gap-5">
      <div className=" w-[300px] pl-8 mt-14">
        <table>
          <tr className="bg-gray-200 rounded-t-xl">
            <td className="w-[60px] font-semibold text-center">ครั้งที่</td>
            <td className="w-[100px] font-semibold text-center">
              Created Date
            </td>

            <td className="w-[115px] font-semibold text-center">
              Show Your Shape Data
            </td>
          </tr>

          {shapeByUser?.map((el, i) => (
            <tr key={i} className=" border-freezingVapor border-b-2">
              <td className="text-center">{i + 1}</td>
              <td className="text-center">{el.createdAt.slice(0, 10)}</td>
              <td className="flex justify-center">
                <Button onClick={() => handleClick(i + 1, el)}>Click</Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="w-[75%] mt-6 mx-4">
        <EditShapeForm index={index} times={times} shapeByItem={shapeByItem} />
      </div>
    </div>
  );
}
