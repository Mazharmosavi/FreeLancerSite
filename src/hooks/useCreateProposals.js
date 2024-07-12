import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../services/proposalServices.js/changeProposalServices";

export default function useCreateProposal() {
  const quryClent = useQueryClient();
  const { isPending, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      console.log(data);
      quryClent.invalidateQueries({ queryKey: ["proposals"] });
    },
    onError: (err) => console.log(err),
  });
  return { isPending, createProposal };
}
