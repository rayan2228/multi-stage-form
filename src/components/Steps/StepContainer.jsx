import ProductDetails from "./ProductDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InventoryDetails from "./InventoryDetails";
import AddAPhoto from "./AddAPhoto";
import Steps from "./Steps";
import { useDispatch } from "react-redux";
import { stepForward } from "../../features/stepCounter/stepCounterSlice";

const StepContainer = () => {
  const dispatch = useDispatch();
  const handleUi = ()=>{
    
  }
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
    >
      <Steps />
      <Box component="form">
        <ProductDetails />
        {/* <InventoryDetails />
        <AddAPhoto /> */}
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" color="error">
            Back
          </Button>
          <Button variant="contained" type="submit">
            Next
          </Button>
          <Button variant="contained" onClick={() => dispatch(stepForward())}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StepContainer;
