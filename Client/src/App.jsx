import { useEffect, useState } from "react";
import "./App.css";
import Navber from "./components/Navber";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const NavberRouter = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", "jdasljkf");
    if (token === "") {
      NavberRouter("/");
    } else {
      NavberRouter("/dashbord");
    }
  }, [setToken]);

  return (
    <div className="bg-[#F1F2F6] w-full h-screen">
      {token === "" ? (
        <Outlet />
      ) : (
        <>
          <Navber />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
