export default function Header() {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header className="flex justify-between border-b-2 h-16 md:h-24 px-4 md:px-0">
      <div className="flex justify-center items-center gap-x-4 md:gap-x-12">
        <img
          src="src\assets\images\icon-menu.svg"
          alt="Menu"
          className="pt-1 md:hidden hover:brightness-0 hover:cursor-pointer transition-all duration-300"
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
        <div className="md:pt-2 ">
          <img
            src="src\assets\images\icon-cart.svg"
            alt="Cart"
            className="hover:brightness-0 hover:cursor-pointer transition-all duration-300"
          />
        </div>
        <div className="">
          <img
            src="src\assets\images\image-avatar.png"
            alt="Profile Picture"
            className="w-6 md:w-12 overflow-hidden rounded-full hover:border-2 hover:border-[hsl(26,100%,55%)] hover:cursor-pointer transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
}
