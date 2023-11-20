import ArrayInput from "../DynamicInputs/ArrayInput";
import { InputFile } from "../DynamicInputs/FileInput";
import MultiInput from "../DynamicInputs/MultiInput";
import SingleInput from "../DynamicInputs/SingleInput";
import { arrayOfObjectsType, pdfType, imageType } from "../utils/getType";

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
  } else if (dataType === "object") {
    result = Object.keys(data).map((key) => {
      return <Formview name={key} key={key} data={data?.[key]} />;
    });
  } else if (dataType === "string") {
    if (imageType.includes(name))
      result = (
        <InputFile type="image" name={name} data={data} label="profile_photo" />
      );
    else if (pdfType.includes(name))
      result = (
        <InputFile type="pdf" name={name} data={data} label="resume_link" />
      );
    else result = <SingleInput name={name} label={name} data={data} />;
  } else {
    result = <div>Something Went wrong</div>;
  }

  return result;
}
