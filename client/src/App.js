import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Add from "./pages/Add";
import Home from "./pages/Home";
function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/add" element={<Add/>} />

</Routes>
<Footer/>

</BrowserRouter>
  );
}

export default App;