import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <ScrollToTop/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;


