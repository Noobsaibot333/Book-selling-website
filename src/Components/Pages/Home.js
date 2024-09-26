import { memo } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
function HomePage({children, ...props}) {
  return (
    <div {...props}>
    <Header />
    {children}
    <Footer />
    </div>
  );
}
export default memo(HomePage);