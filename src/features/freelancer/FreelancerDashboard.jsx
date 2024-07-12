import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import useProposals from "../../hooks/useProposals";
import Loading from "../../ui/Loading";

function FreelancerDashboard() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals}/>
    </div>
  );
}

export default FreelancerDashboard;
