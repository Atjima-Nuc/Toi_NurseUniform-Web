import { useEffect } from "react";
import Stepper from "../components/Stepper";
import useProduct from "../hooks/useProduct";
import { useState } from "react";
import productsApi from "../apis/products";
import shirtImg1 from "../assets/shirt/shirt_b-b-b1.jpg";
import trouserImg1 from "../assets/trouser/trouser1.jpg";
import useOrder from "../hooks/useOrder";
import orderApi from "../apis/order";

export default function OrderSummaryPage() {
  // const { products, isProductLoading, fetchProducts, quantity, setQuantity } =
  //   useProduct();
  // const { orderByUserId, fetchOrderByUserId } = useOrder();

  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [orderByUserId, setOrderByUserId] = useState([]);

  const fetchProduct = async () => {
    const product = await productsApi.getAllProducts();
    console.log("product", product);

    setPrice(+product.data[0].price);
    setProductName(product.data[0].productName);
  };

  const fetchOrderByUserId = async () => {
    try {
      const res = await orderApi.getOrderByUser();
      setOrderByUserId(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchOrderByUserId();
  }, []);

  console.log("orderByUserId---", orderByUserId[0]?.orderStatus);

  return (
    <div className="flex flex-col item py-4 w-full h-screen gap-4">
      <div className="px-10">
        <div className=" text-vallartaBlue text-3xl font-bold">Thank you!</div>
        <div className=" text-elephant"> Your order has been Confirmed.</div>
      </div>
      {/* <Stepper /> */}

      {/* //////////////////////////////////////////////// */}
      {orderByUserId[0]?.orderStatus === "PENDING" && (
        <div className="flex justify-center">
          <div className={`step-item`}>
            <div className="step bg-red-300">{1}</div>
            <p className=" text-red-500 font-semibold">Pending</p>
          </div>
          <div className={`step-item`}>
            <div className="step">{2}</div>
            <p className="text-gray-800 ">Processing</p>
          </div>
          <div className={`step-item`}>
            <div className="step">{3}</div>
            <p className="text-gray-800 ">Finished</p>
          </div>
        </div>
      )}

      {orderByUserId[0]?.orderStatus === "PROCESSING" && (
        <div className="flex justify-center">
          <div className={`step-item`}>
            <div className="step">{1}</div>
            <p className=" text-gray-800">Pending</p>
          </div>
          <div className={`step-item`}>
            <div className="step text-yellow-300">{2}</div>
            <p className="text-yellow-900 font-semibold">Processing</p>
          </div>
          <div className={`step-item`}>
            <div className="step">{3}</div>
            <p className="text-gray-800 ">Finished</p>
          </div>
        </div>
      )}

      {orderByUserId[0]?.orderStatus === "FINISHED" && (
        <div className="flex justify-center">
          <div className={`step-item`}>
            <div className="step">{1}</div>
            <p className=" text-gray-800">Pending</p>
          </div>
          <div className={`step-item`}>
            <div className="step">{2}</div>
            <p className="text-gray-800 ">Processing</p>
          </div>
          <div className={`step-item`}>
            <div className="step bg-green-400">{3}</div>
            <p className="text-green-600 font-semibold">Finished</p>
          </div>
        </div>
      )}

      {/* /////////////////////////////////////////////// */}

      <div className=" flex gap-6 justify-center flex-col">
        <div className=" font-bold text-2xl px-10">Order Detail</div>

        <div className="bg-gray-200 w-full h-[400px]  flex justify-evenly">
          <div className="bg-elephant">
            <img src={shirtImg1} className="h-[250px] w-auto" />
          </div>
          <div className="h-[400px] flex items-end bg-elephant">
            <img src={trouserImg1} className="h-[250px] w-auto" />
          </div>

          <div className="w-[300px] h-[400px] bg-vallartaBlue  text-white p-3 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold">{productName}</p>
              <p className="text-xl font-medium text-gray-300">
                ฿{price} / set
              </p>
            </div>
            <div className="flex justify-end mb-5 gap-2 items-center">
              <p className="text-gray-300 text-lg">Total price : </p>
              <p className="text-3xl font-medium">
                ฿{price * orderByUserId[0]?.order_item[0]?.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
