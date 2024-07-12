import React from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useChangeProposalApi from "./useChangeProposalStatus";
import RHFselect from "../../ui/RHFselect";
import Loading from "../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useProject from "./useProject";
import { useState } from "react";
const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تائید",
    value: 1,
  },
  {
    label: "تائید شده",
    value: 2,
  },
];
function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { isUpdating, changePropsalStatus } = useChangeProposalApi();
  const quryClient = useQueryClient();


  const [flag, setFlag] = useState(false);
  const onSubmit = (data) => {
    changePropsalStatus(
      {
        id: proposalId,
        data,
      },
      {
        onSuccess: (data) => {
          quryClient
            .invalidateQueries({queryKey:['project',{id:projectId}]})
            .then(setFlag(true));
          onClose();
          console.log(data);
          console.log(flag);
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFselect
        name="status"
        label="تغیر وضعیت"
        register={register}
        required
        options={options}
      />
      <div className="mt-8">
        {isUpdating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary" type="submit">تائید</button>
        )}
      </div>
    </form>
  );
}

export default ChangeProposalStatus;
