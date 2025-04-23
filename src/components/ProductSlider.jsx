import { useState } from "react";
import { useSlider } from "../contexts/SliderContext";

export default function ProductSlider({ lightbox = false }) {
  const { openSlider, closeSlider } = useSlider();
  const productImages = [
    {
      id: 1,
      thumbnail: "src/assets/images/image-product-1-thumbnail.jpg",
      bigPicture: "src/assets/images/image-product-1.jpg",
    },
    {
      id: 2,
      thumbnail: "src/assets/images/image-product-2-thumbnail.jpg",
      bigPicture: "src/assets/images/image-product-2.jpg",
    },
    {
      id: 3,
      thumbnail: "src/assets/images/image-product-3-thumbnail.jpg",
      bigPicture: "src/assets/images/image-product-3.jpg",
    },
    {
      id: 4,
      thumbnail: "src/assets/images/image-product-4-thumbnail.jpg",
      bigPicture: "src/assets/images/image-product-4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnClick = (image, index) => {
    setCurrentIndex(index);
  };

  const handleImageSlider = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    } else if (direction === "prev") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + productImages.length) % productImages.length
      );
    }
  };

  return (
    <>
      <div className="space-y-6">
        {lightbox && (
          <img
            src="src\assets\images\icon-close.svg"
            alt="Close"
            className="h-4 ml-auto mr-2 hover:cursor-pointer"
            onClick={closeSlider}
          />
        )}
        <div className="w-full overflow-hidden h-[268px] md:ml-[2px] md:w-[344px] md:h-[354px] md:rounded-2xl relative">
          <div
            className="md:hidden bg-white w-8 h-8 rounded-full border-2 absolute top-1/2 right-2 transform -translate-y-1/2 flex justify-center items-center"
            onClick={() => handleImageSlider("next")}
          >
            <img
              src="src/assets/images/icon-next.svg"
              alt="Next Image"
              className="w-2"
            />
          </div>
          <div
            className="md:hidden bg-white w-8 h-8 pr-1 rounded-full border-2 absolute top-1/2 left-2 transform -translate-y-1/2 flex justify-center items-center"
            onClick={() => handleImageSlider("prev")}
          >
            <img
              src="src/assets/images/icon-previous.svg"
              alt="Previous Image"
              className="w-2"
            />
          </div>

          <img
            src={productImages[currentIndex].bigPicture}
            alt="Product"
            className="w-full h-full object-cover object-center"
            onClick={openSlider}
          />
        </div>

        <div className="hidden md:flex md:gap-6">
          {productImages.map((image, index) => {
            return (
              <div
                className={`w-[70px] rounded-lg overflow-hidden hover:cursor-pointer ${
                  currentIndex === index
                    ? "border-2 border-[hsl(26,100%,55%)] transition-all duration-300"
                    : ""
                }`}
                key={image.id}
              >
                <img
                  src={image.thumbnail}
                  alt=""
                  className={
                    currentIndex === index
                      ? "opacity-50 transition-all duration-300"
                      : "hover:opacity-50"
                  }
                  onClick={() => handleOnClick(image, index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
