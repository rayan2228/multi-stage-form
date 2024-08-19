import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const AddAPhoto = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const { register, watch } = useFormContext();
  const imageFile = watch("images");
  const [imagePreviews, setImagePreviews] = useState([]);
  // console.log(imageFile);

  const handleImagePreviews = (event) => {
    const files = Array.from(event.target.files);
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
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        margin: "auto",
        gap: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          multiple
          name="images"
          {...register("images", { required: true })}
          onChange={(event) => {
            register("image").onChange(event); // Manually trigger change event
            handleImagePreviews(event); // Handle image preview
          }}
        />
      </Button>
      {imagePreviews.length > 0 && (
        <ImageList sx={{}} cols={3}>
          {imagePreviews.map((preview, index) => (
            <ImageListItem key={index}>
              <img src={preview} alt={`Preview ${index}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default AddAPhoto;
