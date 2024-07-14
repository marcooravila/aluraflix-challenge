import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import RegisterCategory from "./pages/Register/Category";
import RegisterVideo from "./pages/Register/Video";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/nueva-categoria" element={<RegisterCategory />}/>
          <Route path="/nuevo-video" element={<RegisterVideo />}/>

          <Route path="*" element={<Home />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
