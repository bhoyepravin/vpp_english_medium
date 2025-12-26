import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import WhatsAppPopup from "../Component/ScrollToTop/WhatsAppPopup";

function Layout() {
  return (
    <div>
      <Navbar />
      <WhatsAppPopup />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
