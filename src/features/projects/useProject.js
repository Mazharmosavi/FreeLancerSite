import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectServices";

export default function useProject() {
  const { id } = useParams();
  console.log(id, "out");
  const { isLoading, data } = useQuery({
    queryKey: ["project", {id}],
    queryFn: () => getProjectApi({id}),
    retry: false,
  });
  const { project } = data || {};
  return { isLoading, project };
}
