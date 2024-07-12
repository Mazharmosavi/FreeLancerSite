import React, { useState } from "react";
import Loading from "../../ui/Loading";
import { useOwnerProjects } from "./useOwnerProjects";
import Table from "../../ui/Table";
import TableRow from "./TableRow";
import CreateProject from "./CreateProject";
import Modal from "../../ui/Modal";

function ProjectTabel() {
  const { isLoading, projects } = useOwnerProjects();
  const [openCreateProject, setOpenCreateProject] = useState(false);

  const onClose = (e) => {
    e.prevntDefaul();
    setOpenCreateProject(false);
  };

  if (isLoading) return <Loading />;
  if (!projects) return <>پروژه ای وجود ندارد</>;
  return (
    <div className="flex flex-col gap-y-6 w-fit">
      <button
        className="btn btn--primary w-48 "
        onClick={() => setOpenCreateProject(true)}
      >
        اضافه کردن پروژه جدید
      </button>
      <Table>
        <Table.header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
          <th>پیشنهاد ها</th>
        </Table.header>

        <Table.body>
          {projects.map((project, index) => (
            <TableRow project={project} index={index} />
          ))}
        </Table.body>
      </Table>
      <Modal
        open={openCreateProject}
        onClose={() => setOpenCreateProject(false)}
        title="اضافه کردن پروژه جدید"
      >
        <CreateProject setOpenCreateProject={setOpenCreateProject} onclose={()=>setOpenCreateProject(false)} />
      </Modal>
    </div>
  );
}

export default ProjectTabel;
