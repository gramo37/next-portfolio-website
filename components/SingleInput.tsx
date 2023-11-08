import { TSingleFormData } from "@/types/components";
import { useFormContext } from "react-hook-form";

const SingleInput: React.FC<TSingleFormData> = (props) => {
  const { name, label } = props;
  const { register } = useFormContext();
  return (
    <div>
      <label>{label}</label>
      <input {...register(name)}/>
    </div>
  );
};

export default SingleInput;
