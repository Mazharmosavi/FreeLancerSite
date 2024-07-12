import React from "react";
import Table from "../../ui/Table";
import truncateTitle from "../../utils/truncateTitle";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";
import Loading from "../../ui/Loading";

function ProposalTable({ proposal, index }) {
  console.log(proposal);
  const [open, setOpen] = useState(false);
  const proposalId = proposal._id;
  const [statusStyle, setProposalStyle] = useState([
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
  ]);

  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateTitle(proposal.description, 50)}</td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <button className="text-primary-800" onClick={() => setOpen(true)}>
          تغیر وضعیت
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغیر وضعیت درخواست"
        >
          <ChangeProposalStatus
            setProposalStyle={setProposalStyle}
            proposalId={proposalId}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.row>
  );
}

export default ProposalTable;
