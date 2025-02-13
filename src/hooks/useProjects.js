import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getProjectsApi } from "../services/projectServices";

export default function useProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  console.log( queryObject);
  const { isLoading, data } = useQuery({
    queryKey: ["projects",queryObject],
    queryFn:()=> getProjectsApi(search),
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
