import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kahve from "./pages/kategori/Kahve";
import Kampanyali from "./pages/kategori/Kampanyali";
import Suruplar from "./pages/kategori/Suruplar"
import Baz from "./pages/kategori/Baz";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kategori/kahve" element={<Kahve />} />
        <Route path="/kategori/kampanyali" element={<Kampanyali />} />
        <Route path="/kategori/suruplar" element={<Suruplar />} />
        <Route path="/kategori/baz" element={<Baz />} />
      </Routes>
    </Router>
  );
};

export default App;
