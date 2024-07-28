import { useEffect } from "react";
import useUser from "../hooks/useUser";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import userApi from "../apis/user";
import { BinIcon } from "../components/Symbol";
import { useState } from "react";
import useOrder from "../hooks/useOrder";
import Modal from "../components/Modal";

import CreateShapeForm from "../features/shape/CreateShapeForm";

export default function AllCusPage() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const nonAdmin = user?.filter((el) => el.role !== "ADMIN");
  const { orders, updateOrderStatus } = useOrder();
  const [open, setOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(null);

  console.log(orders);
  // const [orderStatus, setOrderStatus] = useState({});

  // useEffect(() => {
  //   const initialStatus = nonAdmin.reduce((acc, el) => {
  //     acc[el.id] = "Pending"; // Default Status
  //     return acc;
  //   }, {});
  //   setOrderStatus(initialStatus);
  // }, [nonAdmin]);

  const handleClickEditShape = (id) => {
    navigate(`/admin/shape/${id}`);
  };

  const handleClickDeleteUser = async (id) => {
    try {
      await userApi.deleteUser(id);

      toast.success("User profile deleted successfully");

      const newAllUser = user?.filter((el) => {
        return el.id !== id;
      });

      setUser(newAllUser);
    } catch (err) {
      toast.error("Error deleting user profile");
    }
  };

  const handleChangeOrderStatus = (id, status) => {
    updateOrderStatus(id, status);
  };

  const handleClickCreateShape = (userId) => {
    setOpen(true);
    setSelectUser(userId);
  };

  return (
    <div className="mx-4 md:mx-10 mt-6 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Customer Data</h1>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className=" w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
                id
              </th>
              <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
                username
              </th>
              <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
                Create Shape
              </th>
              <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
                Edit Shape
              </th>

              <th className="w-1/5 py-4 px-6 text-center text-gray-600 font-bold uppercase">
                Delete User
              </th>
            </tr>
          </thead>
          <tbody>
            {nonAdmin?.map((el, id) => (
              <tr key={{ id }}>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  {el.id}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <div>{el.username}</div>
                  <div className="text-sm text-gray-500">
                    {el.firstName} {el.lastName}
                  </div>
                </td>
                {/* {el.firstName} {el.lastName} {el.phoneNo} */}
                <td className="py-4 px-6 border-b border-gray-200 ">
                  <div className="flex justify-center">
                    <Button onClick={() => handleClickCreateShape(el.id)}>
                      Create Shape
                    </Button>
                  </div>
                </td>
                <td className="py-4 px-6 border-b border-gray-200 ">
                  <div className=" flex justify-center">
                    <Button onClick={() => handleClickEditShape(el.id)}>
                      Edit Shape
                    </Button>
                  </div>
                </td>

                <td className="py-4 px-6 border-b border-gray-200">
                  <div className="flex justify-center">
                    <div
                      onClick={() => handleClickDeleteUser(el.id)}
                      className=" cursor-pointer w-[40px] h-[40px] hover:bg-red-300 flex items-center justify-center hover:rounded-full"
                      title="Delete User"
                    >
                      <BinIcon />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title="CREATE NEW BODY MEASUREMENT"
        open={open}
        onClose={() => setOpen(false)}
        width="w-full"
      >
        <CreateShapeForm
          userId={selectUser}
          closemodal={() => setOpen(false)}
        />
      </Modal>
    </div>
  );
}
