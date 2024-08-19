import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useFormContext } from "react-hook-form";
const ProductDetails = () => {

  
  const { register, watch } = useFormContext();
  watch([
    "title",
    "description",
    "category",
    "regularPrice",
    "extraPrice",
    "taxAmount",
  ]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        margin: "auto",
        gap: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        {...register("title")}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
      />
      <TextField
        {...register("description")}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
      />
      <TextField
        {...register("category")}
        id="outlined-basic"
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
      />
      <TextField
        {...register("regularPrice")}
        id="outlined-basic"
        label="Regular Price"
        variant="outlined"
        fullWidth
        name="regularPrice"
      />
      <TextField
        {...register("extraPrice")}
        id="outlined-basic"
        label="Extra Price"
        variant="outlined"
        fullWidth
        name="extraPrice"
      />
      <TextField
        {...register("taxAmount")}
        id="outlined-basic"
        label="Tax Amount"
        variant="outlined"
        fullWidth
        name="taxAmount"
      />
    </Box>
  );
};

export default ProductDetails;
