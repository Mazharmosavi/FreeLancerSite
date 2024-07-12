import React from "react";
import { useState } from "react";
import CheckOTP from "../features/authentication/CheckOTP";
import SendOTP from "../features/authentication/SendOTP";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { register, handleSubmit, getValues } = useForm();
  const { isPending, data, error, mutateAsync, mutate } = useMutation({
    mutationFn: getOtp,
  });
  console.log(data, "data");
  console.log(isPending, "pnd");
  const sendOtpHandler = async (data) => {
    try {
      const message = await mutateAsync(data);
      setStep(2);
      console.log(message);
    } catch (error) {
      console.log(error, data);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTP
            isPending={isPending}
            sendOtpHandler={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTP
            result={data}
            phoneNumber={getValues("phoneNumber")}
            setStep={setStep}
            sendOtpHandler={handleSubmit(sendOtpHandler)}
          />
        );
      default:
        return null;
    }
  };
  return <div className="">{renderStep()}</div>;
}

export default AuthContainer;
