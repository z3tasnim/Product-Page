import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useSlider } from "./contexts/SliderContext";
import ProductSlider from "./components/ProductSlider";

function App() {
  const { isSlider } = useSlider();
  return (
    <>
      <div className="md:w-4/5 md:m-auto relative">
        <Header />
        <Main />
        {isSlider && (
          <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-75 flex flex-col justify-center items-center">
            <ProductSlider lightbox />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
