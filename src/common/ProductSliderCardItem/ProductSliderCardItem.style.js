import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  product_slider_card_item: {
    background: "#fff",
    margin: "0 auto",
    maxWidth: "15rem",
    minHeight: "10rem",
    borderRadius: "0.625rem",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    "& .card_detail_wrapper": {
      alignSelf: "center",
      marginLeft: "0.625rem",
      "& .title": {
        fontSize: "1.0625rem",
        fontWeight: "500",
        textTransform: "uppercase",
      },
      "& .sub_title": {
        color: "#525252",
        fontSize: "0.6875rem",
        fontWeight: "400",
      },
      "& .price": {
        fontSize: "1.625rem",
        fontWeight: "800",
        margin: "0.5rem 0",
      },
      "& .shop_btn": {
        border: "0.0625rem solid #212121",
        color: "#777777",
        fontSize: "0.6875rem",
        textTransform: "capitalize",
        borderRadius: "1.5rem",
        height: "2rem",
        padding: "0.625rem",
      },
    },
    "& .card_img_wrapper": {
      position: "absolute",
      right: "0",
      top: "1.875rem",
      transform: "rotate(-20deg)",
      "& .card_img": {
        borderRadius: "0",
        width: "5rem",
        height: "auto",
      },
    },
  },
});
