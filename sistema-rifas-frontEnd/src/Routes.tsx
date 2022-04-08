import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CadProduct from "./components/forms/CadProduct";
import CadConcurso from "./components/forms/CadConcurso";
import Login from "./components/forms/Login";
import CadUser from "./components/forms/CadUser";
import Home from "./pages/admin/Home";
import TableUsers from "./components/forms/TableUsers";
import TableConcursos from "./components/forms/TableConcursos";
import TableProducts from "./components/forms/TableProducts";
import SignIn from "./pages/admin/SignIn";
import DashBoard from "./pages/admin/DashBoard";
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/Index"></Route> */}
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/dashBoard" element={<DashBoard/>}></Route>
        <Route path="/usersList" element={<TableUsers/>}></Route>
        <Route path="/concursosList" element={<TableConcursos/>}></Route>
        <Route path="/productsList" element={<TableProducts/>}></Route>
        <Route path="/cadUser" element={<CadUser/>}></Route>
        <Route path="/products" element={<CadProduct/>}></Route>
        <Route path="/concursos" element={<CadConcurso/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}
