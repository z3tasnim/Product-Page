export default function Header() {
  return (
    <header className="flex justify-between border-b-2 h-24">
      <div className="flex justify-center items-center space-x-12">
        <p className="font-poppins font-extrabold text-3xl">sneakers</p>
        <nav className="pt-1">
          <ul className="flex space-x-10 text-gray-500">
            <li className="hover:text-black relative group">
              Collections
              <div className="bg-[hsl(26,100%,55%)] h-1 absolute top-[55px] w-0 group-hover:w-full"></div>
            </li>
            <li className="hover:text-black relative group">
              Men
              <div className="bg-[hsl(26,100%,55%)] h-1 absolute top-[55px] w-0 group-hover:w-full"></div>
            </li>
            <li className="hover:text-black relative group">
              Women
              <div className="bg-[hsl(26,100%,55%)] h-1 absolute top-[55px] w-0 group-hover:w-full"></div>
            </li>
            <li className="hover:text-black relative group">
              About
              <div className="bg-[hsl(26,100%,55%)] h-1 absolute top-[55px] w-0 group-hover:w-full"></div>
            </li>
            <li className="hover:text-black relative group">
              Contact
              <div className="bg-[hsl(26,100%,55%)] h-1 absolute top-[55px] w-0 group-hover:w-full"></div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center space-x-10">
        <div className="pt-2 ">
          <img
            src="src\assets\images\icon-cart.svg"
            alt="Cart"
            className="hover:brightness-0"
          />
        </div>
        <div className="w-12 rounded-full hover:border-2 hover:border-[hsl(26,100%,55%)]">
          <img src="src\assets\images\image-avatar.png" alt="Profile Picture" />
        </div>
      </div>
    </header>
  );
}
