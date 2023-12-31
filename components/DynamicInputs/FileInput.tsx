import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { TFileInputProps } from "@/types/components";
import { localName } from "../utils/getLocalName";
import FilePreview from "./FileInput/FilePreview";
import { cloud_name, preset_key } from "@/constants";

export function InputFile(props: TFileInputProps) {
  const { name, data, label, type } = props;
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`;
  const [image, setImage] = useState<string>("");
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
    setImage(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    setLoading(true);
    axios
      .post(url, formData)
      .then((res) => {
        setImage(res.data.secure_url);
        setValue(name, res.data.secure_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center border rounded-md px-2 py-1">
      <div className="grid w-full max-w-sm items-center gap-1.5 m-2">
        <Label htmlFor="picture">{localName[label]}</Label>
        <div className="flex justify-center items-center">
          {!loading ? (
            <FilePreview type={type} data={image} />
          ) : (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          <Input
            type="file"
            className="mx-2"
            accept={accept}
            onChange={handleFile}
          />
        </div>
      </div>
    </div>
  );
}
