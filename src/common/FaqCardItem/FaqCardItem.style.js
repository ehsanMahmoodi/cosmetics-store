import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  faq_card_item_wrapper: {
    maxWidth: "27rem",
    position: "relative",
    "& .person_avatar": {
      position: "absolute",
      top: "-1.125rem",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "& .card_body": {
      borderRadius: "0.3125rem",
      overflow: "hidden",
      background: "#fff",
      "& .comment": {
        margin: "1.7rem 0.8125rem 0.75rem",
        textAlign: "center",
      },
      "& .separate_line": {
        margin: "0 2.5rem 0.75rem",
      },
      "& .person_name": {
        textAlign: "center",
        marginBottom: "0.625rem",
      },
    },
  },
});
