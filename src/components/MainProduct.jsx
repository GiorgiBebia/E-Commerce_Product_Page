/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../cartSlice";
import { IoIosArrowBack } from "react-icons/io";
import { IoCartOutline, IoChevronForwardOutline } from "react-icons/io5";
import { ThumbnailImage } from "./ThumbnailImage";
import { FaMinus, FaPlus } from "react-icons/fa";

export function MainProduct({ setOpenSlider }) {
  const [image, setImage] = useState(1);
  const price = `125.00`;
  const name = `Fall Limited Edition Sneakers`;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  function toggleImage(num) {
    setImage(num);
  }

  function toggleAddToCart() {
    const item = {
      img: `image-product-1-thumbnail.jpg`,
      name,
      price,
      quantity,
    };
    dispatch(addCart(item));
  }

  function toggleMinus() {
    if (quantity > 0) setQuantity((num) => num - 1);
  }

  function togglePlus() {
    setQuantity((num) => num + 1);
  }

  function toggleBack() {
    image === 1 ? setImage(4) : setImage((num) => num - 1);
  }

  function toggleForward() {
    image === 4 ? setImage(1) : setImage((num) => num + 1);
  }

  return (
    <div className="w-[1015px] mobile:w-[375px] h-[565px] mt-[90px] mobile:mt-[25px] mx-auto mb-[132px] flex justify-between mobile:flex-col">
      <div>
        <div
          className="w-[40px] h-[40px] rounded-full bg-white items-center justify-center absolute top-[198px] left-[16px] cursor-pointer hover:text-[#FF7E1B] hidden mobile:flex"
          onClick={toggleBack}
        >
          <IoIosArrowBack className="w-[20px] h-[20px]" />
        </div>
        <img
          className="w-[445px] mobile:w-[375px] h-[445px] mobile:h-[300px] rounded-[15px] mobile:rounded-none cursor-pointer"
          src={`image-product-${image}.jpg`}
          alt=""
          onClick={window.innerWidth > 376 ? setOpenSlider : null}
        />
        <div
          className="w-[40px] h-[40px] rounded-full bg-white items-center justify-center absolute top-[198px] right-[16px] cursor-pointer hover:text-[#FF7E1B] hidden mobile:flex"
          onClick={toggleForward}
        >
          <IoChevronForwardOutline className="w-[20px] h-[20px]" />
        </div>
        <div className="w-[445px] h-[88px] mt-[32px] flex justify-between mobile:hidden">
          <ThumbnailImage image={image} toggleImage={toggleImage} number={1} />
          <ThumbnailImage image={image} toggleImage={toggleImage} number={2} />
          <ThumbnailImage image={image} toggleImage={toggleImage} number={3} />
          <ThumbnailImage image={image} toggleImage={toggleImage} number={4} />
        </div>
      </div>
      <div className="w-[445px] mobile:w-[327px] h-[426px] mobile:h-[420px] mt-[62px] mobile:mt-[24px] mobile:mx-auto">
        <span className="font-kumbh font-bold text-[13px] mobile:text-[12px] text-[#69707D] uppercase tracking-[2px] mobile:tracking-[1.85px]">
          Sneaker Company
        </span>
        <h2 className="font-kumbh font-bold text-[44px] mobile:text-[28px] text-[#1D2026] mt-[24px] mobile:mt-[16px]">
          {name}
        </h2>
        <p className="font-kumbh text-[16px] mobile:text-[15px] text-[#69707D] mt-[32px] mobile:mt-[15px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="mobile:flex mobile:justify-between mobile:items-center mobile:mt-[24px]">
          <div className="flex gap-[16px] mt-[28px] mobile:mt-0 items-center">
            <h4 className="font-kumbh font-bold text-[28px] text-[#1D2026]">
              ${price}
            </h4>
            <div className="w-[51px] h-[27px] bg-black rounded-[6px] flex items-center justify-center">
              <span className="text-white">50%</span>
            </div>
          </div>
          <h4 className="font-kumbh font-bold text-[16px] text-[#69707D] line-through mt-[3px]">
            $250.00
          </h4>
        </div>
        <div className="w-[445px] mobile:w-[327px] h-[56px] mobile:h-[128px] flex justify-between mt-[32px] mobile:mt-[24px] mobile:flex-col">
          <div className="w-[157px] mobile:w-[327px] h-[56px] rounded-[10px] bg-[#F6F8FD] flex justify-around items-center">
            <FaMinus
              className="text-[#FF7E1B] text-[15px] cursor-pointer hover:text-[#FFAB6A]"
              onClick={toggleMinus}
            />
            <span className="font-kumbh font-bold text-[16px] text-[#1D2026]">
              {quantity}
            </span>
            <FaPlus
              className="text-[#FF7E1B] text-[15px] cursor-pointer hover:text-[#FFAB6A]"
              onClick={togglePlus}
            />
          </div>
          <button
            className="w-[272px] mobile:w-[327px] h-[56px] bg-[#FF7E1B] rounded-[10px] flex justify-center items-center gap-[16px] hover:bg-[#FFAB6A]"
            onClick={toggleAddToCart}
          >
            <IoCartOutline className="w-[18px] h-[18px] text-[#1D2026]" />
            <span className="font-kumbh font-bold text-[16px] text-[#1D2026]">
              {cart.length === 0 ? `Add To Cart` : `Remove To Cart`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
