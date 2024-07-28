import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import useOrder from "../hooks/useOrder";
import { toast } from "react-toastify";

export default function AllOrderPage() {
  const { user } = useUser();
  const { orders, fetchOrders, updateOrders } = useOrder();

  const handleChangeOrderStatus = async (id, status) => {
    try {
      await updateOrders(id, status);
      toast.success("updated status successfully");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const statusClass = (status) => {
    switch (status) {
      case "PENDING":
        return "text-red-500";
      case "PROCESSING":
        return "text-yellow-800";
      case "FINISHED":
        return "text-green-600";
      default:
        return "text-red-500";
    }
  };

  return (
    <div className="mx-4 md:mx-10 mt-6 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Order Data</h1>
      <div className="shadow-lg rounded-lg overflow-hidden ">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className=" w-[12.5%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                Order id
              </th>
              <th className=" w-[12.5%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                User id
              </th>
              <th className="w-[15%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                User
              </th>
              <th className="w-[15%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                Create Date
              </th>
              <th className="w-[15%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                QTY
              </th>
              <th className="w-[15%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                Total
              </th>
              <th className="w-[15%] py-4 px-4 text-center text-gray-600 font-bold uppercase">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((el) => (
              <tr key={el.id}>
                <td className="py-4 px-2 border-b border-gray-200 text-center">
                  {el.id}
                </td>
                <td className="py-4 px-2 border-b border-gray-200 text-center">
                  <div>{el.shape.user.id}</div>
                </td>
                {/* {el.firstName} {el.lastName} {el.phoneNo} */}
                <td className="py-4 px-2 border-b border-gray-200">
                  {el.shape.user.username}
                  <div className="text-sm text-gray-500">
                    {el.shape.user.firstName}&nbsp;{el.shape.user.lastName}
                  </div>
                </td>
                <td className="py-4 px-2 border-b border-gray-200 text-center">
                  {new Date(el.createdAt).toLocaleDateString("en-gb")}
                </td>
                <td className="py-4 px-2 border-b border-gray-200 text-center">
                  {el.order_item?.reduce((acc, i) => {
                    return acc + i.quantity;
                  }, 0)}
                </td>
                <td className="py-4 px-2 border-b border-gray-200 text-center">
                  {el.order_item
                    ?.reduce((acc, i) => {
                      return acc + i.quantity * 1300;
                    }, 0)
                    .toLocaleString()}
                </td>
                <td className="py-4 px-2 border-b border-gray-200">
                  <div className="flex justify-center">
                    <select
                      value={el.orderStatus}
                      onChange={(e) =>
                        handleChangeOrderStatus(el.id, e.target.value)
                      }
                      className={`font-semibold ${statusClass(el.orderStatus)}`}
                    >
                      <option
                        value="PENDING"
                        className="text-red-500 font-semibold"
                      >
                        Pending
                      </option>
                      <option
                        value="PROCESSING"
                        className="text-yellow-700 font-semibold"
                      >
                        Processing
                      </option>
                      <option
                        value="FINISHED"
                        className="text-green-600 font-semibold"
                      >
                        Finished
                      </option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
