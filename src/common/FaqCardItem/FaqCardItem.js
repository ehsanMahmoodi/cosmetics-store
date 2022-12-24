import { Avatar, Box, Divider, Typography } from "@mui/material";
// style
import { useStyle } from "./FaqCardItem.style";

const FaqCardItem = ({ comment, avatar, name }) => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.faq_card_item_wrapper}>
      <Avatar src={avatar} className={"person_avatar"} />
      <Box className="card_body">
        <Typography className={"comment"}>{comment}</Typography>
        <Divider className={"separate_line"} />
        <Typography className={"person_name"}>{name}</Typography>
      </Box>
    </Box>
  );
};

export default FaqCardItem;
