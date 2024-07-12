import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectServices";
export default function useProjectApi() {

  const quryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log(data);
      quryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => console.log(error),
  });
  
  return { isCreating, createProject };
}
