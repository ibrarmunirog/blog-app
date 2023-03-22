import Box from "@mui/material/Box";
import registerBannerSrc from "assets/images/register.jpg";

export const LoginRegisterImage = () => {
  return (
    <Box
      component="img"
      sx={{
        objectFit: "cover",
        height: "100%",
        maxWidth: "100%",
        borderRadius: "5px",
      }}
      alt="The Blog Banner"
      src={registerBannerSrc}
    />
  );
};
