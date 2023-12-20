import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
