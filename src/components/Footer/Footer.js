import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
// style
import { useStyle } from "./Footer.style";
// image
import siteImg from "../../assets/images/logo.png";
// icon's
import {
  HiOutlineLink,
  HiOutlineLocationMarker,
  HiOutlineLogin,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { MdPeopleOutline } from "react-icons/md";
const Footer = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.footer_container}>
      <Grid container spacing={2} className={"row"}>
        <Grid item xs={12} md={2} className={"logo_section"}>
          <Box className="inner_logo_section">
            <Avatar src={siteImg} alt={"site logo"} className={"site_img"} />
            <Typography>ecommerce</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={"contactus_section"}>
          <Typography className={"section_title"}>contact us</Typography>
          <ul className="list_container">
            <li className="list_item">
              <HiOutlineLocationMarker />
              <Typography>shiraz</Typography>
            </li>
            <li className="list_item">
              <HiOutlinePhone />
              <Typography>+98 991-899-1149</Typography>
            </li>
            <li className="list_item">
              <HiOutlineMail />
              <Typography>mahmoodie24m@gmail.com</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={6} md={2} className={"account_section"}>
          <Typography className={"section_title"}>account</Typography>
          <ul className="list_container">
            <li className="list_item">
              <HiOutlineLogin />
              <Typography>Sign In</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={6} md={2} className={"company_section"}>
          <Typography className={"section_title"}>company</Typography>
          <ul className="list_container">
            <li className="list_item">
              <MdPeopleOutline />
              <Typography>About us</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className={"resources_section"}>
          <Typography className={"section_title"}>resources</Typography>
          <ul className="list_container">
            <li className="list_item">
              <HiOutlineLink />
              <Typography>Safety Privacy & Terms</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
