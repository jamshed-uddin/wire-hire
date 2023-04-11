import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="fixed top-0 right-0 left-0 ">
        <Header></Header>
      </div>
      <div className="mt-[50px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
