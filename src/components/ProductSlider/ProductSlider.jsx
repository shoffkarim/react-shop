import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchSliderLatProdItems } from "../../redux/actions/SliderLatestProduct";

import ProductItem from "../ProductItem/ProductItem";


function ProductSlider() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSliderLatProdItems());
  }, [dispatch]);

  const items = useSelector(
    ({ SliderLatestProduct }) => SliderLatestProduct.items
  );
  const isLoaded = useSelector(
    ({ SliderLatestProduct }) => SliderLatestProduct.isLoaded
  );
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <section className="top-letest-product-section">
      {isLoaded && (
        <div className="container">
          <div className="section-title">
            <h2>LATEST PRODUCTS</h2>
          </div>
          <Swiper slidesPerView={4} spaceBetween={30} loop={true} speed={500} autoplay={{delay:5000}} navigation>
            {items.map((obj) => (
              <SwiperSlide key={obj.id}>
                <ProductItem {...obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}

export default ProductSlider;
