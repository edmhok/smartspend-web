import { Button } from '@mui/material';
import { useState } from 'react';

interface Image {
    dataUrl: string;
}

function ImageUploader() {

    const [image, setImage] = useState<Image | null>(null);

    const saveImage = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {

            // Resize image to 60x60px
            const img = new Image();
            img.src = reader.result as string;

            const canvas = document.createElement('canvas');
            canvas.width = 60;
            canvas.height = 60;

            const ctx = canvas.getContext('2d');
            ctx!.drawImage(img, 0, 0, 60, 60);

            setImage({ dataUrl: canvas.toDataURL() });
            localStorage.setItem('image', JSON.stringify({ dataUrl: reader.result }));
        }
        reader.readAsDataURL(file);
    }

    const loadImage = () => {
        const json = localStorage.getItem('image');
        if (json) {
            setImage(JSON.parse(json));
        }
    }
    // Render uploaded image
    return (
        <div className='flex flex-row items-center'>
            <input type="file" onChange={e => saveImage(e.target.files![0])} />
            <Button onClick={loadImage}>Load Image</Button>
            {image && <img src={image.dataUrl} width={60} height={60} />}

        </div>
    )

}

export default ImageUploader;