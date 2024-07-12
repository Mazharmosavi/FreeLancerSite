import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {changeProposalStatusApi} from "../../services/proposalServices.js/changeProposalServices";

export default function useChangeProposalApi(){
    const{isLoading:isUpdating,mutate:changePropsalStatus}=useMutation({
        mutationFn:changeProposalStatusApi,
        onSuccess:(data)=>console.log(data),
        reset:true,
        onError:(err)=>console.log(err),
    });
    return{isUpdating,changePropsalStatus}
}