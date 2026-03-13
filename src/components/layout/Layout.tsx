import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ToastContainer from "@/components/ui/Toast";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f2eeef] dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}
