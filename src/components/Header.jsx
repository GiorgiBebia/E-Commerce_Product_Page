/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { removeCartItem } from "../cartSlice";

export function Header({ setOpenBurger }) {
  const [openCart, setOpenCart] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  function handleOpenCart() {
    setOpenCart((open) => !open);
  }
  function toggleRemoveFromCart() {
    dispatch(removeCartItem());
  }

  return (
    <div className="max-w-[1110px] mobile:max-w-[327px] w-full h-[85px] mobile:h-[24px] mt-[28px] mobile:mt-[19px] mx-auto flex justify-between border-b-[1px] border-b-[#E4E9F2] mobile:border-none">
      <div className="w-[591px] mobile:w-[169.5px] h-[26px] mobile:h-[20px] flex justify-between mt-[16px] mobile:mt-0">
        <GiHamburgerMenu
          className="hidden mobile:block w-[25px] h-[25px] text-[#69707D]"
          onClick={() => setOpenBurger(true)}
        />
        <img
          className="w-[137px] h-[20px] cursor-pointer"
          src="logo.svg"
          alt="Logo"
        />
        <div className="w-[397px] h-[26px] flex justify-between mobile:hidden">
          <h4 className="font-kumbh text-[15px] text-[#69707D] cursor-pointer hover:border-b-[#FF7E1B] hover:border-b-[4px] h-[69px]">
            Collections
          </h4>
          <h4 className="font-kumbh text-[15px] text-[#69707D] cursor-pointer hover:border-b-[#FF7E1B] hover:border-b-[4px] h-[69px]">
            Men
          </h4>
          <h4 className="font-kumbh text-[15px] text-[#69707D] cursor-pointer hover:border-b-[#FF7E1B] hover:border-b-[4px] h-[69px]">
            Women
          </h4>
          <h4 className="font-kumbh text-[15px] text-[#69707D] cursor-pointer hover:border-b-[#FF7E1B] hover:border-b-[4px] h-[69px]">
            About
          </h4>
          <h4 className="font-kumbh text-[15px] text-[#69707D] cursor-pointer hover:border-b-[#FF7E1B] hover:border-b-[4px] h-[69px]">
            Contact
          </h4>
        </div>
      </div>
      <div className="w-[118px] mobile:w-[68px] h-[50px] mobile:h-[24px] flex justify-between items-center">
        <IoCartOutline
          className="w-[25px] mobile:w-[25px] h-[25px] mobile:h-[25px] text-[#69707D] cursor-pointer hover:text-[#1D2026]"
          onClick={handleOpenCart}
        />
        <img
          className="w-[50px] mobile:w-[24px] h-[50px] mobile:h-[24px] rounded-full hover:border-[2px] border-[#FF7E1B] cursor-pointer"
          src="image-avatar.png"
          alt="Avatar Image"
        />
      </div>
      {openCart && (
        <div className="absolute bg-white w-[360px] h-[256px] top-[94px] mobile:top-[76px] right-[89px] mobile:right-[7px] rounded-[10px] shadow-2xl mobile:z-10">
          <h4 className="font-kumbh font-bold text-[16px] mt-[24px] ml-[24px]">
            Cart
          </h4>
          <div className="w-[360px] h-[1px] bg-[#E4E9F2] mt-[27px]"></div>
          {cart.length === 0 ? (
            <h4 className="font-kumbh font-bold text-[16px] text-[#69707D] text-center mt-[77px]">
              Your cart is empty.
            </h4>
          ) : (
            <div>
              <div className="w-[312px] h-[52px] mt-[24px] mx-auto flex justify-between items-center">
                <img
                  className="w-[50px] h-[50px] rounded-[4px]"
                  src={cart[0].img}
                  alt=""
                />
                <div className="w-[214px] h-[52px] flex flex-col">
                  <span className="font-kumbh text-[16px] text-[#69707D]">
                    {cart[0].name}
                  </span>
                  <span className="font-kumbh text-[16px] text-[#69707D]">
                    ${cart[0].price} x {cart[0].quantity}{" "}
                    <span className="font-bold text-[#1D2026]">
                      ${Number(cart[0].price) * cart[0].quantity}.00
                    </span>
                  </span>
                </div>
                <FaTrashAlt
                  className="text-[#C3CAD9]"
                  onClick={toggleRemoveFromCart}
                />
              </div>
              <button className="w-[312px] h-[56px] bg-[#FF7E1B] mt-[24px] ml-[24px] rounded-[10px] font-kumbh font-bold text-[16px] text-[#1D2026]">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
