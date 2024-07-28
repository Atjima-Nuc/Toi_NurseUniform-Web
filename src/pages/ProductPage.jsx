import { useEffect } from "react";
import Spinner from "../components/Spinner";
import useProduct from "../hooks/useProduct";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ProductGallery from "../features/product/components/ProductGallery";
import QuantitySelector from "../features/product/components/QuantitySelector";
import { useState } from "react";
import orderApi from "../apis/order";
import { toast } from "react-toastify";

export default function ProductPage() {
  const { products, isProductLoading, fetchProducts, quantity, setQuantity } =
    useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isProductLoading) return <Spinner />;

  const handleSubmitOrder = async (e) => {
    try {
      e.preventDefault();
      await orderApi.createOrder(quantity);

      console.log("Order submitted:", { quantity });
      navigate("/order_summary");
    } catch (err) {
      console.log(err);
      toast.error("You already orderd.");
    }
  };

  return (
    <div className="bg-white px-4 lg:px-8 py-8 flex flex-col gap-9">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
        OUR PRODUCT
      </h2>

      <div className=" flex justify-between">
        <ProductGallery />
        <div className="w-[30%] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className=" text-3xl font-semibold">Nurse Uniform Type 1</h2>
            <p className=" text-vallartaBlue text-3xl font-bold">฿ 1,300 </p>
          </div>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
            possimus ipsa voluptatibus numquam exercitationem explicabo illo
            quis quia, ut error voluptate molestiae blanditiis eum culpa
            consequatur at dolore dolores!
          </p>
          <form
            onSubmit={handleSubmitOrder}
            className="h-[35%] flex flex-col justify-between"
          >
            <div>
              Quantity :
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
            <button
              type="submit"
              className="text-elephant font-semibold text-xl border-2 border-elephant bg-freezingVapor h-[40px] hover:text-pictionBlue hover:bg-elephant"
            >
              Click to ORDER!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
