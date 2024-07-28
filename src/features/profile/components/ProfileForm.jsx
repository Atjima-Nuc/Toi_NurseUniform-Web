import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";
import validateEditProfile from "../../authentication/validators/validate-profile";
import userApi from "../../../apis/user";

export default function ProfileForm() {
  const { authUser, setAuthUser, isAuthUserLoading } = useAuth();

  const navigate = useNavigate();

  const initialInput = {
    username: authUser?.username || "",
    email: authUser?.email || "",
    firstName: authUser?.firstName || "",
    lastName: authUser?.lastName || "",
    phoneNo: authUser?.phoneNo || "",
    sex: authUser?.sex || "",
  };

  const initialInputError = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    sex: "",
  };

  const [edit, setEdit] = useState(initialInput);
  const [editError, setEditError] = useState(initialInputError);

  console.log("username", edit.username);
  console.log("username", initialInput.username);

  useEffect(() => {
    setEdit(initialInput);
  }, [authUser]);

  if (isAuthUserLoading) return <Spinner />;

  const handleEditInput = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateEditProfile(edit);
      if (error) {
        return setEditError(error);
      }
      setEditError(initialInputError);

      await userApi.editProfileUser(edit);
      navigate("/");
      toast.success("Your profile updated successfully.");
      setAuthUser(edit);
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "edit unsuccesfully"
            : "internal server error";
        return toast.error(message);
      }
    }
  };

  return (
    <div className=" px-20 py-8 ">
      <div className="text-2xl font-bold">
        {`Hi, ${initialInput.firstName} ${initialInput.lastName}`}
      </div>
      <form
        onSubmit={handleSubmitForm}
        className=" bg-neutral-200 p-8 m-8 rounded-lg h-[40rem] flex flex-col justify-between"
      >
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 font-bold text-xl">
            USERNAME :<div>{edit?.username}</div>
          </div>
          <div>
            <table className=" m-3 mx-10">
              <tr>
                <td className="font-semibold w-32 py-5">E-MAIL :</td>
                <td>
                  <Input
                    name="email"
                    value={edit.email}
                    onChange={handleEditInput}
                    error={editError.email}
                    width="w-[17rem]"
                  />
                </td>
              </tr>
              <tr>
                <td className=" font-semibold py-5">FIRSTNAME :</td>
                <td>
                  <Input
                    name="firstName"
                    value={edit.firstName}
                    onChange={handleEditInput}
                    error={editError.firstName}
                    width="w-[17rem]"
                  />
                </td>

                <td className="font-semibold w-52 text-right pr-8">
                  LASTNAME :
                </td>
                <td>
                  <Input
                    name="lastName"
                    value={edit.lastName}
                    onChange={handleEditInput}
                    error={editError.lastName}
                    width="w-[17rem]"
                  />
                </td>
              </tr>
              <tr>
                <td className="flex items-center py-5 font-semibold">
                  PHONE NO. :
                </td>
                <td>
                  <Input
                    name="phoneNo"
                    value={edit.phoneNo}
                    onChange={handleEditInput}
                    error={editError.phoneNo}
                    width="w-[17rem]"
                  />
                </td>
              </tr>
              <tr>
                <td className="flex items-center py-5 font-semibold">SEX :</td>
                <td>{edit.sex}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex justify-end pr-12 pb-4">
          <Button type="submit" width="w-[17rem]">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
