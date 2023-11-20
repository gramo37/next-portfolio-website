import ImagePreview from "./ImagePreview";
import PDFPreview from "./PDFPreview";

interface TFilePreview { 
    data: string; 
    type: string; 
}

export default function FilePreview(props: TFilePreview) {
  const { data, type } = props;
  if(type === "image" && data) return <ImagePreview data={data} />
  else if(type === "pdf" && data) return <PDFPreview data={data}/>
  return null;
}
