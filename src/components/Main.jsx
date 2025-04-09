import AddToCart from "./AddToCart";
import ProductSlider from "./ProductSlider";

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 md:py-20">
      <ProductSlider />
      <div className="px-5 py-10 space-y-4">
        <div className="space-y-4">
          <p className="font-extrabold opacity-60 tracking-widest text-xs">
            SNEAKER COMPANY
          </p>
          <p className="font-extrabold text-5xl">
            Fall Limited Edition Sneakers
          </p>
          <p className="opacity-60 pt-3">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="space-y-2 flex md:flex-col gap-x-16">
          <div className="flex items-center gap-4">
            <p className="font-extrabold text-2xl">$125.00</p>
            <div className="bg-black text-white text-xs flex justify-center items-center rounded-md w-12 h-6">
              50%
            </div>
          </div>
          <p className="opacity-60 font-extrabold line-through text-sm">
            $250.00
          </p>
        </div>
        <div className="md:flex gap-8 pt-2">
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
