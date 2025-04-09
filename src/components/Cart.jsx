import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems } = useCart();
  return (
    <div className="w-80 h-52 bg-white rounded-xl shadow-2xl">
      <div className="h-14 border-b-2 p-4">
        <p className="font-extrabold text-sm">Cart</p>
      </div>

      {cartItems ? (
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="src\assets\images\image-product-1-thumbnail.jpg"
              alt="Product"
              className="w-12 rounded-md"
            />
            <div className="mr-1">
              <p className="text-sm opacity-60">
                Fall Limited Edition Sneakers
              </p>
              <div className="flex gap-2">
                <p className="text-sm opacity-60">$125.00 x {cartItems}</p>
                <p className="font-extrabold text-sm">
                  ${(125.0 * cartItems).toFixed(2)}
                </p>
              </div>
            </div>
            <img
              src="src\assets\images\icon-delete.svg"
              alt="Delete"
              className="h-4"
            />
          </div>
          <div className="">
            <button className="w-full h-12 rounded-lg font-extrabold bg-[hsl(26,100%,55%)]">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div
          className="p-5 space-y-4 flex justify-center items-center"
          style={{ height: "calc(100% - 3.5rem)" }}
        >
          <p className="font-extrabold opacity-60">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}
