import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useCreateProposal from "../../hooks/useCreateProposals";
import TextField from "../../ui/TextField";

function CreateProposal({ onclose,projectId }) {
  console.log(projectId, "jjjjjjj");
  const {
    register,
    required,
    validationScheme,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isPending, createProposal } = useCreateProposal();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    console.log(data);
    const newProposals = { ...data, projectId };
    console.log(newProposals);
    createProposal({ ...newProposals }, { onSuccess: () => onclose() });
  };
  return (
    <form
      className="space-y-4 flex flex-col  "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label={"توضیحات"}
        name={"description"}
        register={register}
        required
        type={"text"}
        validationScheme={{
          required: "درج توضیحات ضروری است",
          vlaue: 10,
          message: "توضیحات کوتاه است",
        }}
        errors={errors}
      />
      <TextField
        label={"قیمت"}
        name={"price"}
        register={register}
        required
        type={"number"}
        validationScheme={{
          required: "درج قیمت ضروری است",
          vlaue: 5,
          message: "قیمت نامعتبر است",
        }}
        errors={errors}
      />
      <TextField
        label={"مدت زمان"}
        name={"duration"}
        register={register}
        required
        type={"number"}
        validationScheme={{
          required: "درج مدا زمان ضروری است",
          vlaue: 0,
          message: "مدت زمان نامعتبر است.",
        }}
        errors={errors}
      />

      <button className="btn btn--primary mt-5" type="submit">
        ثبت درخواست
      </button>
    </form>
  );
}

export default CreateProposal;
