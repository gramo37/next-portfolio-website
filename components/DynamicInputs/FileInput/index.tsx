import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { TFileInputProps } from "@/types/components";
import { localName } from "@/components/utils/getLocalName";
import FilePreview from "./FilePreview";
import { preset_key, cloud_name } from "@/constants";

export function InputFile(props: TFileInputProps) {
  const { name, data, label, type } = props;
  const cloudinary_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
  const [url, setURL] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { setValue } = useFormContext();
  let accept = "";
  switch (type) {
    case "image":
      accept = "image/png, image/gif, image/jpeg";
      break;
    case "pdf":
      accept = "application/pdf";
      break;
    default:
      accept = "*";
  }

  useEffect(() => {
    setValue(name, data);
    setURL(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    setLoading(true);
    axios
      .post(cloudinary_url, formData)
      .then((res) => {
        setURL(res.data.secure_url);
        setValue(name, res.data.secure_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center">
      {!loading ? (
        <FilePreview type={type} data={url} />
      ) : (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      <div className="grid w-full max-w-sm items-center gap-1.5 m-2">
        <Label htmlFor="picture">{localName[label]}</Label>
        <Input
          type="file"
          // accept="image/png, image/gif, image/jpeg, application/pdf"
          accept={accept}
          onChange={handleFile}
        />
      </div>
    </div>
  );
}
