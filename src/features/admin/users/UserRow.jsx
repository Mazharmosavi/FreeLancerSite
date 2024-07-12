import React from "react";
import Table from "../../../ui/Table";
import truncateTitle from "../../../utils/truncateTitle";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import ChangeUsersStatus from "./ChangeUserStatus";

const userStatus = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تائید",
    className: "badge--secondary",
  },
  {
    label: "تائید شده",
    className: "badge--success",
  },
];

function UserRow({ user, index }) {
  const { status } = user;
  const [open, setOpen] = useState(false);
  return (
    <Table.row key={user._id}>
      <td>{index + 1}</td>
      <td>{truncateTitle(user.name, 30)}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${userStatus[status].className}`}>
          {userStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={"تغیر وضعیت کاربر"}
        >
          <ChangeUsersStatus user={user} userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.row>
  );
}

export default UserRow;
