
import { getUser } from "../utils/auth";

export default function Info() {

  const user = getUser();

  return (
    <div>
      <h1>Info</h1>

      <p>Página protegida</p>

      <h3>Información del usuario</h3>

      <p>Usuario: {user?.usuario}</p>

      <p>Rol: {user?.rol}</p>

      <p>
        Fecha de nacimiento: {user?.fecha_nacimiento || "No registrada"}
      </p>

    </div>
  );
}
