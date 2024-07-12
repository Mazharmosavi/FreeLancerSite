import React from "react";
import useProject from "../features/projects/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../features/projects/ProjectHeader";
import ProposalTable from "../features/projects/ProposalTable";
import { QueryClient } from "@tanstack/react-query";

function Project() {
  const { isLoading, project } = useProject();
  console.log(isLoading);
  console.log(project);
  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
    </div>
  );
}

export default Project;
