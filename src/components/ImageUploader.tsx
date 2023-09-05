import { Button } from "@mui/material";
import { useState } from "react";

interface Image {
  dataUrl: string;
}

function ImageUploader() {
  const [photos, setPhotos] = useState(null);

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setPhotos(imageFile);
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
      {photos && (
        <div style={{ marginTop: 10 }}>
          <img
            src={URL.createObjectURL(photos)}
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
