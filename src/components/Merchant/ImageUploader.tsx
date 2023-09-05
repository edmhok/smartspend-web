import { Button } from "@mui/material";
import { useState } from "react";

interface Image {
  dataUrl: string;
}

function ImageUploader() {
  const [image, setImage] = useState<Image | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const saveImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      // Resize image to 60x60px
      const img = new Image();
      img.src = reader.result as string;

      const canvas = document.createElement("canvas");
      canvas.width = 100;
      canvas.height = 100;

      const ctx = canvas.getContext("2d");
      ctx!.drawImage(img, 0, 0, 60, 60);

      setImage({ dataUrl: canvas.toDataURL() });
      localStorage.setItem("image", JSON.stringify({ dataUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const loadImage = () => {
    const json = localStorage.getItem("image");
    if (json) {
      setImage(JSON.parse(json));
    }
  };
  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };
  return (
    <div className="flex flex-col justify-start">
      <div className="text-md pb-5">Upload your ID here</div>
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div style={{ marginTop: 10 }}>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            width={200}
            height={100}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
