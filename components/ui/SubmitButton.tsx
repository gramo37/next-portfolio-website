import { Button } from "./button";

const SubmitButton: React.FC<any> = (props: any) => {
  const { label, className } = props;
  return (
    <Button type="submit" className={`relative -translate-x-1/2 left-1/2 m-2 ` + className} >
      {label}
    </Button>
  );
};

export default SubmitButton;
