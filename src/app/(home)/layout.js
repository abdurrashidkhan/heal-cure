import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;