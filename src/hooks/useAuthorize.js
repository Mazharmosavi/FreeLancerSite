import { useLocation } from "react-router-dom";
import useUser from "./useUser";
export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAthenticated = false;
  let isAuthorized = false;
  let isVarified = false;

  if (user && Number(user.status ) == 2) isVarified = true;

  if (user) {
    isAthenticated = true;
  }
  console.log(user);

  /* if (pathname.includes("owner")) {
    if (user && user.role === "OWNER") isAuthorized = true;
  }

  if (pathname.includes("admin")) {
    if (user && user.role === "ADMIN") isAuthorized = true;
  }

  if (pathname.includes("freelancer")) {
    if (user && user.role === "FREELANCER") isAuthorized = true;
  }*/
  const ROLES = {
    Admin: "ADMIN",
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };
  const desireRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).includes(desireRole)) {
    if (user && user.role === ROLES[desireRole]) isAuthorized = true;
  }
  console.log(desireRole);
  return { isLoading, isAthenticated, isAuthorized, isVarified };
}
