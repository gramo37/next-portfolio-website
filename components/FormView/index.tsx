import ArrayInput from "../ArrayInput";
import MultiInput from "../MultiInput";
import SingleInput from "../SingleInput";
import { arrayOfObjectsType } from "../utils/getType";

function isArrayofObjectsOrStrings(arr: any[]): string | false {
  if (!Array.isArray(arr)) {
    return false; // Not an array
  }

  if (arr.length === 0) {
    // If the array is empty, you may need additional logic to handle the case.
    return false;
  }

  // Check the type of the first element
  const firstElementType = typeof arr[0];

  if (firstElementType === "object") {
    // Check if it is an object (could be an array or any other object)
    if (Array.isArray(arr[0])) {
      return "array of arrays";
    } else {
      return "array of objects";
    }
  } else if (firstElementType === "string") {
    return "array of strings";
  } else {
    return false; // Neither an array of objects nor an array of strings
  }
}

export default function Formview(props: any) {
  const { data, name } = props;
  const dataType = typeof data;

  // Todos for ArrayInput
  // 1) EmptyData

  // Todos
  // 1) What to do if array is empty

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
