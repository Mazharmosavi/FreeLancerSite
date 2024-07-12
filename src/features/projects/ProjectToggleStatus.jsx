import React from "react";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import useToggleProjectApi from "./useToggleProjectApi";
import { set } from "react-hook-form";
import Loading from "../../ui/Loading";

function ProjectToggleStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );
  const { isUpdating, toggleProjectStatus } = useToggleProjectApi();
  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    console.log(status);
    console.log(project.status);
    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      },
      {
        onSuccess: () => {
          setEnabled((prev) => !prev);
          console.log(enabled);
        },
      }
    );
  };
  if (isUpdating) return <Loading />;
  return (
    <Switch
      checked={enabled}
      onChange={() => toggleHandler()}
      className={`${
        enabled ? "bg-primary-800" : "bg-primary-200"
      } group inline-flex h-6 w-11 items-center rounded-full transition data-checked:bg-blue-600`}
    >
      <span
        className={`${
          enabled ? "-translate-x-1" : "-translate-x-5"
        } size-4 -translate-x-1 rounded-full bg-secondary-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7 w-5 h-5`}
      />
    </Switch>
  );
}

export default ProjectToggleStatus;
