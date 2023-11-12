import { TArrayInputFormData } from "@/types/components";
import { useFormContext } from "react-hook-form";
import SingleInput from "./SingleInput";
import MultiInput from "./MultiInput";

const ArrayInput: React.FC<TArrayInputFormData> = (
  props: TArrayInputFormData
) => {
  const { name, emptyData } = props;
  const { setValue, getValues, watch } = useFormContext();

  const addInput = () => {
    setValue(name, [...getValues(name), emptyData]);
  };

  const removeInput = (index: number) => {
    const currentDescription = getValues(name);
    currentDescription.splice(index, 1);
    setValue(name, currentDescription);
  };

  return (
    <div className="flex flex-col justify-center items-center relative pt-5">
      <h1 className="text-2xl font-bold">{name}</h1>
      {watch(name)?.map((item: any, index: number) => {
        return (
          <div key={index}>
            {Object.keys(item).map((key) => {
              if (key === "id") return;
              if ([typeof "a", typeof 1].includes(typeof item?.[key]))
                return (
                  <SingleInput
                    key={key}
                    name={`${name}.${index}.${key}`}
                    label={key}
                  />
                );
              if (typeof item?.[key] === typeof ["a"])
                return (
                  <MultiInput key={key} name={`${name}.${index}.${key}`} />
                );
            })}
            <button
              type="button"
              onClick={() => removeInput(index)}
              className="ml-2 p-2 bg-red-500 text-white rounded absolute top-3 right-5"
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={addInput}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Add Array Input
      </button>
    </div>
  );
};

export default ArrayInput;
