import { Button } from "./ui/button";

const SubmitButton: React.FC<any> = (props: any) => {
  const { label } = props;
  return (
    <Button type="submit" className="relative -translate-x-1/2 left-1/2 m-2">
      {label}
    </Button>
  );
};

export default SubmitButton;
