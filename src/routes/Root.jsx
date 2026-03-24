import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div className="flex flex-col min-h-screen"> 
      <header>
        <Navbar />
      </header>
      <main className="bg-[#f5f4f4] py-10 flex-1">
        {isNavigating && (
          <div className="text-5xl text-center flex justify-center items-center h-64 text-violet-700">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
