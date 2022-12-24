import { makeStyles } from "@mui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

export const useStyle = makeStyles({
  header_container: {
    padding: "1rem 2rem",
    "& .site_logo_wrapper": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      "& .site_logo": {
        borderRadius: 0,
      },
    },
    "& .right_side": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      overflow: "hidden",
      "& .nav_list": {
        display: "flex",
        transition: "transform 0.5s linear",
        zIndex: "-1",
        "& > li": {
          margin: "0 1rem",
          "&:hover": {
            color: "#fe956f",
            cursor: "pointer",
          },
        },
        [defaultTheme.breakpoints.down(840)]: {
          transform: "translateX(200%)",
        },
      },
      "& .cart_wrapper": {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        background: "#f8e367",
        zIndex: "1",
        transition: "0.5s ease",
        "& .header_search": {
          width: "7rem",
          border: "none",
          outline: "none",
          padding: "0.3rem",
          borderRadius: "0.3125rem",
        },
        "& .hamburger_menu_icon": {
          display: "none",
        },
        [defaultTheme.breakpoints.down(840)]: {
          background: "#fff",
          flexDirection: "column",
          padding: "0.5rem 0.65rem",
          borderRadius: "0.25rem",
          "& .header_search": {
            display: "none",
          },
          "& .hamburger_menu_icon": {
            display: "block",
            cursor: "pointer",
            width: "1.25rem",
            height: "1.25rem",
            strokeWidth: "2",
          },
        },
      },
    },
    [defaultTheme.breakpoints.down(768)]: {
      // padding: "1rem",
    },
  },
});
