import { TEducation } from "@/types/user";

export default function Education(props: { education: TEducation[] }) {
  const { education } = props;
  return (
    <>
      {education.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.degree_name}</p>
            <p>{item.university_name}</p>
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
