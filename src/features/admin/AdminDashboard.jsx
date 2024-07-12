import React from "react";
import useProjects from "../../hooks/useProjects";
import useProposals from "../../hooks/useProposals";
import useUser from "../../hooks/useUser";
import Loading from "../../ui/Loading";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import useUsers from "./useUsers";

function AdminDashboard() {
  const { isLoading, proposals } = useProposals();
  const { isLoading: projectsLoading, projects } = useProjects();
  const { users, isLoading:loaingUser } = useUsers();

 
  return isLoading || projectsLoading || loaingUser ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader />
      <Stats projrcts={projects} users={users} proposals={proposals} />
    </div>
  );
}

export default AdminDashboard;
