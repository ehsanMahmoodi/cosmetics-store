import { makeStyles } from "@mui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

export const useStyle = makeStyles({
  introduce_product_slider_wrapper: {
    marginTop: "2rem",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    "& .swiper": {
      width: "70%",
      position: "unset",
      "& .swiper-button-prev": {
        left: "10%",
      },
      "& .swiper-button-next": {
        right: "10%",
      },
      [defaultTheme.breakpoints.down(930)]: {
        width: "85%",
        "& .swiper-button-prev": {
          left: "3.5%",
        },
        "& .swiper-button-next": {
          right: "3.5%",
        },
      },
    },
  },
});
