import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../services/authService";

export default function useLogoutApi() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutate: LogoutApi } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
    onError: (err) => console.log(err),
  });
  return { isLoading, LogoutApi };
}
