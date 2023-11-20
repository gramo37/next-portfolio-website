import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ImagePreview({ data }: { data: string }) {
  return (
    <Avatar>
      <AvatarImage src={data} alt="" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
}
