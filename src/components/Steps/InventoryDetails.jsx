import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const InventoryDetails = () => {
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
        label="Weight"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Length"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Height"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Width"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="outlined-basic"
        label="Total Stock"
        variant="outlined"
        fullWidth
        required
      />
    </Box>
  );
};

export default InventoryDetails;
