import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { HiArrowRight } from "react-icons/hi";
import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function CheckOTP({ phoneNumber, setStep, sendOtpHandler, result }) {
  const [otp, setOTP] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber, otp });
      console.log(data, "boom");
      if (data.data.user.isActive === false)
        return navigate("/complete-profile");
      if (data.data.user.role === "OWNER") return navigate("/owner");
      if (data.data.user.role === "FREELANCER") return navigate("/freelancer");
      if (data.data.user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    },
    { time }
  );

  return (
    <div className="mt-5">
      <button onClick={() => setStep(1)} className="w-6 h-6">
        {<HiArrowRight />}
      </button>
      <div>
        {time > 0 ? (
          <p>{time}ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button className="text-primary-900" onClick={sendOtpHandler}>
            ارسال مجدد کد
          </button>
        )}
      </div>
      {result && (
        <p className="flex items-center gap-x-2 my-4">
          <span>{result?.data?.data.message}</span>
          <button onClick={() => setStep(1)}>
            {<CiEdit className="w-6 h-6 text-primary-900" />}
          </button>
        </p>
      )}
      <form onSubmit={checkOtpHandler} className="space-y-8">
        <p className="font-bold text-secondary-800">کد تائید را وارد کنید</p>

        <OTPInput
          value={otp}
          onChange={setOTP}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type={"number"} {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center "
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />

        <button type={"submit"} className="btn btn--primary">
          تائید
        </button>
      </form>
    </div>
  );
}

export default CheckOTP;
