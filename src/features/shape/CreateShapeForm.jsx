import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import shapeApi from "../../apis/shape";
import { toast } from "react-toastify";

const initialInput = {
  aroundBust: "",
  aroundWaist: "",
  aroundHip: "",
  shoulderWidth: "",
  Arm: "",
  wrist: "",
  trousersLength: "",
  skirtLength: "",
  thigh: "",
  armholdDepth: "",
  bustHeight: "",
  backLength: "",
  crothLength: "",
  chestWidth: "",
  backWidth: "",
  bustSeparation: "",
  hightHip: "",
  shirtLength: "",
  neckToWaist: "",
};

const initialInputError = {
  aroundBust: "",
  aroundWaist: "",
  aroundHip: "",
  shoulderWidth: "",
  Arm: "",
  wrist: "",
  trousersLength: "",
  skirtLength: "",
  thigh: "",
  armholdDepth: "",
  bustHeight: "",
  backLength: "",
  crothLength: "",
  chestWidth: "",
  backWidth: "",
  bustSeparation: "",
  hightHip: "",
  shirtLength: "",
  neckToWaist: "",
};

export default function CreateShapeForm({ closemodal, userId }) {
  const [input, setInput] = useState({});
  // const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log("inpu", input);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      input.userId = userId;
      console.log("input-------", input);

      await shapeApi.postShapeDataByAdmin(input);
      closemodal();
      toast.success("creste success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
      <div className="flex w-full justify-between mt-7">
        <table className="border-collapse h-[80%] flex flex-col gap-5 table-fixed ">
          <tr>
            <td className="pl-2 w-[105px]">ยาวหน้า</td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                name="neckToWaist"
                value={input.neckToWaist}
                onChange={handleChangeInput}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                type="number"
              />
            </td>
            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">บ่าหน้า</td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.chestWidth}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="chestWidth"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">อกห่าง </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.bustSeparation}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="bustSeparation"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">อกสูง </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.bustHeight}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="bustHeight"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">รอบอก </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.aroundBust}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="aroundBust"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">รอบเอวต่ำ </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.hightHip}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="hightHip"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">inch</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">รอบเอวสูง </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.aroundWaist}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="aroundWaist"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>

          <tr>
            <td className="pl-2 w-[105px]">รอบสะโพก </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.aroundHip}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="aroundHip"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">รักแร้ </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.armholdDepth}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="armholdDepth"
                onChange={handleChangeInput}
                type="number"
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
        <table className="h-[80%] border-collapse flex flex-col gap-5 table-fixed w-[45%]">
          <tr>
            <td className="pl-2 w-[105px]">ยาวหลัง</td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.backLength}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="backLength"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">ไหล่กว้าง</td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.shoulderWidth}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="shoulderWidth"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">บ่าหลัง </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.backWidth}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="backWidth"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[34px]">cm.</td>
          </tr>

          <tr>
            <td className="pl-2 w-[105px]">กระโปรงยาว </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.skirtLength}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="skirtLength"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">แขนยาว </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.Arm}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="Arm"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">รอบแขน</td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.wrist}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="wrist"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">เสื้อยาว </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.shirtLength}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="shirtLength"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">ต้นขา </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.thigh}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="thigh"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">เป้ากางเกง </td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.crothLength}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="crothLength"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
          <tr>
            <td className="pl-2 w-[105px]">กางเกงยาว</td>
            <td className="w-[10px]">:</td>
            <td>
              <Input
                value={input.trousersLength}
                width="w-[60px]"
                textPosition="text-center"
                padding="px-1.5"
                name="trousersLength"
                onChange={handleChangeInput}
                type="number"
              />
            </td>

            <td className="pr-2 w-[39px]">cm.</td>
          </tr>
        </table>
      </div>
      <Button type="submit" width="w-[17rem]">
        Save
      </Button>
    </form>
  );
}
