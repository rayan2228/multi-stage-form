import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useFormContext } from "react-hook-form";

const InventoryDetails = () => {
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
        {...register("weight")}
        name="weight"
        id="outlined-basic"
        label="Weight"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...register("length")}
        name="length"
        id="outlined-basic"
        label="Length"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...register("height")}
        name="height"
        id="outlined-basic"
        label="Height"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...register("width")}
        name="width"
        id="outlined-basic"
        label="Width"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...register("totalStock")}
        name="totalStock"
        id="outlined-basic"
        label="Total Stock"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default InventoryDetails;
