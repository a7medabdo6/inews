import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import LoadingPage from "./Utilities/LoadingPage";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Header />
      {/* {loading && <LoadingPage />} */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
