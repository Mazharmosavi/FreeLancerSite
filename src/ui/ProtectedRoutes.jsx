import React from "react";
import { useEffect } from "react";
import { LoaderIcon } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/projects/useOwnerProjects";
import useAuthorize from "../hooks/useAuthorize";
import Loading from "../ui/Loading";

function ProtectedRoutes({ children }) {
  const { isLoading, isAthenticated, isAuthorized,isVarified } = useAuthorize();
  console.log(isVarified,"var")
  const navigate = useNavigate();
  console.log(isAuthorized)
  useEffect(() => {
    if (!isAthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
    if(!isVarified&&!isLoading) navigate('/not-access')
  }, [isLoading, isAthenticated, isAuthorized]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-secondary-100">
        <Loading />
      </div>
    );
  }
  if (isAuthorized) return children;
}

export default ProtectedRoutes;
