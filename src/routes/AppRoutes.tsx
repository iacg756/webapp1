
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas públicas
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";

// Páginas privadas
import Dashboard from "../pages/Dashboard";
import Info from "../pages/Info";
import Perfil from "../pages/Perfil";
import Configuracion from "../pages/Configuracion";

import NotFound from "../pages/NotFound";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";

// Protección de rutas
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTAS PÚBLICAS */}
        <Route element={<PublicLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

        </Route>

        {/* RUTAS PRIVADAS */}
        <Route
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/info"
            element={<Info />}
          />

          <Route
            path="/perfil"
            element={<Perfil />}
          />

          <Route
            path="/configuracion"
            element={<Configuracion />}
          />

        </Route>

        {/* PÁGINA 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}
