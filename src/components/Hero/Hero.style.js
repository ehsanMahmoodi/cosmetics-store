import { makeStyles } from "@mui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

export const useStyle = makeStyles({
  hero_container: {
    padding: "0 2rem",
    marginTop: "1.5rem",
    "& > div": {
      minHeight: "20rem",
    },
    "& .left_side": {
      display: "flex",
      flexDirection: "column",
      "& .top": {
        "& p": {
          width: "min-content",
          fontSize: "1.125rem",
          fontWeight: "600",
        },
      },
      "& .bottom": {
        marginTop: "4.5rem",
        "& p:nth-child(1)": {
          width: "min-content",
          fontSize: "1.625rem",
          fontWeight: "600",
        },
        "& p:nth-child(2)": {
          maxWidth: "11.875rem",
        },
      },
      [defaultTheme.breakpoints.down(840)]: {
        maxWidth: "33.333333%",
        flexBasis: "33.333333%",
      },
    },
    "& .middle_side": {
      position: "relative",
      "& .overlay": {
        width: "16rem",
        height: "16rem",
        borderRadius: "50%",
        position: "relative",
        margin: "0 auto",
        background:
          "linear-gradient(135.74deg, #0bb5ff 14.09%, #6dd3fe 83.81%)",
        "& .hero_img": {
          transition: "bottom 1s ease-in-out",
          borderRadius: "0",
          width: "17rem",
          height: "16rem",
          position: "absolute",
          left: "0",
          bottom: ({ playAnimation }) => (playAnimation ? "0px" : "-13px"),
        },
      },
      "& .hero_cart": {
        position: "absolute",
        right: "0",
        bottom: "32%",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        "& .lock_avatar_wrapper": {
          width: "1.875rem",
          height: "1.875rem",
          background: "#fff",
          border: "0.1875rem solid #000",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .signup": {
          background: "#fff",
          display: "flex",
          alignItems: "center",
          borderRadius: "0.6875rem",
          height: "2.5rem",
          padding: "0.25rem 0.625rem",
          "& > p": {
            fontSize: "0.75rem",
            maxWidth: "6.25rem",
          },
          "& .arrow_right": {
            border: "0.0625rem solid skyblue",
            borderRadius: "50%",
            padding: "0.25rem",
          },
        },
        [defaultTheme.breakpoints.down(840)]: {
          bottom: "4% !important",
          gap: "0.6875rem",
          "& .signup": {
            maxWidth: "6rem",
            "& > p": {
              fontSize: "0.6875rem",
            },
          },
        },
      },
      [defaultTheme.breakpoints.down(840)]: {
        maxWidth: "66.666667%",
        flexBasis: "66.666667%",
      },
    },
    "& .right_side": {
      display: "flex",
      flexDirection: "column",
      "& > div": {
        textAlign: "right",
        "& .title": {
          fontSize: "1.4375rem",
          fontWeight: "600",
        },
        "& .sub_title": {
          fontSize: "0.8125rem",
          fontWeight: "400",
          color: "#3d3d3d",
        },
        "&.bottom": {
          marginTop: "6rem",
        },
      },
      [defaultTheme.breakpoints.down(840)]: {
        maxWidth: "100%",
        flexBasis: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "1.5rem",
        "& > div": {
          textAlign: "left",
          "&.bottom": {
            marginTop: "0rem !important",
          },
        },
      },
    },
  },
});
