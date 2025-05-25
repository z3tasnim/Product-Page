import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import Cart from "./Cart";

export default function Header() {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  const [cartVisible, setCartVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useCart();

  const handleCartVisible = () => setCartVisible(!cartVisible);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="flex justify-between border-b-2 h-16 md:h-24 px-4 md:px-0 relative">
      <div className="flex justify-center items-center gap-x-4 md:gap-x-12">
        <img
          src="src/assets/images/icon-menu.svg"
          alt="Menu"
          className="pt-1 md:hidden hover:brightness-0 hover:cursor-pointer transition-all duration-300"
          onClick={toggleSidebar}
        />
        <p className="font-poppins font-extrabold text-3xl">sneakers</p>
        <nav className="pt-1 hidden md:block">
          <ul className="flex space-x-10 text-gray-500">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-black hover:cursor-pointer transition-all duration-300 relative group"
              >
                {item}
                <div className="bg-[hsl(26,100%,55%)] h-1 absolute top-[55px] w-0 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-center items-center gap-x-4 md:gap-x-10">
        <div className="md:pt-2 relative">
          <img
            src="src/assets/images/icon-cart.svg"
            alt="Cart"
            className="hover:brightness-0 hover:cursor-pointer transition-all duration-300"
            onClick={handleCartVisible}
          />
          {cartItems ? (
            <div className="w-3 bg-[hsl(26,100%,55%)] absolute -top-1 md:top-1 -right-1 text-xs text-white rounded-full text-center">
              {cartItems}
            </div>
          ) : null}
        </div>

        {cartVisible && (
          <div className="absolute z-10 left-1/2 -translate-x-1/2 transition top-20 md:left-auto md:right-0 md:translate-x-0">
            <Cart />
          </div>
        )}

        <div>
          <img
            src="src/assets/images/image-avatar.png"
            alt="Profile Picture"
            className="w-6 md:w-12 overflow-hidden rounded-full hover:border-2 hover:border-[hsl(26,100%,55%)] hover:cursor-pointer transition-all duration-300"
          />
        </div>
      </div>

      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={closeSidebar}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-30 p-6 space-y-6 shadow-lg">
            <img
              src="src/assets/images/icon-close.svg"
              alt="Close Sidebar"
              className="w-4 cursor-pointer mb-4"
              onClick={closeSidebar}
            />
            <ul className="flex flex-col gap-4 font-bold text-lg">
              {navItems.map((item) => (
                <li key={item} className="hover:text-[hsl(26,100%,55%)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
