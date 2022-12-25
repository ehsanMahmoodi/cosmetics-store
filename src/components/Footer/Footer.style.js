import { makeStyles } from "@mui/styles";
import { defaultTheme } from "../../theme/defaultTheme";

export const useStyle = makeStyles({
  footer_container: {
    borderTop: "0.125rem solid #fff",
    padding: "2rem",
    "& .row": {
      "& .logo_section": {
        "& .inner_logo_section": {
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          "& .site_img": {
            borderRadius: "0",
          },
          "& > p": {
            fontSize: "0.9375rem",
            fontWeight: "600",
          },
          [defaultTheme.breakpoints.down(900)]: {
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      "& .section_title": {
        textTransform: "capitalize",
        fontSize: "1.1875rem",
        fontWeight: "500",
      },
      "& .list_container": {
        "& .list_item": {
          display: "flex",
          alignItems: "center",
          marginTop: "0.5rem",
          "& > svg": {
            width: "1.25rem",
            height: "1.25rem",
            marginRight: "0.625rem",
          },
        },
      },
    },
  },
});
