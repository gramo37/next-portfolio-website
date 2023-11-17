import { TProject } from "@/types/user";

export default function Projects(props: { project: TProject[] }) {
  const { project } = props;
  return (
    <>
      {project.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.project_name}</p>
            <ol>
              {item.description.map((point, index) => {
                return <li key={index}>- {point}</li>;
              })}
            </ol>
            <p>{item.techStack}</p>
            <p>{item.project_link}</p>
            <p>{item.background_img_url}</p>
          </div>
        );
      })}
    </>
  );
}
