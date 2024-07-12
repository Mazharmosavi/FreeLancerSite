import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { getOtp } from "../../services/authService";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

function SendOTP({ isPending, register, sendOtpHandler }) {
  console.log(register)
  return (
    <div className="mt-5 w-80">
      {isPending ? (
        <Loading />
      ) : (
        <form className="space-y-8 " onSubmit={sendOtpHandler}>
          <TextField
            name={"phoneNumber"}
            register={register}
            label={"شماره موبایل"}
          />
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تائید
          </button>
        </form>
      )}
    </div>
  );
}

export default SendOTP;
