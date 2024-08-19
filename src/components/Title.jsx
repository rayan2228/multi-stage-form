import { Typography } from "@mui/material";

const Title = ({ text }) => {
  return (
    <Typography
      level="h1"
      style={{
        margin: "auto",
        fontSize: "50px",
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
