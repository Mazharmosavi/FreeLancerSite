import React, { useState } from "react";
import useProposals from "../../hooks/useProposals";
import Loading from "../../ui/Loading";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalTabel() {
  const { isLoading, proposals } = useProposals();
  console.log(proposals);

  if (isLoading) return <Loading />;
  if (!proposals) return <>پروپوزالی وجود ندارد</>;

  return (
    <div className="flex flex-col gap-y-6 w-full ">
      <Table>
        <Table.header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه ها</th>
          <th>وضعیت</th>
        </Table.header>

        <Table.body>
          {proposals.map((proposal, index) => (
            <ProposalRow proposal={proposal} index={index} />
          ))}
        </Table.body>
      </Table>
    </div>
  );
}

export default ProposalTabel;
