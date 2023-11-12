import React from "react";
import { useFormContext } from "react-hook-form";
import { TMultiLineFormData } from "@/types/components";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AiFillDelete } from "react-icons/ai";

const InputArrayForm: React.FC<TMultiLineFormData> = (
  props: TMultiLineFormData
) => {
  const { name } = props;
  const { setValue, getValues, watch } = useFormContext();
  const [isOpen, setIsOpen] = React.useState(false);

  const addInput = () => {
    setValue(name, [...getValues(name), ""]);
    setIsOpen(true);
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
    <div className="flex gap-2 justify-center items-start border border-x-0 border-t-0 border-b-200 p-2">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col space-y-2 md:w-[70vw] w-full mx-3"
      >
        <div className="flex items-center justify-between space-x-4 px-4 py-1 border">
          <h4 className="text-sm font-semibold">{name}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2 w-full">
          {watch(name)?.map((desc: any, index: any) => (
            <div
              key={index}
              className="grid border w-full items-center relative"
            >
              <Textarea
                value={desc}
                onChange={(e) => handleOnChange(e, index)}
                className="w-[94%] border border-y-0 border-l-0 border-r-1 rounded-none"
                placeholder={`Enter ${name}`}
              />
              <div className="absolute top-0 right-0">
                <AiFillDelete
                  className="text-3xl cursor-pointer hover:bg-gray-200 rounded-full p-1 text-red-600"
                  onClick={() => removeInput(index)}
                />
              </div>
            </div>
          ))}
        </CollapsibleContent>
        <Button type="button" onClick={addInput}>
          Add Input
        </Button>
      </Collapsible>
    </div>
  );
};

export default InputArrayForm;
