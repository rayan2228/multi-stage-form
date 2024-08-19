export const handleImagePreviews = (files, setImagePreviews) => {
    const previews = files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(previews).then((images) => setImagePreviews(images));
  };
  
