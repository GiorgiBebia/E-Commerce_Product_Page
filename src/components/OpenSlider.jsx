/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import { ThumbnailImage } from "./ThumbnailImage";

export function OpenSlider({ setOpenSlider }) {
  const [image, setImage] = useState(1);

  function toggleImage(num) {
    setImage(num);
  }

  function toggleBack() {
    image === 1 ? setImage(4) : setImage((num) => num - 1);
  }

  function toggleForward() {
    image === 4 ? setImage(1) : setImage((num) => num + 1);
  }
  return (
    <div className="max-w-[1440px] w-full h-[928px] absolute top-0 bg-black bg-opacity-80">
      <div className="w-[550px] h-[722px] mt-[89px] mx-auto">
        <AiOutlineClose
          className="text-white w-[20px] h-[20px] float-end mb-[24px] cursor-pointer hover:text-[#FF7E1B]"
          onClick={() => setOpenSlider(false)}
        />
        <div
          className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center absolute top-[390px] left-[370px] cursor-pointer hover:text-[#FF7E1B]"
          onClick={toggleBack}
        >
          <IoIosArrowBack className="w-[20px] h-[20px]" />
        </div>
        <img
          className="w-[550px] h-[550px] rounded-[15px]"
          src={`image-product-${image}-thumbnail.jpg`}
          alt=""
        />
        <div
          className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center absolute top-[390px] left-[922px] cursor-pointer hover:text-[#FF7E1B]"
          onClick={toggleForward}
        >
          <IoChevronForwardOutline className="w-[20px] h-[20px]" />
        </div>
        <div className="w-[445px] h-[88px] mt-[40px] flex justify-between mx-auto">
          <ThumbnailImage image={image} toggleImage={toggleImage} number={1} />
          <ThumbnailImage image={image} toggleImage={toggleImage} number={2} />
          <ThumbnailImage image={image} toggleImage={toggleImage} number={3} />
          <ThumbnailImage image={image} toggleImage={toggleImage} number={4} />
        </div>
      </div>
    </div>
  );
}
