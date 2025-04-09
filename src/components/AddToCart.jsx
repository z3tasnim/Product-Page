import { useCart } from "../contexts/CartContext";

export default function AddToCart() {
  const { count, handleDecrease, handleIncrease, handleAddToCart } = useCart();
  return (
    <>
      <div className="bg-slate-100 flex w-full md:w-36 p-3 justify-between rounded-lg">
        <img
          src="src\assets\images\icon-minus.svg"
          alt="Minus"
          className="object-contain"
          onClick={handleDecrease}
        />
        <p className="font-extrabold">{count}</p>
        <img
          src="src\assets\images\icon-plus.svg"
          alt="Plus"
          className="object-contain"
          onClick={handleIncrease}
        />
      </div>
      <div className="">
        <button
          className="flex gap-3 bg-[hsl(26,100%,55%)] font-extrabold justify-center items-center w-full md:w-56 h-12 rounded-lg hover:bg-[rgba(255,125,26,0.7)]"
          onClick={handleAddToCart}
        >
          <img
            src="src\assets\images\icon-cart.svg"
            alt="Cart"
            className="brightness-0 h-4"
          />
          <p>Add to cart</p>
        </button>
      </div>
    </>
  );
}
