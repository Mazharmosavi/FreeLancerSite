import { useQueries, useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectServices";
import { getUser } from "../../services/authService";

export function useOwnerProjects(){
    const {data,isLoading} = useQuery({
        queryKey:["owner-projects"],
        queryFn:getOwnerProjectsApi,
    })
    
    const {projects} = data||{};
    return{projects,isLoading}
}


export function useUser(){
    return useQuery({
        queryKey:["get-user"],
        queryFn:getUser,
        retry:false,
        refetchOnWindowFocus:true,
    })
}

