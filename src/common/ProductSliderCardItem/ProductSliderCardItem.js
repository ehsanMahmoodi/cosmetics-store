import { Avatar, Box, Button, Typography } from "@mui/material";
// style
import { useStyle } from "./ProductSliderCardItem.style";

const ProductSliderCardItem = ({ title, subTitle, price, avatar }) => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.product_slider_card_item}>
      <Box className="card_detail_wrapper">
        <Typography className={"title"}>{title}</Typography>
        <Typography className={"sub_title"}>{subTitle}</Typography>
        <Typography className={"price"}>{price}$</Typography>
        <Button className={"shop_btn"}>Shop Now</Button>
      </Box>
      <Box className="card_img_wrapper">
        <Avatar src={avatar} className={"card_img"} />
      </Box>
    </Box>
  );
};

export default ProductSliderCardItem;
