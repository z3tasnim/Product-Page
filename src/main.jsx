import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { SliderProvider } from "./contexts/SliderContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SliderProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SliderProvider>
  </StrictMode>
);
