import React from "react";
import Stat from "../owner/Stat";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const numOfAcceptedproposals = proposals.filter((p) => p.status === 2).length;
  const balance = proposals
    .filter((p) => p.status == 2)
    .reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-2 gap-8 ">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="h-20 w-20" />}
      />
      <Stat
        color="yellow"
        title="درخواست های قبول شده"
        value={numOfAcceptedproposals}
        icon={<HiCollection className="h-20 w-20" />}
      />
      <Stat
        color="green"
        title="ارزش درخواستهای قبول شده"
        value={balance}
        icon={<HiCurrencyDollar className="h-20 w-20" />}
      />
    </div>
  );
}
export default Stats;
