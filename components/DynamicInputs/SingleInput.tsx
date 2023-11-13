import { TSingleFormData } from "@/types/components";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { localName } from "../utils/getLocalName";

const SingleInput: React.FC<TSingleFormData> = (props) => {
  const { name, label, data } = props;
  const { register, setValue } = useFormContext();
  useEffect(() => {
    setValue(name, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center gap-1.5 my-2">
      <div>
        <Label htmlFor="message">{localName[label]}</Label>
        <Input placeholder={`Add ${localName[label]}`} className="md:w-[70vw] w-full mx-3" {...register(name)} />
      </div>
    </div>
  );
};

export default SingleInput;
