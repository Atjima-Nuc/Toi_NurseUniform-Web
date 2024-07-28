import React from "react";

import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useState } from "react";

import useShape from "../../hooks/useShape";
import shapeApi from "../../apis/shape";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function EditShapeForm({
  index,
  times,
  shapeByItem,
  onSuccess,
}) {
  // const { userId } = useParams();
  const { shapeData, setIsShapeDataLoading } = useShape();

  console.log("shapeByItem+++++", shapeByItem);

  const initialInput = {
    aroundBust: shapeByItem?.aroundBust || "0",
    aroundWaist: shapeByItem?.aroundWaist || "0",
    aroundHip: shapeByItem?.aroundHip || "0",
    shoulderWidth: shapeByItem?.shoulderWidth || "0",
    Arm: shapeByItem?.Arm || "0",
    wrist: shapeByItem?.wrist || "0",
    trousersLength: shapeByItem?.trousersLength || "0",
    skirtLength: shapeByItem?.skirtLength || "0",
    thigh: shapeByItem?.thigh || "0",
    armholdDepth: shapeByItem?.armholdDepth || "0",
    bustHeight: shapeByItem?.bustHeight || "0",
    backLength: shapeByItem?.backLength || "0",
    crothLength: shapeByItem?.crothLength || "0",
    chestWidth: shapeByItem?.chestWidth || "0",
    backWidth: shapeByItem?.backWidth || "0",
    bustSeparation: shapeByItem?.bustSeparation || "0",
    hightHip: shapeByItem?.hightHip || "0",
    shirtLength: shapeByItem?.shirtLength || "0",
    neckToWaist: shapeByItem?.neckToWaist || "0",
  };

  console.log("initialInput+++", initialInput);

  // const initialInputError = {
  //   aroundBust: "",
  //   aroundWaist: "",
  //   aroundHip: "",
  //   shoulderWidth: "",
  //   Arm: "",
  //   wrist: "",
  //   trousersLength: "",
  //   skirtLength: "",
  //   thigh: "",
  //   armholdDepth: "",
  //   bustHeight: "",
  //   backLength: "",
  //   crothLength: "",
  //   chestWidth: "",
  //   backWidth: "",
  //   bustSeparation: "",
  //   hightHip: "",
  //   shirtLength: "",
  //   neckToWaist: "",
  // };

  const [edit, setEdit] = useState(initialInput);
  console.log("edit+++", edit);
  // const[editError, setEditError] =useState(initialInputError)

  useEffect(() => {
    setEdit(initialInput);
  }, [shapeByItem]);

  const handleEditInput = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  console.log("edit", edit);

  // const handleSubmitForm = async (e) => {
  //   try {
  //     e.preventDefault()
  //     if(error){
  //       return setEditError(error)
  //     }
  //   } catch (err) {

  //   }
  // }

  // useEffect(() => {
  //   const fetchShapeData = async () => {
  //     const shapeByUser = await shapeApi.getShapeDataByUserId(+userId);

  //     setShapeByUser(shapeByUser.data);
  //   };
  //   fetchShapeData();
  // }, []);
  // console.log("shapeByUser", shapeByUser);

  // if (setIsShapeDataLoading) return <Spinner />;

  // const result = shapeByItem?.filter((el) => el.id !== index);
  // console.log("filterresult", result);
  console.log("shapeByItem", shapeByItem);
  // console.log("result", result);
  return (
    <form className="flex flex-col gap-8  mx-6 h-full ">
      <div>
        <h2 className="font-semibold text-xl">BODY MEASUREMENT # {times}</h2>
        <div className="w-full flex justify-center">
          <div className="flex w-[70%] mt-4 justify-center gap-10 bg-gray-200 rounded-xl h-[95%] py-6 ">
            <table className="border-collapse h-full flex flex-col gap-5 table-fixed ">
              <tr>
                <td className="pl-2 w-[105px]">ยาวหน้า</td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    onChange={handleEditInput}
                    value={edit.neckToWaist}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                    name="neckToWaist"
                  />
                </td>
                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">บ่าหน้า</td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.chestWidth}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">อกห่าง </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.bustSeparation}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">อกสูง </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.bustHeight}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบอก </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.aroundBust}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบเอวต่ำ </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.hightHip}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">inch</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบเอวสูง </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.aroundWaist}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>

              <tr>
                <td className="pl-2 w-[105px]">รอบสะโพก </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.aroundHip}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รักแร้ </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.armholdDepth}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>

              <tr>
                <td className="pl-2 w-[105px]"></td>
                <td className="w-[10px]"></td>
                <td className="w-[37px] px-2"></td>
                <td className="pr-2 w-[34px]"></td>
              </tr>
            </table>
            <table className="h-full border-collapse flex flex-col gap-5 table-fixed w-fit">
              <tr>
                <td className="pl-2 w-[105px]">ยาวหลัง</td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.backLength}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">ไหล่กว้าง</td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.shoulderWidth}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">บ่าหลัง </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.backWidth}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[34px]">cm.</td>
              </tr>

              <tr>
                <td className="pl-2 w-[105px]">กระโปรงยาว </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.skirtLength}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">แขนยาว </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.Arm}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">รอบแขน</td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.wrist}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">เสื้อยาว </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.shirtLength}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">ต้นขา </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.thigh}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">เป้ากางเกง </td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.crothLength}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
              <tr>
                <td className="pl-2 w-[105px]">กางเกงยาว</td>
                <td className="w-[10px]">:</td>
                <td>
                  <Input
                    value={edit.trousersLength}
                    width="w-[60px]"
                    textPosition="text-center"
                    padding="px-1.5"
                  />
                </td>

                <td className="pr-2 w-[39px]">cm.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-end w-[70%]">
          <Button type="submit" width="save">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
