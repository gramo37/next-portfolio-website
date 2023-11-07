import { getUserInfo } from "@/server_utils/user";

export const dynamic = 'force-dynamic'
export const revalidate = 0

// export const revalidate = 3600;

export default async function Home() {
  const userInfo = await getUserInfo();
  console.log(userInfo, "Hello");
  if (!userInfo) return <h1>User not found</h1>;
  const {
    email,
    name,
    description,
    profession,
    twitter_link,
    linkedin_link,
    github_link,
    phone,
    education,
    skills,
    project,
    workExperience,
  } = userInfo;
  return (
    <div className="border border-red-600 m-2 p-2">
      <h1>{name}</h1>
      <p>{email}</p>
      <ol>
        {description.map((item, index) => {
          return <li key={index}>- {item}</li>;
        })}
      </ol>
      <p>{profession}</p>
      <p>{twitter_link}</p>
      <p>{linkedin_link}</p>
      <p>{github_link}</p>
      <p>{phone}</p>
      <br />
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
      <br />
      {skills.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.skill_name}</p>
            <p>{item.proficiency}</p>
            <p>{item.maximum_proficiency}</p>
          </div>
        );
      })}
      <br />
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
      <br />
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
    </div>
  );
}
