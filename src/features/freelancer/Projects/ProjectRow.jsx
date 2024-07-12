import React from "react";
import Table from "../../../ui/Table";
import toLocalShortDate from "../../../utils/toLocalShortDate";
import truncateTitle from "../../../utils/truncateTitle";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import CreateProposal from "../CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};
function ProjectRow({ project, index }) {
  const { title, status, budget, deadline } = project;
  const [open, setOpen] = useState(false);
  console.log(project,"ffffff");
  return (
    <Table.row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateTitle(title, 30)}</td>
      <td>{budget}</td>
      <td>{toLocalShortDate(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست پروژه ${title}`}
        >
          <CreateProposal
            onclose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.row>
  );
}

export default ProjectRow;
