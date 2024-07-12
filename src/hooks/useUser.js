import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authService";

export default function () {
  const { isLoading, data } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
    retry: false,
  });
  const { user } = data || {};
  return { user, isLoading };
}
