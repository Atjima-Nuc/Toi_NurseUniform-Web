import {
  DiagonalDualArrow,
  DownArrow,
  HorizonDualArrow,
  HorizonDualArrow2,
  VerticalDualArrow,
} from "../../components/Arrow";
import useShape from "../../hooks/useShape";
import "../../css/shape.css";

// import Spinner from "../components/Spinner";

export default function ShapeForm({ index, times }) {
  const { shapeData, setIsShapeDataLoading } = useShape();

  // if (setIsShapeDataLoading) return <Spinner />;

  const result = shapeData.filter((el) => el.id === index);
  console.log("shapeData", shapeData);

  return (
    <div className="flex justify-evenly">
      <div className="relative flex">
        <img
          src="../../src/assets/body_figure_front.jpg"
          className=" h-[700px] w-auto"
        />
        <button
          className="absolute top-[127px] right-[60px] "
          id="neckToWaistArrow"
        >
          <VerticalDualArrow />
        </button>
        <button
          className="absolute top-[139px] right-[25px] "
          id="chestWidthArrow"
        >
          <HorizonDualArrow />
        </button>
        <button
          className="absolute top-[171px] right-[45px] "
          id="bustSeparationArrow"
        >
          <HorizonDualArrow2 />
        </button>
        <button
          className="absolute top-[125px] right-[45px] "
          id="bustHeightArrow"
        >
          <VerticalDualArrow />
        </button>
      </div>

      {result.map((el, index) => (
        <div key={{ index }} className="flex w-[50%]  mt-7 rounded-lg flex-col">
          <h2 className="font-semibold">YOUR BODY MEASUREMENT # {times}</h2>

          <div className="flex justify-around mt-7 bg-gray-200 rounded-lg w-full h-full">
            <table className="border-collapse h-[80%] flex flex-col gap-5 table-fixed mt-4 pl-3">
              <tr id="neckToWaist">
                <td className="pl-2 w-[105px]">ยาวหน้า</td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.neckToWaist}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr id="chestWidth">
                <td className="pl-2 w-[105px]">บ่าหน้า</td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.chestWidth}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr id="bustSeparation">
                <td className="pl-2 w-[105px]">อกห่าง </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.bustSeparation}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr id="bustHeight">
                <td className="pl-2 w-[105px]">อกสูง </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.bustHeight}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบอก </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.aroundBust}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบเอวต่ำ </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.hightHip}</td>
                <td className="pr-2 w-[39px]">inch</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบเอวสูง </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.aroundWaist}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>

              <tr>
                <td className="pl-2 w-[105px]">รอบสะโพก </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.aroundHip}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รักแร้ </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.armholdDepth}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>

              <tr>
                <td className="pl-2 w-[105px]"></td>
                <td className="w-[10px]"></td>
                <td className="w-[37px] px-2"></td>
                <td className="pr-2 w-[34px]"></td>
              </tr>
            </table>
            <table className="h-[80%] border-collapse flex flex-col gap-5 table-fixed w-[45%] mt-4 pr-3">
              <tr id="backLength">
                <td className="pl-2 w-[105px]">ยาวหลัง</td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.backLength}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr id="shoulderWidth">
                <td className="pl-2 w-[105px]">ไหล่กว้าง</td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.shoulderWidth}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr id="backWidth">
                <td className="pl-2 w-[105px]">บ่าหลัง </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.backWidth}</td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>

              <tr>
                <td className="pl-2 w-[105px]">กระโปรงยาว </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.skirtLength}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">แขนยาว </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.Arm}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบแขน</td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.wrist}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">เสื้อยาว </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.shirtLength}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">ต้นขา </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.thigh}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">เป้ากางเกง </td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.crothLength}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">กางเกงยาว</td>
                <td className="w-[10px]">:</td>
                <td className="w-[37px] px-2">{el.trousersLength}</td>
                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
            </table>
          </div>
        </div>
      ))}

      <div className="relative">
        <img
          src="../../src/assets/body_figure_back.jpg"
          className=" h-[700px] w-auto"
        ></img>
        <button
          className="absolute top-[112px] right-[65px]"
          id="backLengthArrow"
        >
          <VerticalDualArrow height="backLength" />
        </button>
        <button
          className="absolute top-[125px] right-[22px] "
          id="shoulderWidthArrow"
        >
          <HorizonDualArrow width="shoulderWidth" />
        </button>
        <button
          className="absolute top-[140px] right-[30px] "
          id="backWidthArrow"
        >
          <HorizonDualArrow />
        </button>
      </div>
    </div>
  );
}
