
import { getUser, isAuthenticated } from "../utils/auth";

export default function Configuracion() {

  const user = getUser();

  return (
    <div>
      <h1>Configuración</h1>

      <p>Página protegida</p>

      <h3>Configuración de la cuenta</h3>

      <p>Usuario: {user?.usuario}</p>

      <p>Rol: {user?.rol}</p>

      <p>
        Fecha de nacimiento: {user?.fecha_nacimiento || "No registrada"}
      </p>

      <p>
        Estado de sesión: {isAuthenticated() ? "Activa" : "Inactiva"}
      </p>

    </div>
  );
}
