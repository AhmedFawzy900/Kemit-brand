
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import MouseFollower from "./components/Mouse-move/MouseFollower";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>

        {/* <Header /> */}
        <MouseFollower />
        <Routes>
          <Route path="/*" element={<ComingSoon />} />
        </Routes>
      
    </>
  );
}

export default App;
