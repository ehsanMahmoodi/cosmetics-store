import { makeStyles } from "@mui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

export const useStyle = makeStyles({
  faq_container: {
    margin: "3rem 0",
    padding: "0 2rem",
    "& .row": {
      alignItems: "center",
      "& .left_side": {
        "& .title": {
          fontSize: "1.25rem",
          textTransform: "uppercase",
          fontWeight: "600",
        },
        "& .description": {
          fontSize: "0.8125rem",
          textTransform: "uppercase",
          fontWeight: "400",
          maxWidth: "20rem",
        },
        [defaultTheme.breakpoints.down(600)]: {
          order: "1",
        },
      },
      "& .middle_side": {
        textAlign: "center",
        "& .avatar": {
          borderRadius: "0",
          maxWidth: "28rem",
          width: "100%",
          height: "auto",
          margin: "0 auto",
        },
        [defaultTheme.breakpoints.down(600)]: {
          order: "3",
        },
      },
      "& .right_side": {
        textAlign: "end",
        "& .title": {
          fontSize: "1.25rem",
          textTransform: "uppercase",
          fontWeight: "600",
        },
        "& .description": {
          fontSize: "0.8125rem",
          textTransform: "uppercase",
          fontWeight: "400",
        },
        [defaultTheme.breakpoints.down(600)]: {
          order: "2",
        },
      },
    },
    "& .faq_content_wrapper": {
      "& .title": {
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "1.25rem",
        fontWeight: "600",
      },
      "& .swiper-wrapper": {
        paddingTop: "2rem",
      },
    },
  },
});
