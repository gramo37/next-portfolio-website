import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { userRoute } from "@/constants";

export default function useSubmitData(formType: string) {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: any) => {
      return await axios.post(`${userRoute}?form=${formType}`, data);
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Success",
        description: "Data successfully updated",
      });
    },
  });
}
