import React from "react";
import { useFormContext } from "react-hook-form";
import { TMultiLineFormData } from "@/types/components";
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const InputArrayForm: React.FC<TMultiLineFormData> = (
  props: TMultiLineFormData
) => {
  const { name } = props;
  const { setValue, getValues, watch } = useFormContext();
  const [isOpen, setIsOpen] = React.useState(false)

  const addInput = () => {
    setValue(name, [...getValues(name), ""]);
  };

  const removeInput = (index: number) => {
    const currentDescription = getValues(name);
    currentDescription.splice(index, 1);
    setValue(name, currentDescription);
  };

  const handleOnChange = (e: any, index: number) => {
    const currentDescription = getValues(name);
    currentDescription[index] = e.target.value;
    setValue(name, [...currentDescription]);
  };

  return (
    <div className="flex flex-col justify-center items-center border border-x-0 border-t-0 border-b-200 p-2">
      <h1 className="text-lg">{name}</h1>
      <div className="space-y-2">
        {watch(name)?.map((desc: any, index: any) => (
          <div key={index} className="flex">
            <input className="border p-1 rounded-md" value={desc} onChange={(e) => handleOnChange(e, index)} />
            <button
              type="button"
              onClick={() => removeInput(index)}
              className="ml-2 p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addInput}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add Input
      </button>
    </div>
  );
};

export default InputArrayForm;
