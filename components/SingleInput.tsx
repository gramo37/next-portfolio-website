import { TSingleFormData } from "@/types/components";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const SingleInput: React.FC<TSingleFormData> = (props) => {
  const { name, label } = props;
  const { register } = useFormContext();
  return (
    <div className="flex flex-col items-center gap-1.5 my-2">
      <div>
        <Label htmlFor="message">{label}</Label>
        <Input className="md:w-[70vw] w-full mx-3" {...register(name)}/>
      </div>
    </div>
  );
};

export default SingleInput;
