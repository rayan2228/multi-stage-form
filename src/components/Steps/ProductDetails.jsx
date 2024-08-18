import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const ProductDetails = () => {
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
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Category"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Regular Price"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Extra Price"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Tax Amount"
        variant="outlined"
        fullWidth
        required
      />
    </Box>
  );
};

export default ProductDetails;
