
import { getUser } from "../utils/auth";

export default function Perfil() {

  const user = getUser();

  return (
    <div>
      <h1>Perfil</h1>

      <p>Información personal del usuario.</p>

      <h3>Mis datos</h3>

      <p>ID: {user?.id}</p>

      <p>Usuario: {user?.usuario}</p>

      <p>Rol: {user?.rol}</p>

      <p>
        Fecha de nacimiento: {user?.fecha_nacimiento || "No registrada"}
      </p>

    </div>
  );
}
