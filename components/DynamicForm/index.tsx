import ArrayInput from "../DynamicInputs/ArrayInput";
import MultiInput from "../DynamicInputs/MultiInput";
import SingleInput from "../DynamicInputs/SingleInput";
import { arrayOfObjectsType } from "../utils/getType";

export default function Formview(props: any) {
  const { data, name } = props;
  const dataType = typeof data;

  let result: any;

  if (Array.isArray(data)) {
    if (arrayOfObjectsType.includes(name)) {
      result = <ArrayInput name={name} data={data} />;
    } else {
      result = <MultiInput name={name} data={data} />;
    }
    // if (isArrayofObjectsOrStrings(data) === "array of strings")
    //   result = <MultiInput name={name} data={data}/>;
    // else result = <ArrayInput name={name} data={data} emptyData={{}} />;
  } else if (dataType === "object") {
    result = Object.keys(data).map((key) => {
      return <Formview name={key} key={key} data={data?.[key]} />;
    });
  } else if (dataType === "string") {
    result = <SingleInput name={name} label={name} data={data} />;
  } else {
    result = <div>Something Went wrong</div>;
  }

  return result;
}
