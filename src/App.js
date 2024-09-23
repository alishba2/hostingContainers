import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Aboutus from "./pages/aboutus";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import "./i18n";
import Hosting from "./pages/hosting";
import ProductListing from "./pages/productListing";
import Admin from "./pages/admin";
import CryptoAtmLocator from "./pages/map";
import TrackOrders from "./pages/trackOrders";
import ShowBlogs from "./pages/showBlogs";
import SingleProduct from "./pages/singleProduct";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/map" element={<CryptoAtmLocator />} />
        <Route path="/track-orders" element={<TrackOrders />} />
        <Route path="/blogs" element={<ShowBlogs />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
