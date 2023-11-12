import { TSingleFormData } from "@/types/components";
import { useFormContext } from "react-hook-form";

const SingleInput: React.FC<TSingleFormData> = (props) => {
  const { name, label } = props;
  const { register } = useFormContext();
  return (
    <div className="flex justify-center items-center border border-x-0 border-t-0 border-b-200">
      <label className="text-md mx-2">{label}</label>
      <textarea className="border p-1 rounded-md m-2 w-[70vw]" {...register(name)}/>
    </div>
  );
};

export default SingleInput;
