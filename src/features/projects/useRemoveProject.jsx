import { useMutation, useQueryClient } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { removeProjectApi } from "../../services/projectServices";

export function useRemoveProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log(data), queryClient.invalidateQueries(["owner-projects"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { isDeleting, removeProject };
}
