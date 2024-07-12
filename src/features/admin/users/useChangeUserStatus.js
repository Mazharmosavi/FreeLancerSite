import { useMutation } from "@tanstack/react-query";
import {changeUserApiStatus } from "../../../services/authService";


export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserApiStatus,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => console.log(err)
  });

  return { isUpdating, changeUserStatus };
}

