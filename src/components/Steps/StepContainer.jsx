import ProductDetails from "./ProductDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InventoryDetails from "./InventoryDetails";
import AddAPhoto from "./AddAPhoto";
import Steps from "./Steps";
import { useDispatch, useSelector } from "react-redux";
import {
  stepBackward,
  stepForward,
  stepRest,
} from "../../features/stepCounter/stepCounterSlice";
import Review from "./Review";
import { useForm, FormProvider } from "react-hook-form";
import { addProduct } from "../../features/productsData/productDataSlice";
import Title from "../Title";
import { Bounce, ToastContainer, toast } from "react-toastify";
const StepContainer = () => {
  const dispatch = useDispatch();
  let stepValue = useSelector((state) => state.stepCounter.step) || false;
  const stepsNameLength = useSelector(
    (state) => state.stepCounter.stepsName.length - 1
  );
  const handleUi = () => {
    switch (stepValue) {
      case false:
        return <ProductDetails />;
      case 1:
        return <InventoryDetails />;
      case 2:
        return <AddAPhoto />;
      case 3:
        return <Review />;
    }
  };

  const methods = useForm();
  const onSubmit = (data) => {
    dispatch(addProduct(data));
    dispatch(stepRest());
    methods.reset();
    toast.success("Product added successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleNext = () => {
    const productDetails = methods.watch();
    let flag = true;
    for (let key in productDetails) {
      if (!productDetails[key]) {
        flag = false;
      }
    }
    if (flag) {
      dispatch(stepForward());
    } else {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        margin: "50px auto",
        gap: "20px",
      }}
    >
      <ToastContainer />
      <Title text={"Add A Product"} />
      <Steps />
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
          {handleUi()}
          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            {stepValue && (
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(stepBackward())}
              >
                Back
              </Button>
            )}
            {stepValue === stepsNameLength ? (
              <Button
                variant="contained"
                color="success"
                type="submit"
                key={"submit"}
              >
                Add Product
              </Button>
            ) : (
              <Button
                variant="contained"
                type="button"
                onClick={() => handleNext()}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default StepContainer;
