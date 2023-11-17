import { TSkill } from "@/types/user";

export default function Skills(props: { skills: TSkill[] }) {
  const { skills } = props;
  return (
    <>
      {skills.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.skill_name}</p>
            <p>{item.proficiency}</p>
            <p>{item.maximum_proficiency}</p>
          </div>
        );
      })}
    </>
  );
}
