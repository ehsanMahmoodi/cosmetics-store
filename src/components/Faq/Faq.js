import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// style
import { useStyle } from "./Faq.style";
// image
import personImg from "../../assets/images/testimonialHero.png";
// component
import { FaqCardItem } from "../../common";
// data
import { TestimonialsData } from "../../data/testimonials";

const Faq = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.faq_container}>
      <Grid container className={"row"} spacing={2}>
        <Grid item xs={6} sm={4} className={"left_side"}>
          <Typography className={"title"}>top rated</Typography>
          <Typography className={"description"}>
            seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={"middle_side"}>
          <img src={personImg} className={"avatar"} alt={"img"} />
        </Grid>
        <Grid item xs={6} sm={4} className={"right_side"}>
          <Typography className={"title"}>100K</Typography>
          <Typography className={"description"}>
            happy customers with us
          </Typography>
        </Grid>
      </Grid>
      <Box className="faq_content_wrapper">
        <Typography className={"title"}>reviews</Typography>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            752: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {TestimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <FaqCardItem
                avatar={item.image}
                name={item.name}
                comment={item.comment}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Faq;
