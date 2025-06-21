import "./styles/App.css";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItem";
import { Toaster } from "react-hot-toast";
import ItemPage from "./pages/ItemPage";

function App() {

  return (
    <>
    <Toaster position="top-center" />
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/add-items" element={<AddItem/>} />
       <Route path="/view-items" element={<ViewItems/>} />
       <Route path="/item/:pid" element={<ItemPage/>} />
    </Routes>
    </>
  )
}

export default App
