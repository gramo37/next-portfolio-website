import { TWorkExperience } from "@/types/user";

export default function WorkExperience(props: {
  workExperience: TWorkExperience[];
}) {
  const { workExperience } = props;
  return (
    <>
      {workExperience.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.company_name}</p>
            <p>{item.profession}</p>
            <p>{item.duration}</p>
            <ol>
              {item.description.map((point, index) => {
                return <li key={index}>- {point}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </>
  );
}
