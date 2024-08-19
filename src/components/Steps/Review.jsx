import { useFormContext } from "react-hook-form";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { handleImagePreviews } from "../../utils/imagePreview";
import { ImageList, ImageListItem } from "@mui/material";

const Review = () => {
  const { watch } = useFormContext();
  const {
    title,
    description,
    category,
    regularPrice,
    extraPrice,
    taxAmount,
    weight,
    height,
    length,
    width,
    totalStock,
    images,
  } = watch();
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    if (images && images.length > 0) {
      handleImagePreviews(Array.from(images), setImagePreviews);
    } else {
      setImagePreviews([]);
    }
  }, [images]);

  return (
    <Card>
      {imagePreviews.length > 0 && (
        <ImageList sx={{}} cols={3}>
          {imagePreviews.map((preview, index) => (
            <ImageListItem key={index}>
              <img src={preview} alt={`Preview ${index}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {title}
        </Typography>
        <Typography gutterBottom>Description : {description}</Typography>
        <Typography gutterBottom component="div">
          Category : {category}
        </Typography>
        <Typography gutterBottom component="div">
          Regular Price : {regularPrice}
        </Typography>
        <Typography gutterBottom component="div">
          Extra Price : {extraPrice}
        </Typography>
        <Typography gutterBottom component="div">
          Tax Amount : {taxAmount}
        </Typography>
        <Typography gutterBottom component="div">
          Weight : {weight}
        </Typography>
        <Typography gutterBottom component="div">
          Length : {length}
        </Typography>
        <Typography gutterBottom component="div">
          Height : {height}
        </Typography>
        <Typography gutterBottom component="div">
          Width : {width}
        </Typography>
        <Typography gutterBottom component="div">
          Total Stock : {totalStock}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Review;
