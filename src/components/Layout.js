import AppRoutes from "../pages/routes";
import Footer from "./navigation/Footer";
import HeaderNav from "./navigation/HeaderNav";

const Layout = () => {
  return (
    <div>
      <HeaderNav />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
