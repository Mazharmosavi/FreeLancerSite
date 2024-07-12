import React, { useEffect, useRef } from "react";
import truncateTitle from "../../utils/truncateTitle";
import toLocalShortDate from "../../utils/toLocalShortDate";
import Table from "../../ui/Table";
import { useState } from "react";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useRemoveProject } from "./useRemoveProject";
import CreateProject from "./CreateProject";
import ProjectToggleStatus from "./ProjectToggleStatus";
import { Link } from "react-router-dom";

function TableRow({ project, index }) {
  const [isEditeOpen, setIsEditeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleteing, removeProject } = useRemoveProject();
  

  return (
    <Table.row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateTitle(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{project.budget}</td>
      <td>{toLocalShortDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[300px]">
          {project.tags.map((tag) => {
            return (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <div className="flex ">
          {project.status == "OPEN" ? (
            <span className="badge badge--success ml-2 ">باز</span>
          ) : (
            <span className="badge badge--danger ml-2">بسته</span>
          )}
          <ProjectToggleStatus project={project} />
        </div>
      </td>
      <td>
        <button onClick={() => setIsEditeOpen(true)}>
          <TbPencilMinus className="w-5 h-5 text-primary-900" />
        </button>
        <>
          <Modal
            open={isEditeOpen}
            title="modal title"
            onClose={() => setIsEditeOpen(false)}
          >
            <CreateProject
              onclose={() => setIsEditeOpen(false)}
              projectEdite={project}
            />
          </Modal>
        </>
        <button onClick={() => setIsDeleteOpen(true)}>
          <HiOutlineTrash className=" h-5 w-5 text-error" />
        </button>
        <>
          <Modal
            open={isDeleteOpen}
            title={`حذف ${project.title}`}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              resourceName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              disabled={false}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
            />
          </Modal>
        </>
      </td>
      <td>
        <Link to={project._id} className={"flex justify-center"}>
              <HiEye className="h-5 w-5 text-primary-800"/>
        </Link>
      </td>
    </Table.row>
  );
}

export default TableRow;
