import Calculator from "./tp2/Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Tp1 from "./tp1/Tp1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tp1 />} />
          <Route path="/tp2" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
