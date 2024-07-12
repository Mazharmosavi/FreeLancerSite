import React from "react";
import Stat from "./Stat";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
function OwnerDashBordStats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status == 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );
  return (
    <div className="grid grid-cols-2 gap-8 ">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="h-20 w-20" />}
      />
      <Stat
        color="green"
        title="پروژه های واگزار شده"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="h-20 w-20" />}
      />
      <Stat
        color="yellow"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="h-20 w-20" />}
      />
    </div>
  );
}

export default OwnerDashBordStats;
