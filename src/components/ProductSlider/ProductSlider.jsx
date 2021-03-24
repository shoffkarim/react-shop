import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliderLatProdItems } from "../../redux/actions/SliderLatestProduct";
import ProductItem from "../ProductItem/ProductItem";
import 'swiper/swiper.scss';


function ProductSlider() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSliderLatProdItems());
  }, [dispatch]);

  const items = useSelector(({SliderLatestProduct}) => SliderLatestProduct.items);
  SwiperCore.use([Navigation]);
  return (
    <section className="top-letest-product-section">
      <div className="container">
        <div className="section-title">
          <h2>LATEST PRODUCTS</h2>
        </div>
        {items &&
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            navigation>
            {/* {items.map((obj) => (
              <SwiperSlide key={obj.id}>
                <ProductItem  {...obj}/>
              </SwiperSlide>
            ))} */}
            <SwiperSlide>
              <ProductItem  id={1} imageUrl={"/img/product/12.jpg"}  name= {"White perlum top"} price={"59.90"} mark={""}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem  id={1} imageUrl={"/img/product/12.jpg"}  name= {"White perlum top"} price={"59.90"} mark={""}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem  id={1} imageUrl={"/img/product/12.jpg"}  name= {"White perlum top"} price={"59.90"} mark={""}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem  id={1} imageUrl={"/img/product/12.jpg"}  name= {"White perlum top"} price={"59.90"} mark={""}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem  id={1} imageUrl={"/img/product/12.jpg"}  name= {"White perlum top"} price={"59.90"} mark={""}/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem  id={1} imageUrl={"/img/product/12.jpg"}  name= {"White perlum top"} price={"59.90"} mark={""}/>
            </SwiperSlide>
          </Swiper>
        }
      </div>
    </section>
  );
}
//<div className="product-slider owl-carousel">
export default ProductSlider;
