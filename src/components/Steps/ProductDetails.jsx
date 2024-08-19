import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useFormContext } from "react-hook-form";
const ProductDetails = () => {
  const { register } = useFormContext();
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
      <TextField
        {...register("title", { required: true })}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
      />
      <TextField
        {...register("description", { required: true })}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
      />
      <TextField
        {...register("category", { required: true })}
        id="outlined-basic"
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
      />
      <TextField
        {...register("regularPrice", { required: true })}
        id="outlined-basic"
        label="Regular Price"
        variant="outlined"
        fullWidth
        name="regularPrice"
      />
      <TextField
        {...register("extraPrice", { required: true })}
        id="outlined-basic"
        label="Extra Price"
        variant="outlined"
        fullWidth
        name="extraPrice"
      />
      <TextField
        {...register("taxAmount", { required: true })}
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
