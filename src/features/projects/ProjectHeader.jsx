import React from "react";
import Table from "../../ui/Table";
import ProposalTable from "./ProposalTable";

function ProjectHeader({ project }) {

  const proposals = project.proposals;
  if (project.proposals.length===0) {
    return <div>پیشنهادی برای پروژه {project.title} وجود ندارد</div>;
  } else {
    return (
      <Table>
        <Table.header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه ها</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.header>
        <Table.body>
          {proposals.map((propsal, index) => (
             <ProposalTable proposal={propsal} index={index} />
          ))}
        </Table.body>
      </Table>
    );
  }
}

export default ProjectHeader;
