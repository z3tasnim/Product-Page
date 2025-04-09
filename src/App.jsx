import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="md:w-4/5 md:m-auto relative">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
