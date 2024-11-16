/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";

export function OpenBurger({ setOpenBurger }) {
  return (
    <div className="max-w-[375px] w-full h-[900px] absolute top-0 bg-black bg-opacity-80">
      <div className="w-[250px] h-[900px] bg-white flex flex-col">
        <AiOutlineClose
          className="w-[20px] h-[20px] mt-[24.78px] ml-[25.28px]"
          onClick={() => setOpenBurger(false)}
        />
        <div className="w-[95px] h-[210px] flex justify-between flex-col mt-[53.78px] ml-[25px]">
          <h4 className="font-kumbh font-bold text-[18px] text-[#1D2026] cursor-pointer">
            Collections
          </h4>
          <h4 className="font-kumbh font-bold text-[18px] text-[#1D2026] cursor-pointer">
            Men
          </h4>
          <h4 className="font-kumbh font-bold text-[18px] text-[#1D2026] cursor-pointer">
            Women
          </h4>
          <h4 className="font-kumbh font-bold text-[18px] text-[#1D2026] cursor-pointer">
            About
          </h4>
          <h4 className="font-kumbh font-bold text-[18px] text-[#1D2026] cursor-pointer">
            Contact
          </h4>
        </div>
      </div>
    </div>
  );
}
