import { editeProjectApi } from "../../services/projectServices";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export default function useEditeProject() {
  const quryClient = useQueryClient();
  const { isPending: isEditing, mutate: editeProject } = useMutation({
    mutationFn: editeProjectApi,
    onSuccess: (data) => {
      console.log(data);
      quryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => console.log(error),
  });

  return { isEditing, editeProject };
}
