
import type { User } from "../types/auth";

// Verifica si el usuario está autenticado
export function isAuthenticated(): boolean {
  return localStorage.getItem("auth") === "true";
}

// Cerrar sesión
export function logout(): void {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
}

// Obtener el usuario guardado
export function getUser(): User | null {
  const user = localStorage.getItem("user");

  if (user) {
    try {
      return JSON.parse(user) as User;
    } catch {
      return null;
    }
  }

  return null;
}
