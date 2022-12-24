import { makeStyles } from "@mui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

export const useStyle = makeStyles({
  virtual_container: {
    margin: "4rem auto 0",
    width: "64%",
    display: "flex",
    justifyContent: "space-between",
    "& .detail_wrapper": {
      minHeight: "8rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      "& .title": {
        textTransform: "uppercase",
        fontSize: "1.1875rem",
        fontWeight: "600",
      },
      "& .description": {
        maxWidth: "12rem",
        fontSize: "0.875rem",
        textTransform: "uppercase",
      },
      "& > div": {
        "& > p": {
          fontSize: "1rem",
          fontWeight: "600",
        },
        "& .shape": {
          borderRadius: "0",
          width: "6rem",
          height: "1rem",
        },
      },
    },
    "& .compare_image_wrapper": {
      maxWidth: "26rem",
      width: "100%",
      height: "15.5rem",
      overflow: "hidden",
    },
    [defaultTheme.breakpoints.down(930)]: {
      width: "80%",
    },
    [defaultTheme.breakpoints.down(600)]: {
      flexDirection: "column",
      alignItems: "center",
      "& .compare_image_wrapper": {
        marginTop: "1rem",
      },
    },
  },
});
