import { TArrayInputFormData } from "@/types/components";
import { useFormContext } from "react-hook-form";
import SingleInput from "./SingleInput";
import MultiInput from "./MultiInput";
import { Button } from "../ui/button";
import { AiFillDelete } from "react-icons/ai";
import { useEffect } from "react";
import { emptyData as ed } from "../utils/getEmptyData";
import { localName } from "../utils/getLocalName";
import { fileType } from "../utils/getType";
import { InputFile } from "./FileInput";

const ArrayInput: React.FC<TArrayInputFormData> = (
  props: TArrayInputFormData
) => {
  const { name, data } = props;
  const emptyData = ed[name];
  const { setValue, getValues, watch } = useFormContext();

  useEffect(() => {
    setValue(name, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addInput = () => {
    setValue(name, [...getValues(name), emptyData]);
  };

  const removeInput = (index: number) => {
    const currentDescription = getValues(name);
    currentDescription.splice(index, 1);
    setValue(name, currentDescription);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h1 className="text-2xl font-bold">{localName[name]}</h1>
      {watch(name)?.map((item: any, index: number) => {
        return (
          <div key={index} className="relative border p-2 pt-4 m-2">
            {Object.keys(item).map((key) => {
              if (key === "id") return;
              if ([typeof "a", typeof 1].includes(typeof item?.[key])) {
                if (fileType.includes(`${name}.${key}`)) {
                  return (
                    <InputFile
                      key={key}
                      label={key}
                      name={`${name}.${index}.${key}`}
                      data={item?.[key]}
                    />
                  );
                }
                return (
                  <SingleInput
                    key={key}
                    name={`${name}.${index}.${key}`}
                    label={key}
                    data={item?.[key]}
                  />
                );
              }
              if (typeof item?.[key] === typeof ["a"])
                return (
                  <MultiInput
                    key={key}
                    name={`${name}.${index}.${key}`}
                    data={item?.[key]}
                  />
                );
            })}
            <div className="absolute top-0 right-0">
              <AiFillDelete
                className="text-3xl cursor-pointer hover:bg-gray-200 rounded-full p-1 text-red-600"
                onClick={() => removeInput(index)}
              />
            </div>
          </div>
        );
      })}
      <Button type="button" onClick={addInput}>
        Add Array Input
      </Button>
    </div>
  );
};

export default ArrayInput;
