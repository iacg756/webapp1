
import { getUser } from "../utils/auth";

export default function Dashboard() {

  const user = getUser();

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Página protegida</p>

      <h3>Datos del usuario</h3>

      <p>Usuario: {user?.usuario}</p>

      <p>Rol: {user?.rol}</p>

      <p>
        Fecha de nacimiento: {user?.fecha_nacimiento || "No registrada"}
      </p>

    </div>
  );
}
