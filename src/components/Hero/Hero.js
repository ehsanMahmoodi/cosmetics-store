import { Avatar, Box, Grid, Typography } from "@mui/material";
// style
import { useStyle } from "./Hero.style";
// image
import personImg from "../../assets/images/hero.png";
// icon's
import { RiLock2Fill } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";

const Hero = () => {
  // play hero img animation in first render
  const [playAnimation, setPlayAnimation] = useState(false);

  // get css style
  const classes = useStyle({ playAnimation });

  useEffect(() => {
    setPlayAnimation(true);
    return () => {
      setPlayAnimation(false);
    };
  }, []);

  return (
    <Box className={classes.hero_container}>
      <Grid container>
        <Grid item xs={4} sm={3} className={"left_side"}>
          <Box className="top">
            <Typography>skin protection cream</Typography>
          </Box>
          <Box className="bottom">
            <Typography>Trendy Collection</Typography>
            <Typography>
              seedily say has suitable disposal and boy. Exercise joy man
              children rejoiced
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8} sm={6} className={"middle_side"}>
          <Box className="overlay">
            <Avatar src={personImg} className={"hero_img"} />
          </Box>
          <Box className="hero_cart">
            <Box className="lock_avatar_wrapper">
              <RiLock2Fill />
            </Box>
            <Box className="signup">
              <Typography>Best Signup Offers</Typography>
              <HiOutlineArrowNarrowRight className={"arrow_right"} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className={"right_side"}>
          <Box className="top">
            <Typography className={"title"}>1.5m</Typography>
            <Typography className={"sub_title"}>Monthly traffic</Typography>
          </Box>
          <Box className="bottom">
            <Typography className={"title"}>100K</Typography>
            <Typography className={"sub_title"}>Happy Customers</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
