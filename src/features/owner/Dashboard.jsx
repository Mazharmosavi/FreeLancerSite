import React from "react";
import OwnerDashbordHeader from "./OwnerDashbordHeader";
import OwnerDashBordStats from "./OwnerDashBordStats";
import { useOwnerProjects } from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";
function Dashboard() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <OwnerDashbordHeader />
      <OwnerDashBordStats projects={projects} />
    </div>
  );
}

export default Dashboard;
