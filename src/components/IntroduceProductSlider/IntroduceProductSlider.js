import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// style
import { useStyle } from "./IntroduceProductSlider.style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// component
import { ProductSliderCardItem } from "../../common";
// data
import { ProductsData } from "../../data/SliderProducts";
import { Navigation, Pagination } from "swiper";

const IntroduceProductSlider = () => {
  // get css style
  const classes = useStyle();
  return (
    <Box className={classes.introduce_product_slider_wrapper}>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          660: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
          },
        }}
      >
        {ProductsData.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductSliderCardItem
              title={item.name}
              avatar={item.img}
              price={item.price}
              subTitle={item.detail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default IntroduceProductSlider;
