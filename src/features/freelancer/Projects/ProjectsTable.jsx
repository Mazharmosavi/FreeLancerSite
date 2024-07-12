import React from "react";
import useProjects from "../../../hooks/useProjects";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;
  if (!projects) return <>پروژه ای وجود ندارد</>;
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <Table>
        <Table.header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.header>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table>
    </div>
  );
}

export default ProjectsTable;
