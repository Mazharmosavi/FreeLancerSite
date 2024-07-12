import React from "react";
import { useForm } from "react-hook-form";
import RHFselect from "../../../ui/RHFselect";
import Loading from "../../../ui/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";
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
function ChangeUsersStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, // {userId, data: {status:0, 1, 2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFselect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUsersStatus;
