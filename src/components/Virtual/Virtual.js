import { Avatar, Box, Typography } from "@mui/material";
import { useStyle } from "./Virtual.style";
import ReactCompareImage from "react-compare-image";
// image's
import shadeImg from "../../assets/images/shade.png";
import beforeImg from "../../assets/images/before.png";
import afterImg from "../../assets/images/after.png";
const Virtual = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.virtual_container}>
      <Box className="detail_wrapper">
        <Typography className={"title"}>virtual try-on</Typography>
        <Typography className={"description"}>
          never buy the wrong shade again!
        </Typography>
        <Box>
          <Typography>Try Now!</Typography>
          <Avatar src={shadeImg} className={"shape"} />
        </Box>
      </Box>
      <Box className="compare_image_wrapper">
        <ReactCompareImage leftImage={beforeImg} rightImage={afterImg} />
      </Box>
    </Box>
  );
};

export default Virtual;
