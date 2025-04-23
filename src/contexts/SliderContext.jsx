import { createContext, useContext, useState } from "react";

const SliderContext = createContext();

export function SliderProvider({ children }) {
  const [isSlider, setIsSlider] = useState(false);
  const openSlider = () => setIsSlider(true);
  const closeSlider = () => setIsSlider(false);
  return (
    <SliderContext.Provider
      value={{
        isSlider,
        openSlider,
        closeSlider,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  return useContext(SliderContext);
}
