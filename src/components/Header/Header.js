import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
// style
import { useStyle } from "./Header.style";
// image
import logo from "../../assets/images/logo.png";
// icon
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const classes = useStyle();
  return (
    <Container
      maxWidth={false}
      className={classes.header_container}
      component={"header"}
    >
      <Grid container>
        <Grid item xs={6} sm={2} className={"site_logo_wrapper"}>
          <Avatar src={logo} alt={"site-logo"} className={"site_logo"} />
          <Typography>ecommerce</Typography>
        </Grid>
        <Grid item xs={6} sm={10} className={"right_side"}>
          <ul className="nav_list">
            <li className="list_item">Collections</li>
            <li className="list_item">Brands</li>
            <li className="list_item">New</li>
            <li className="list_item">Sales</li>
            <li className="list_item">Eng</li>
          </ul>
          <Box className={"cart_wrapper"}>
            <input
              type="text"
              placeholder={"Search"}
              className={"header_search"}
            />
            <HiOutlineBars3BottomRight className={"hamburger_menu_icon"} />
            <CgShoppingBag className={"cart_icon"} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
