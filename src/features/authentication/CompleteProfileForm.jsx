import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { completeProfile } from "../../services/authService";
import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      console.log(user, message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        console.log("پروفایل شما در انتظار تائید است");
        return;
      }
      if (user.role == "OWNER") return navigate("/OWNER");
      if (user.role == "FREELANCER") return navigate("/FREELANCER");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center w-96">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <TextField
            label={"نام و نام خانوادگی"}
            name="name"
            register={register}
            required
            validationScheme={{
              required: "درج نام و نام خانوادگی ضروری است",
              message: "نام و نام خانوادگی نامعتبر است",
            }}
            errors={errors}
          />
          <TextField
            label={"ایمیل"}
            name="email"
            register={register}
            required
            validationScheme={{
              required: "درج ایمیل ضروری است",
              message: "ایمیل نامعتبر است",
            }}
            errors={errors}
          />

          <div className="flex flex-col items-center justify-center ">
            <div className="flex gap-x-8">
              <RadioInput
                label={"کارفرما"}
                value={"OWNER"}
                register={register}
                id={"OWNER"}
                name={"role"}
                htmlFor={"OWNER"}
                watch={watch}
                validationScheme={{
                  required: "انتخاب نقش ضرروی است",
                }}
                errors={errors}
              />
              <RadioInput
                label={"فریلنسر"}
                value={"FREELANCER"}
                register={register}
                id={"FREELANCER"}
                name={"role"}
                htmlFor={"FREELANCER"}
                watch={watch}
                validationScheme={{
                  required: "انتخاب نقش ضرروی است",
                }}
                errors={errors}
              />
            </div>

            {errors && errors?.["role"] && (
              <span className="text-error">{errors["role"]?.message}</span>
            )}
          </div>
          <button type="submit" className="btn btn--primary">
            تائید
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
