import ArrayInput from "./ArrayInput";
import MultiInput from "./MultiInput";
import SingleInput from "./SingleInput";
import {emptyData} from "./utils/getEmptyData"

export default function ObjectInput(props: any) {
  const { user } = props;
  return (
    <>
      {Object.keys(user).map((key) => {
        if (key === "id") return;
        if ([typeof "a", typeof 1].includes(typeof user?.[key]))
          return <SingleInput key={key} name={key} label={key} />;
        if (typeof user?.[key] === typeof ["a"])
          return <MultiInput key={key} name={key} />;
        if (typeof user?.[key] === typeof [{ a: "b" }]) {
          const empty_data = emptyData[key]
          return <ArrayInput key={key} name={key} emptyData={empty_data} />;
        }
      })}
    </>
  );
}
