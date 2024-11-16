/* eslint-disable react/prop-types */
export function ThumbnailImage({ image, toggleImage, number }) {
  return (
    <img
      className={`w-[88px] h-[88px] rounded-[10px] hover:opacity-45 cursor-pointer ${
        image === number
          ? `opacity-65 border-opacity-100 border-[3px] border-[#FF7E1B]`
          : ``
      } `}
      src={`image-product-${number}-thumbnail.jpg`}
      alt=""
      onClick={() => toggleImage(number)}
    />
  );
}
