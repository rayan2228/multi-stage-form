import { Box, ImageList, ImageListItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { handleImagePreviews } from "../../utils/imagePreview";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalContainer = ({ handleClose, product, open }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  useEffect(() => {
    if (product.images && product.images.length > 0) {
      handleImagePreviews(Array.from(product.images), setImagePreviews);
    } else {
      setImagePreviews([]);
    }
  }, [product.images]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
              {product.title}
            </Typography>
            <Typography gutterBottom>
              Description : {product.description}
            </Typography>
            <Typography gutterBottom component="div">
              Category : {product.category}
            </Typography>
            <Typography gutterBottom component="div">
              Regular Price : {product.regularPrice}
            </Typography>
            <Typography gutterBottom component="div">
              Extra Price : {product.extraPrice}
            </Typography>
            <Typography gutterBottom component="div">
              Tax Amount : {product.taxAmount}
            </Typography>
            <Typography gutterBottom component="div">
              Weight : {product.weight}
            </Typography>
            <Typography gutterBottom component="div">
              Length : {product.length}
            </Typography>
            <Typography gutterBottom component="div">
              Height : {product.height}
            </Typography>
            <Typography gutterBottom component="div">
              Width : {product.width}
            </Typography>
            <Typography gutterBottom component="div">
              Total Stock : {product.totalStock}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalContainer;
