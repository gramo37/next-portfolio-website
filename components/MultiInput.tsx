import React from "react";
import { useFormContext } from "react-hook-form";
import { TMultiLineFormData } from "@/types/components";

const InputArrayForm: React.FC<TMultiLineFormData> = (
  props: TMultiLineFormData
) => {
  const { name } = props;
  const { setValue, getValues, watch } = useFormContext();

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
    <>
      <div className="space-y-2">
        {watch(name)?.map((desc: any, index: any) => (
          <div key={index} className="flex">
            <input value={desc} onChange={(e) => handleOnChange(e, index)} />
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
    </>
  );
};

export default InputArrayForm;
